import { Message } from "$/utils/types.ts";
import { VALID_HEADER_KEYS } from "$/utils/constants.ts";

const validHeaderKeysSet = new Set<string>(VALID_HEADER_KEYS);

export function parseMessage(messageText: string): Message {
  const headerEnd = messageText.indexOf("\n\n");

  if (headerEnd === -1) {
    return { body: messageText };
  }

  const headers = messageText
    .slice(0, headerEnd)
    .split("\n")
    .map((line) => line.split(":", 2) as [string, string])
    .map(([key, value]) => [key.trim().toLowerCase(), value.trim()])
    .filter(([key, value]) => validHeaderKeysSet.has(key) && value)
    .reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {} as Record<string, string>,
    );

  const body = messageText.slice(headerEnd + 2);

  return { ...headers, body };
}

Deno.test("parseMessage", () => {
  const messageText = `From: 123
To: 456
At: 07/25, 10:00 PM

This is a message`;
  const message = parseMessage(messageText);
  console.log(message);
});
