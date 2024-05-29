import React from "react";

import * as styles from "./input.module.scss";

const Input = ({ id, type = "text", label, required, ...rest }) => {
  return (
    <div className={styles.group}>
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
        <span>{required ? "*" : " (Optional)"}</span>
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className={styles.input}
        {...rest}
      />
    </div>
  );
};

export default Input;
