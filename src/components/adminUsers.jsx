import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="bg-zinc-800 rounded-xl">
      <h2 className="pl-5 font-bold text-sm tracking-widest uppercase py-5 text-zinc-500">
        Users
      </h2>

      <ul className="px-5 pb-5 space-y-5">
        {users?.map((user) => (
          <li
            className="grid grid-cols-[50px_auto_50px] gap-5 place-items-center"
            key={user.id}
          >
            <div className="h-[50px] w-[50px] relative rounded-full overflow-hidden">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.username}
                  fill
                  className="object-cover"
                />
              ) : (
                <img src="/noavatar.png" />
              )}
            </div>

            <h3 className="w-full truncate flex flex-col">
              <p className="font-semibold">
                <span>{user.username}</span>
              </p>
              <span className="text-zinc-400 text-sm">
                {user.email}

                {user.isAdmin ? (
                  <span className="text-xs bg-amber-500 text-zinc-800 ml-3 px-2 rounded-full py-0.5 uppercase font-semibold tracking-wider">
                    Admin
                  </span>
                ) : null}
              </span>
            </h3>

            {user.isAdmin ? null : (
              <form action={deleteUser}>
                <input
                  type="hidden"
                  name="id"
                  value={user.id}
                />
                <button className="text-white text-sm cursor-pointer uppercase tracking-widest font-semibold bg-red-600 p-0.5 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
