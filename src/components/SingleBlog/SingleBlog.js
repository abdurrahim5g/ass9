import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog, single = false }) => {
  const { img, title, desc, date, id } = blog;

  return (
    <article className="single-blog-component">
      <div className="blog-image rounded-lg overflow-hidden">
        {!single && (
          <Link to={`${id}`}>
            <img src={img} alt={title} className="aspect-video	" />
          </Link>
        )}
      </div>
      <div className="blog-content">
        <p className="mt-6 opacity-75">{date}</p>

        <Title className={"text-gray-800 my-4 opacity-75"}>
          {single ? (
            title
          ) : (
            <Link to={`${id}`} className="hover:text-blue-700 transition">
              {title}
            </Link>
          )}
        </Title>

        {single && (
          <img src={img} alt={title} className="aspect-video	rounded-lg mb-5" />
        )}

        <p className="leading-8 opacity-75">
          {single ? (
            desc
          ) : (
            <Link to={`${id}`} className="hover:text-blue-700 transition">
              {desc.slice(0, 150)}...
            </Link>
          )}
        </p>
      </div>

      {single && (
        <div className="back-to-blog text-center mt-6">
          <Link
            to={"/blog"}
            className="rounded-full mt-4  px-10 py-2 bg-blue-500 hover:bg-blue-400 font-semibold text-white"
          >
            Back to blog page
          </Link>
        </div>
      )}
    </article>
  );
};

export default SingleBlog;
