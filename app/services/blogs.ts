const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Me",
    url: "me@gmail.com",
    like: 2,
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Me",
    url: "me@gmail.com",
    like: 3,
  },
  {
    id: 3,
    title: "Blog Post 3",
    author: "Me",
    url: "me@gmail.com",
    like: 4,
  },
];

export const getBlogs = () => {
  return blogs.sort((a, b) => b.like - a.like);
};

let nextId = 4;

export const addBlog = (
  content: string,
  author: string,
  url: string,
  like: number,
) => {
  blogs.push({ id: nextId++, title: content, author, url, like });
};

export const getBlogById = (id: number) => {
  return blogs.find((b) => b.id === id);
};

export const increaseLike = (id: number) => {
  const blog = blogs.find((b) => b.id === id);
  if (blog) {
    blog.like++;
  }
};

export const getBlogsByQuery = (search: string) => {
  const q = search.toLowerCase();
  return blogs.filter((bl) => bl.title.toLowerCase().includes(q));
};
