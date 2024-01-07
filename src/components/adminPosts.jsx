import { deletePost } from "@/lib/actions";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const AdminPosts = async () => {
  const posts = await getPosts();

  // function deletePostById({ id }) {
  //   return deletePost.bind(null, id);
  // }

  if (posts.length === 0) {
    return (
      <div className="text-center text-sm text-zinc-500 italic uppercase flex items-center justify-center">
        0 posts in the database !
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 rounded-xl">
      <h2 className="pl-5 font-bold text-sm tracking-widest uppercase py-5 text-zinc-500">
        Posts
      </h2>

      <ul className="px-5 pb-5 space-y-5">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="grid grid-cols-[50px_auto_50px] gap-5 place-items-center"
          >
            {post.image ? (
              <div className="h-[50px] w-[50px] relative rounded-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}

            <h3 className="w-full font-semibold truncate">
              <a
                target="_blank"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </a>
            </h3>

            {/* <form action={() => deletePostById(post.id)}> */}
            <form action={deletePost}>
              <input
                type="hidden"
                name="id"
                value={post.id}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPosts;
