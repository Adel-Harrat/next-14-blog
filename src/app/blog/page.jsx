import BlogPost from "@/components/blog/post/Post";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10 place-items-start">
      {posts?.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
};

export default BlogPage;
