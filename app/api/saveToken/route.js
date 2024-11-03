// app/api/saveToken/route.js
import { saveToken } from '../../../utils/firestore';

export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const tokenData = await req.json();

    // Add some basic validation
    if (!tokenData.contractAddress || !tokenData.walletAddress) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Save to Firestore
    const docId = await saveToken(tokenData);
    console.log(tokenData);
    
    // Return success response
    return new Response(
      JSON.stringify({ success: true, id: docId, message: 'Token data saved successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error saving token data', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
