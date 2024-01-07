import { formattedTime } from "@/lib/format-time";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const { slug, title, description, image, createdAt } = post;
  console.log({ slug, title, description, image, createdAt });

  return (
    <article className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all ease-in-out duration-200 w-full">
      <div className="h-56">
        {image && (
          <Image
            src={image}
            alt="Post title"
            height={400}
            width={500}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-5">{title}</h2>

        <p className="text-zinc-500 font-medium">
          {description.substr(0, 100)}
          {description.length >= 100 && "..."}
        </p>

        <div className="flex items-center justify-between mt-5">
          <p className="text-sm font-medium text-zinc-500">
            {formattedTime(createdAt)}
          </p>

          <Link
            href={`/blog/${slug}`}
            className="px-5 py-1.5 rounded-xl bg-amber-500 text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 shadow-2xl"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
