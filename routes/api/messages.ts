import { Handlers } from "$fresh/server.ts";
import { RECEIVER_KEY, SENDER_KEY } from "$/utils/constants.ts";
import { parseMessage } from "$/utils/message_parser.ts";
import { addMessage, listMessages } from "$/utils/kv.ts";

export const handler: Handlers = {
  async POST(req) {
    const rawText = await req.text();
    const params = new URLSearchParams(rawText);
    const messageText = params.get(SENDER_KEY);

    if (!messageText) {
      return Response.json(
        { ok: false, msg: "No message provided" },
        { status: 400 },
      );
    }

    const message = parseMessage(messageText);
    await addMessage(message);

    return Response.json({ ok: true });
  },

  async GET(req) {
    if (req.headers.get("X-Token") ?? "" !== RECEIVER_KEY) {
      return Response.json(
        { ok: false, msg: "Invalid token" },
        { status: 401 },
      );
    }

    const messages = await listMessages();

    return Response.json({ ok: true, data: messages });
  },
};
