// "/team"

import TEAM from '../../../data/team.json';

export async function GET(request) {
  return new Response(JSON.stringify(TEAM), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
