import { FunctionComponent } from "preact";

const ReceiverKeyInputCard: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-lime-500 p-4 rounded-lg shadow-lg">
      <form
        className="mx-auto max-w-md bg-white p-8 rounded-lg shadow-md"
        method="POST"
        action="/api/key"
      >
        <h2 className="text-gray-800 font-bold text-xl mb-4">
          Enter Receiver Key
        </h2>

        <div className="text-gray-700 mb-4">
          <input
            name="key"
            className="block w-full bg-gray-200 border border-gray-300 rounded p-3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full inline-block bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition duration-150"
        >
          Save Key
        </button>
      </form>
    </div>
  );
};

export default ReceiverKeyInputCard;
