# Twitter OAuth 2.0 Setup Guide

This guide will help you configure your Twitter Developer App correctly to fix the "Something went wrong" error.

## Required Twitter Developer Portal Configuration

### 1. App Type Selection
- Go to your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
- Select **Web App** or **Automated App/Bot** (these are confidential clients)
- Avoid "Native App" or "Single Page App" for server-side implementations

### 2. Authentication Settings
- Enable **OAuth 2.0** in your app settings
- Make sure you can see both:
  - **Client ID** (starts with a long string)
  - **Client Secret** (for confidential clients)

### 3. Callback URLs Configuration
**CRITICAL**: Twitter requires exact match validation for callback URLs.

#### For Development (localhost):
```
http://localhost:3000/twitter/callback
```

#### For Production:
```
https://robersonmedia.com/twitter/callback
```

**Important Notes:**
- Use `localhost` instead of `127.0.0.1`
- Do NOT include trailing slashes
- The URL must match exactly what your app sends

### 4. Environment Variables
Make sure your `.env.local` file contains:

```bash
# Twitter OAuth 2.0 Credentials
NEXT_PUBLIC_TWITTER_CLIENT_ID="your_actual_client_id_here"
TWITTER_CLIENT_SECRET="your_actual_client_secret_here"

# Base URL (important for redirect URI)
NEXT_PUBLIC_BASE_URL="http://localhost:3000"  # for development
# NEXT_PUBLIC_BASE_URL="https://robersonmedia.com"  # for production
```

### 5. Permissions and Scopes
The app requests these scopes:
- `tweet.read` - Read tweets
- `tweet.write` - Post and delete tweets
- `users.read` - Read user information
- `offline.access` - Refresh token support

### 6. App Permissions
In your Twitter app settings, make sure you have:
- **Read** permissions (minimum)
- **Read and Write** (if you plan to post tweets)

## Common Issues and Solutions

### "Something went wrong" Error
This usually means:
1. **Callback URL mismatch** - Check exact URL in Twitter settings
2. **Wrong client credentials** - Verify you're using OAuth 2.0 credentials
3. **App not approved** - Some Twitter apps need approval for certain permissions

### Client Credentials Location
In your Twitter Developer Portal:
1. Go to your app
2. Click "Keys and Tokens"
3. Under "OAuth 2.0 Client ID and Client Secret" section:
   - Use the **Client ID** (not Consumer Key)
   - Use the **Client Secret** (not Consumer Secret)

### Localhost vs 127.0.0.1
Twitter's OAuth 2.0 flow works better with `localhost:3000` than `127.0.0.1:3000`.

## Testing the Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/twitter/login`

3. Click "Connect with Twitter"

4. You should be redirected to Twitter's authorization page (x.com domain)

5. After authorization, you'll be redirected back to your callback URL

## Debugging Steps

If you still get errors:

1. **Check the browser console** for error messages
2. **Check your server logs** for detailed error information
3. **Verify the generated auth URL** in the console includes:
   - Correct client_id
   - Correct redirect_uri
   - Valid code_challenge

## Example Working Configuration

**Twitter Developer Portal Settings:**
- App Type: Web App
- Callback URL: `http://localhost:3000/twitter/callback`
- OAuth 2.0: Enabled

**Environment Variables:**
```bash
NEXT_PUBLIC_TWITTER_CLIENT_ID="VUJtSE4ybjV..."
TWITTER_CLIENT_SECRET="ClFWPc_g71XA..."
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

**Generated Auth URL Example:**
```
https://x.com/i/oauth2/authorize?response_type=code&client_id=VUJtSE4ybjV...&redirect_uri=http%3A//localhost%3A3000/twitter/callback&scope=tweet.read%20users.read%20offline.access&state=abc123&code_challenge=xyz789&code_challenge_method=S256
```

## Still Having Issues?

1. Double-check your Twitter app is using OAuth 2.0 (not 1.0a)
2. Ensure your app type is "Web App" or "Automated App/Bot"
3. Verify the callback URL matches exactly (no trailing slash)
4. Check that you're using the OAuth 2.0 Client ID, not the Consumer Key
5. Make sure your app has the necessary permissions approved

For more help, check the [Twitter API documentation](https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/authorization-code) or open an issue with your specific error messages. 