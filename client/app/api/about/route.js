// "/about"

import APP from '@data/app.json';

export async function GET(request) {
  return new Response(JSON.stringify(APP), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
