import React from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import styles from "./CheckBox.module.css";

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}>
          {checked ? <MdStarBorder className={styles.checked} /> : <MdStar />}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
