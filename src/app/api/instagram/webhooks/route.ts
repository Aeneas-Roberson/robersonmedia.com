import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// GET endpoint for webhook verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Verify the webhook
  if (mode === 'subscribe' && token === process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
    console.log('Webhook verified successfully');
    return new Response(challenge, { status: 200 });
  } else {
    console.error('Webhook verification failed');
    return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
  }
}

// POST endpoint for receiving webhook events
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-hub-signature-256');

    // Verify the payload signature
    if (process.env.INSTAGRAM_APP_SECRET && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', process.env.INSTAGRAM_APP_SECRET)
        .update(body)
        .digest('hex');
      
      const receivedSignature = signature.replace('sha256=', '');
      
      if (expectedSignature !== receivedSignature) {
        console.error('Invalid webhook signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    const data = JSON.parse(body);
    console.log('Instagram webhook received:', JSON.stringify(data, null, 2));

    // Process different webhook events
    if (data.object === 'instagram') {
      for (const entry of data.entry) {
        const instagramId = entry.id;
        const time = entry.time;

        // Handle different field changes
        if (entry.changes) {
          for (const change of entry.changes) {
            const field = change.field;
            const value = change.value;

            switch (field) {
              case 'comments':
                console.log(`New comment on Instagram account ${instagramId}:`, value);
                await handleCommentUpdate(instagramId, value);
                break;
              
              case 'mentions':
                console.log(`New mention for Instagram account ${instagramId}:`, value);
                await handleMentionUpdate(instagramId, value);
                break;
              
              case 'story_insights':
                console.log(`Story insights update for Instagram account ${instagramId}:`, value);
                await handleStoryInsights(instagramId, value);
                break;
              
              case 'live_comments':
                console.log(`Live comment for Instagram account ${instagramId}:`, value);
                await handleLiveComment(instagramId, value);
                break;
              
              default:
                console.log(`Unknown field ${field} for Instagram account ${instagramId}:`, value);
            }
          }
        }
      }
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Instagram webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handler functions for different webhook events
async function handleCommentUpdate(instagramId: string, commentData: any) {
  // TODO: Process comment updates
  // You can store comments in your database, moderate them, etc.
  console.log('Processing comment update:', commentData);
}

async function handleMentionUpdate(instagramId: string, mentionData: any) {
  // TODO: Process mention updates
  // You can respond to mentions, track brand mentions, etc.
  console.log('Processing mention update:', mentionData);
}

async function handleStoryInsights(instagramId: string, insightsData: any) {
  // TODO: Process story insights
  // You can track story performance, engagement metrics, etc.
  console.log('Processing story insights:', insightsData);
}

async function handleLiveComment(instagramId: string, liveCommentData: any) {
  // TODO: Process live comments
  // You can moderate live stream comments in real-time
  console.log('Processing live comment:', liveCommentData);
} 