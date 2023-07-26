import { listMessages } from "$/utils/kv.ts";
import MessageCard from "$/components/MessageCard.tsx";
import { Message } from "$/utils/types.ts";
import { getCookies } from "$std/http/cookie.ts";
import { RECEIVER_KEY } from "$/utils/constants.ts";
import ReceiverKeyInputCard from "$/components/ReceiverKeyInputCard.tsx";
import { Head } from "$fresh/src/runtime/head.ts";

export default async function MessagesViewer(req: Request) {
  const { receiverKey = "" } = getCookies(req.headers);

  if (receiverKey !== RECEIVER_KEY) {
    return (
      <>
        <Head>
          <title>SMS Forwarder Server | Login</title>
        </Head>
        <div className="space-y-4 p-4 md:p-8 max-w-lg mx-auto">
          <ReceiverKeyInputCard />
        </div>
      </>
    );
  }

  const messages: Message[] = await listMessages();

  return (
    <>
      <Head>
        <title>SMS Forwarder Server | Messages</title>
      </Head>
      <div className="space-y-4 p-4 md:p-8 max-w-lg mx-auto">
        {messages.map((message) => <MessageCard message={message} />)}
      </div>
    </>
  );
}
