export const SENDER_KEY = Deno.env.get("SENDER_KEY") || "msg";
export const RECEIVER_KEY = Deno.env.get("RECEIVER_KEY") ?? "";

export const VALID_HEADER_KEYS = ["from", "to", "at"] as const;
