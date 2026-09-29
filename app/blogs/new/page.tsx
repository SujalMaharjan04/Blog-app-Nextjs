import { createBlog } from "@/app/actions/blogs";

const NewBlog = () => {
  return (
    <div>
      <h1>Create New Blogs</h1>
      <form action={createBlog}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <label>
          URL:
          <input type="url" name="url" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlog;
