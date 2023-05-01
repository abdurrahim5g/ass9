import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../../data/data.json";
import SingleBlog from "../../SingleBlog/SingleBlog";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const blog = blogData[blogId - 1];

  return (
    <section className="py-16 bg-slate-100">
      <div className="container">
        <div className=" w-12/12 md:w-9/12 lg:w-8/12 mx-auto">
          {blog ? (
            <SingleBlog blog={blog} single={true}></SingleBlog>
          ) : (
            <h3 className="text-center">"No data found"</h3>
          )}
          {/* */}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
