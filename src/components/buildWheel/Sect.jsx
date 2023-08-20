import React from "react";
import Block from "./Block";

export default function Sect(props) {
  return (
    <div id={props.id} className="sect">
      <Block />
      <span className={props.spanClass}>{props.number}</span>
    </div>
  );
}
