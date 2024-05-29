import React from "react";

import { Heading, Link } from "../../atoms";

import "./jobsCard.scss";

const JobsCard = ({ title, location, link, exp, description }) => {
  return (
    <div className="jobcard_container">
      <div className="jobcard_subcontainer">
        <Heading size="h4">{title}</Heading>
        <div className="jobcard_meta_container">
          <span className="meta_data">{location}</span>
        </div>
        <div className="view-description margin-t-md">
          <Link to={description} target="_blank">
            View Job Description
          </Link>
        </div>
      </div>
      <div className="read_press_Link">
        <Link
          activeClassName="link-active"
          className="read-more"
          to={link}
          target="_blank"
        >
          Apply now
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
