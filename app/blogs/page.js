import blogs from "@/data/blog";
import React from "react";
import BlogItem from "../components/BlogItem";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Blog List page</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <Link  key={blog.id} href={`/blogs/${blog.id}`} className="hover:text-blue-500">
            <BlogItem title={blog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
