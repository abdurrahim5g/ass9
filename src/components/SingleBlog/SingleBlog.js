import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { img, title, desc, date, id } = blog;
  return (
    <article className="single-blog-component">
      <div className="blog-image rounded-lg overflow-hidden">
        <img src={img} alt={title} className="aspect-video	" />
      </div>
      <div className="blog-content">
        <p className="mt-6 opacity-75">{date}</p>

        <Title className={"text-gray-800 my-4 opacity-75"}>
          <Link to={`${id}`}>{title}</Link>
        </Title>

        <p className="leading-8 opacity-75">{desc.slice(0, 150)}...</p>
      </div>
    </article>
  );
};

export default SingleBlog;
