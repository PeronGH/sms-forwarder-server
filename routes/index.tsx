import { listMessages } from "$/utils/kv.ts";
import MessageCard from "$/components/MessageCard.tsx";
import { Message } from "$/utils/types.ts";
import { getCookies } from "$std/http/cookie.ts";
import { RECEIVER_KEY } from "$/utils/constants.ts";
import ReceiverKeyInputCard from "$/components/ReceiverKeyInputCard.tsx";

export default async function MessagesViewer(req: Request) {
  const { receiverKey = "" } = getCookies(req.headers);

  if (receiverKey !== RECEIVER_KEY) {
    return (
      <div className="space-y-4 p-8 max-w-lg mx-auto">
        <ReceiverKeyInputCard />
      </div>
    );
  }

  const messages: Message[] = await listMessages();

  return (
    <div className="space-y-4 p-8 max-w-lg mx-auto">
      {messages.map((message) => <MessageCard message={message} />)}
    </div>
  );
}
