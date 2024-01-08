import BlogPost from "@/components/blog/post/Post";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "This is the blog page",
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10 place-items-start">
      {posts?.map((post) => (
        <BlogPost
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
          image={post.image}
          createdAt={post.createdAt}
        />
      ))}
    </section>
  );
};

export default BlogPage;
