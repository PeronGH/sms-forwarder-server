import type { VALID_HEADER_KEYS } from "$/utils/constants.ts";

export type ValidHeaderKey = typeof VALID_HEADER_KEYS[number];

export type MessageHeader = {
  [key in ValidHeaderKey]?: string;
};

export interface Message extends MessageHeader {
  body: string;
}
