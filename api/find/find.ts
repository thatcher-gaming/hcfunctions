import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  let results = [];
  const FETCH_URL = "https://heathens.club/~leah/recipes/recipes.json";
  const QUERY = event.queryStringParameters.query
  console.log(QUERY)
  const res = await fetch(FETCH_URL);
  const recipes = await res.json();

  results = recipes['files'].filter((o) => {
    return o.content.name.toLowerCase()
      .includes(QUERY.toLowerCase());
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      results: results,
      found: results.length
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
}
