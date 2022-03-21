import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  

  return {
    statusCode: 200,
    body: JSON.stringify({

    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
}
