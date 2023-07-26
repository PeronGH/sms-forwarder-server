import { FunctionComponent } from "preact";
import { Message } from "$/utils/types.ts";

export interface MessageCardProps {
  message: Message;
}

const MessageCard: FunctionComponent<MessageCardProps> = ({ message }) => {
  const { from, to, at, body } = message;

  return (
    <div className="bg-gradient-to-r from-teal-500 to-lime-500 p-4 rounded-lg shadow-lg">
      {from &&
        (
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-lg">{from}</div>

            {at && <div className="text-white text-sm">{at}</div>}
          </div>
        )}

      {to &&
        (
          <div className="flex gap-2 items-center mt-3">
            <div className="text-white font-semibold text-base">To:</div>

            <div className="text-teal-100 font-medium text-sm">{to}</div>
          </div>
        )}

      {from || to ? <div className="mt-3" /> : null}

      <div className="text-white">
        {body}
      </div>
    </div>
  );
};

export default MessageCard;
