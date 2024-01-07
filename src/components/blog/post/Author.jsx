import { getUser } from "@/lib/data";
import { formattedTime } from "@/lib/format-time";
import Image from "next/image";

const PostAuthor = async ({ userId, createdAt }) => {
  const author = await getUser(userId);

  const { username, image } = author;

  return (
    <div className="my-10 flex gap-5 items-center border-t border-zinc-800 pt-5">
      <div className="w-12 h-12 rounded-full bg-red-500 relative">
        <Image
          src={image ? image : "/noavatar.png"}
          alt="author's avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div>
        <h2 className="font-semibold text-xl">{username}</h2>
        <h3 className="text-zinc-500">Published {formattedTime(createdAt)}</h3>
      </div>
    </div>
  );
};

export default PostAuthor;
