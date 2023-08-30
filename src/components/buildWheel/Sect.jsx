import React from "react";
import Block from "./Block";
import styles from "../assets/styles.module.scss";
export default function Sect(props) {
  console.log(styles);
  return (
    <div id={props.id} className={styles["sect"]}>
      <Block />
      <span className={props.spanClass}>{props.number}</span>
    </div>
  );
}
