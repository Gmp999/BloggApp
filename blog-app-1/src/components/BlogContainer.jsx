import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import Spinner from "./Spinner";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    axios.get(`https://bloggapp-vkj5.onrender.com/blogs/recent/`)
      .then(res => {
        console.log(res.data);
        setBlogs(res.data);
        setLoding(false)
      })
      .catch(err => console.error(err.message));
  }, []);

  return (
    <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">

      <Spinner loading={loading}/>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogContainer;



