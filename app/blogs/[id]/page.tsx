// import { upLike } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.url}</p>
      <p>likes: {blog.likes}</p>
      <form>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like</button>
      </form>
      <p>By {blog.author}</p>
    </div>
  );
};

export default BlogPage;
