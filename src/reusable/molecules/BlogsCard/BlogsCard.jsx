import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./blogsCard.scss";

const BlogsCard = ({ title, info, date, image, link }) => {
  return (
    <div className="blogs_card_container">
      <div className="blogs_card_subcontainer">
        <div className="blogs_content">
          <h4>{title}</h4>
          <span>{date}</span>
          <p>{info}</p>
          <div className="read_blog_btn">
            <Link
              activeClassName="link-active"
              className="read-more"
              to={link}
              target="_blank"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="blog_image">
          <GatsbyImage image={image} />
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
