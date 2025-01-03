import React, { useEffect, useState } from "react";

const LatestBlogs = ({ blogs }) => {
  const bloggs = blogs.slice(0, 6);
  return (
    <div>
      <h1 className="text-xl font-semibold">Latest Blogs</h1>
      <div className="flex flex-col text-sm ">
        {bloggs.map((latest) => {
          return (
            <div key={latest.id} className="className='border-b'">
              <h2>{latest.title.slice(0, 40)}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogs;
