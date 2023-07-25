import { Message } from "$/utils/types.ts";

const kv = await Deno.openKv();

const MESSAGES_PREFIX = "messages";

export async function addMessage(message: Message) {
  const key = [MESSAGES_PREFIX, Date.now(), crypto.randomUUID()];
  await kv.set(key, message);
}

export async function listMessages() {
  const entries = kv.list<Message>({ prefix: [MESSAGES_PREFIX] }, {
    reverse: true,
    batchSize: 500,
  });

  const messages: Message[] = [];

  for await (const { value: message } of entries) {
    messages.push(message);
  }

  return messages;
}
