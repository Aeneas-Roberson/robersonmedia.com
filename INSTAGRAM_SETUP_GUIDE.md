# Instagram Video Posting Setup Guide

This guide will help you set up Instagram business login, webhooks, and video posting functionality for your application.

## Prerequisites

1. **Instagram Business Account**: You need an Instagram Business or Creator account
2. **Facebook Page**: Your Instagram account must be connected to a Facebook Page
3. **Meta Developer Account**: Create an account at [developers.facebook.com](https://developers.facebook.com)
4. **HTTPS Domain**: Instagram requires HTTPS for redirects and webhooks

## Step 1: Create a Meta App

1. Go to [Facebook Developers](https://developers.facebook.com/apps/)
2. Click "Create App"
3. Select "Business" as app type
4. Fill in app details:
   - App Name: Your application name
   - Contact Email: Your email address
5. Click "Create App"

## Step 2: Add Instagram Product

1. In your app dashboard, click "Add Product"
2. Find "Instagram" and click "Set Up"
3. Select "Instagram API with Instagram Login"
4. Complete the configuration:
   - Add your redirect URI: `https://yourdomain.com/instagram/login`  |'https://robersonmedia.com/instagram/login'
   - Add your deauthorize callback URL: `https://yourdomain.com/instagram/deauth`   | 'https://robersonmedia.com/instagram/deauth'
   - Add your data deletion request URL: `https://yourdomain.com/instagram/data-deletion`   | 'https://robersonmedia.com/instagram/data-deletion'

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://yourdomain.com    | Done

# Instagram API
NEXT_PUBLIC_INSTAGRAM_CLIENT_ID=your_instagram_client_id_here
INSTAGRAM_CLIENT_ID=your_instagram_client_id_here
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret_here
INSTAGRAM_APP_SECRET=your_instagram_app_secret_here

# Webhooks
INSTAGRAM_WEBHOOK_VERIFY_TOKEN=your_custom_verify_token_here
```

## Step 4: Set Up Webhooks

### 4.1 Configure Webhook URL

1. In your Meta app dashboard, go to Instagram > Configuration
2. Add webhook URL: `https://yourdomain.com/api/instagram/webhooks`  | 'https://robersonmedia.com/api/instagram/webhooks'
3. Add verify token (same as in your environment variables)
4. Subscribe to these fields:
   - `comments`
   - `mentions`
   - `story_insights`
   - `live_comments`

### 4.2 Test Webhook Verification

1. Instagram will send a GET request to verify your webhook
2. Your webhook endpoint should return the challenge parameter
3. Check your server logs to ensure verification succeeds

## Step 5: Business Login Flow

### 5.1 Authorization URL

The login button redirects users to:
```
https://api.instagram.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=https://yourdomain.com/instagram/login&
  scope=user_profile,user_media&
  response_type=code
```

### 5.2 Token Exchange

After user authorization, Instagram redirects back with a code parameter.
Your `/api/instagram/auth` endpoint exchanges this code for an access token.

## Step 6: Video Upload Process

### 6.1 Video Requirements

- **Format**: MP4 recommended
- **Size**: Maximum 100MB
- **Duration**: Maximum 60 seconds for feed posts
- **Resolution**: Minimum 720p

### 6.2 Upload Steps

1. **Upload to Cloud Storage**: First upload video to your cloud storage (AWS S3, Cloudflare R2, etc.)
2. **Create Media Container**: Call Instagram API to create a media container with video URL
3. **Wait for Processing**: Poll the container status until processing is complete
4. **Publish Media**: Publish the processed media to the user's Instagram account

## Step 7: Cloud Storage Setup (Required for Video Uploads)

### Option A: AWS S3

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

Add to environment variables:
```env
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-s3-bucket-name
```

### Option B: Cloudflare R2

```bash
npm install @aws-sdk/client-s3  # R2 uses S3-compatible API
```

Add to environment variables:
```env
CLOUDFLARE_R2_ACCESS_KEY_ID=your_r2_access_key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_r2_secret_key
CLOUDFLARE_R2_BUCKET_NAME=your-r2-bucket-name
CLOUDFLARE_R2_ENDPOINT=your-r2-endpoint-url
```

## Step 8: Database Setup (Optional but Recommended)

To store user tokens and upload history, set up a database:

### Using Prisma with PostgreSQL

1. Install Prisma:
```bash
npm install prisma @prisma/client
npx prisma init
```

2. Add to `schema.prisma`:
```prisma
model InstagramUser {
  id            String   @id @default(cuid())
  instagramId   String   @unique
  username      String
  accessToken   String
  tokenExpires  DateTime?
  accountType   String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  uploads       Upload[]
}

model Upload {
  id            String   @id @default(cuid())
  userId        String
  mediaId       String?
  caption       String?
  videoUrl      String
  status        String   @default("pending")
  createdAt     DateTime @default(now())
  user          InstagramUser @relation(fields: [userId], references: [id])
}
```

3. Run migrations:
```bash
npx prisma migrate dev
npx prisma generate
```

## Step 9: Testing Your Setup

### 9.1 Test Instagram Login

1. Visit `https://yourdomain.com/instagram/login`
2. Click "Connect Instagram Business Account"
3. Authorize the app with your Instagram Business account
4. Verify you see a success message with your account info

### 9.2 Test Webhooks

1. Post a comment on your Instagram account
2. Check your server logs for webhook events
3. Verify the webhook signature validation

### 9.3 Test Video Upload

1. Log in to your Instagram account through the app
2. Use the upload API endpoint to post a test video
3. Verify the video appears on your Instagram account

## Step 10: App Review and Going Live

### 10.1 Basic Access vs Advanced Access

- **Basic Access**: Limited to your own Instagram accounts (up to 5)
- **Advanced Access**: Required for public use, requires app review

### 10.2 App Review Process

1. Complete your app's basic information
2. Add detailed descriptions of how you use Instagram data
3. Provide screencasts showing your app's functionality
4. Submit for review (can take 1-2 weeks)

### 10.3 Required for App Review

- Privacy Policy URL
- Terms of Service URL
- Data Deletion Instructions URL
- App demonstration video
- Detailed use case description

## Troubleshooting

### Common Issues

1. **"Invalid Redirect URI"**: Ensure your redirect URI exactly matches what's configured in your app
2. **"Invalid Client"**: Check your client ID and secret are correct
3. **Webhook Verification Failed**: Ensure your verify token matches and your endpoint returns the challenge
4. **Video Upload Failed**: Check video format, size, and ensure your cloud storage URL is publicly accessible
5. **Token Expired**: Implement token refresh logic for long-lived tokens

### Debug Tips

1. Check server logs for detailed error messages
2. Use Instagram's Graph API Explorer for testing
3. Verify all environment variables are set correctly
4. Ensure your domain has valid HTTPS certificate

## Security Best Practices

1. **Secure Token Storage**: Encrypt access tokens in your database
2. **Validate Webhooks**: Always verify webhook signatures
3. **HTTPS Only**: Never use HTTP for production
4. **Rate Limiting**: Implement rate limiting to avoid API limits
5. **Input Validation**: Validate all user inputs and file uploads

## API Limits

- **Requests**: 200 calls per hour per user (basic access)
- **Video Size**: 100MB maximum
- **Video Duration**: 60 seconds for feed posts
- **Rate Limits**: Respect Instagram's rate limiting

## Support

If you encounter issues:

1. Check the [Instagram Platform Documentation](https://developers.facebook.com/docs/instagram-platform)
2. Review your app's webhook logs
3. Test with Instagram's Graph API Explorer
4. Contact support at aivideos@email.com

---

*Last updated: May 30, 2025* 