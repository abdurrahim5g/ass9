import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import data from "../../../data/data.json";
import Title from "../../Title/Title";
import SingleBlog from "../../SingleBlog/SingleBlog";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const latestBlog = data.slice(-1)[0];

  // remove the last element
  const allBlogs = data.slice(0, data.length - 1);
  //   const blogsDesending = () => allBlogs.sort((a, b) => a - b);
  allBlogs.sort((a, b) => b.id - a.id);
  console.log(allBlogs);

  return (
    <section className="blog-page-component quiz-section py-16 bg-slate-50">
      <div className="container">
        <SectionHeading
          subtitle="Explore Our"
          title={"Latest Blogs"}
          className="mb-20"
        ></SectionHeading>

        <div className="blogs-container">
          <div className="latest-blog mb-16 pt-6">
            <div className="grid grid-cols-2 gap-16 ">
              <div className="blog-image rounded-lg overflow-hidden">
                <img
                  src={latestBlog.img}
                  alt={latestBlog.title}
                  className="aspect-video	"
                />
              </div>
              <div className="blog-content">
                <p className="opacity-75">{latestBlog.date}</p>
                <Title className={"text-gray-800 my-6   mb-8"}>
                  <Link to={`${latestBlog.id}`}> {latestBlog.title}</Link>
                </Title>
                <p className="leading-8 opacity-75">
                  {latestBlog.desc.slice(0, 450)}...
                </p>
              </div>
            </div>
          </div>

          <div className="all-blogs">
            <div className="grid grid-cols-3 gap-10">
              {allBlogs.map((blog) => (
                <SingleBlog key={blog.id} blog={blog}></SingleBlog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
