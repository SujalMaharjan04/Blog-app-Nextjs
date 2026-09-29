import Link from "next/link";
import { getBlogs, getBlogsByQuery } from "../services/blogs";
import { searchBlog } from "../actions/blogs";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;
  const blogs = getBlogsByQuery(filter ?? "");
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              {blog.title} By {blog.author}
            </Link>
            <p>{blog.like}</p>
          </li>
        ))}
      </ul>

      <form action={searchBlog}>
        <label>
          <input type="text" name="search" />
          Search
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Blogs;
