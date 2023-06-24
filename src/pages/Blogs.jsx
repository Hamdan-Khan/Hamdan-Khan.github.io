import React from "react";
import { blogData } from "../data/BlogsData";
import BlogCard from "../components/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <div
      ref={blogs}
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-6 sm:px-8 md:px-10 sm:scroll-m-14 scroll-m-8  bg-slate-100 dark:bg-slate-800"
    >
      <h1 className="dark:text-white mt-2 mb-6 text-3xl sm:text-4xl text-center font-bold">
        FEATURED BLOGS
      </h1>
      <div className="flex sm:flex-row gap-3 flex-wrap items-stretch justify-evenly">
        {blogData.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
