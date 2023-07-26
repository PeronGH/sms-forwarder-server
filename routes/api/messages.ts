import { Handlers } from "$fresh/server.ts";
import { RECEIVER_KEY, SENDER_KEY } from "$/utils/constants.ts";
import { parseMessage } from "$/utils/message_parser.ts";
import { addMessage, clearMessages } from "$/utils/kv.ts";
import { getCookies } from "$std/http/cookie.ts";

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

    return Response.json({ ok: true }, { status: 201 });
  },

  async DELETE(req) {
    const { receiverKey = "", senderKey = "" } = getCookies(req.headers);

    if (receiverKey !== RECEIVER_KEY || senderKey !== SENDER_KEY) {
      return Response.json(
        { ok: false, msg: "Invalid keys" },
        { status: 400 },
      );
    }

    return Response.json({ ok: await clearMessages() });
  },
};
