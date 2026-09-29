"use server";

import { revalidatePath } from "next/cache";
import { addBlog, getBlogsByQuery, increaseLike } from "../services/blogs";
import { redirect } from "next/navigation";

export const createBlog = async (formData: FormData) => {
  const content = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  const likes = 0;
  await addBlog(content, author, url, likes);

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const upLike = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  await increaseLike(id);
  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);
};

export const searchBlog = async (formData: FormData) => {
  const search = String(formData.get("search") ?? "").trim();
  redirect(search ? `/blogs?filter=${encodeURIComponent(search)}` : "/blogs");
};
