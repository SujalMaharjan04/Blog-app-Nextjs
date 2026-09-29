// const blogs = [
//   {
//     id: 1,
//     title: "Blog Post 1",
//     author: "Me",
//     url: "me@gmail.com",
//     like: 2,
//   },
//   {
//     id: 2,
//     title: "Blog Post 2",
//     author: "Me",
//     url: "me@gmail.com",
//     like: 3,
//   },
//   {
//     id: 3,
//     title: "Blog Post 3",
//     author: "Me",
//     url: "me@gmail.com",
//     like: 4,
//   },
// ];

import { db } from "../../db";
import { eq, sql } from "drizzle-orm";
import { blogs } from "../../db/schema";

export const getBlogs = async () => {
  return db.query.blogs.findMany();
};

// let nextId = 4;

export const addBlog = async (
  title: string,
  author: string,
  url: string,
  likes: number,
) => {
  await db.insert(blogs).values({ title, author, url, likes });
};

export const getBlogById = (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  });
};

export const increaseLike = async (id: number) => {
  await db
    .update(blogs)
    .set({ likes: sql`${blogs.likes} + 1` })
    .where(eq(blogs.id, id));
};

export const getBlogsByQuery = async (search: string) => {
  // const q = search.toLowerCase();
  if (search.length > 0) {
    return db.query.blogs.findMany({
      where: eq(blogs.title, search),
    });
  }

  return db.query.blogs.findMany();
};
