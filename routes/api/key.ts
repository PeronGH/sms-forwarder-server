import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const params = new URLSearchParams(await req.text());
    const key = params.get("key") ?? "";

    const headers = new Headers({
      location: "/",
    });

    setCookie(headers, {
      name: "receiverKey",
      value: key,
      path: "/",
    });

    return Response.json({ ok: true }, { headers, status: 302 });
  },
};
