import React from "react";

import * as style from "./paragraph.module.scss";

const Paragraph = ({ children, className = "", size = "body", ...rest }) => {
  const paragraphStyle = `${style.paragraph} ${style[size]} ${className}`;

  return (
    <p className={paragraphStyle} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
