import { getContactMessages } from "@/lib/data";

const AdminContacts = async () => {
  const messages = await getContactMessages();

  if (messages.length === 0) {
    return (
      <div className="text-center text-sm text-zinc-500 italic uppercase flex items-center justify-center">
        0 messages in the database !
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 rounded-xl">
      <h2 className="text-center font-semibold text-2xl py-5">
        Contact Messages
      </h2>

      <ul className="px-5 pb-5 space-y-10">
        {messages?.map((message) => (
          <li
            key={message.id}
            className="grid grid-cols-3"
          >
            <h3 className="font-bold text-xl">{message.name}</h3>
            <p className="text-zinc-500 text-sm">{message.email}</p>
            <p className="text-zinc-500 text-sm">{message.phone}</p>
            <p className="col-start-2 row-start-1 row-span-2 col-span-2 bg-white p-5 rounded-lg text-zinc-800">
              {message.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminContacts;
