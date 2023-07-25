import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const body = await req.text();
    console.log(req);
    console.log(body);
    return new Response();
  },
};
