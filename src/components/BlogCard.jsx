import React from "react";

const BlogCard = ({ blog }) => {
  const { title, image, link } = blog;
  return (
    <div className="flex flex-col bg-white dark:bg-slate-700 dark:text-white rounded-xl overflow-hidden p-3 shadow-xl max-w-[400px] my-2 border border-zinc-200 dark:border-zinc-600">
      <img src={image} alt={title} className="w-full rounded-t-2xl" />
      <a href={link} target="_blank" className="">
        <h1 className="text-lg mt-3 font-bold px-1 mb-2">{title}</h1>
      </a>
      <a
        href={link}
        target="_blank"
        className="px-1 hover:text-blue-600 dark:hover:text-blue-400 max-w-max duration-150 mt-auto"
      >
        Read More &#8599;
      </a>
    </div>
  );
};

export default BlogCard;
