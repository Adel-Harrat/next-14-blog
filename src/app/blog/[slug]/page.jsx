import PostAuthor from "@/components/blog/post/Author";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.description,
  };
}

const SinglePostPage = async ({ params }) => {
  const post = await getPost(params.slug);

  const { userId, title, description, image, createdAt } = post;

  return (
    <article className="mt-10">
      <h1 className="text-5xl font-bold mb-5 text-center">{title}</h1>

      <div className="my-16">
        <Image
          src={image}
          alt={title}
          className="object-cover block mx-auto"
          height={500}
          width={800}
        />
      </div>

      <p>{description}</p>

      <Suspense fallback={<p>Loading...</p>}>
        <PostAuthor
          userId={userId}
          createdAt={createdAt}
        />
      </Suspense>
    </article>
  );
};

export default SinglePostPage;
