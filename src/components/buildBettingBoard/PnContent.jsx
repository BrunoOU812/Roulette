import React from "react";

export default function PnContent(props) {
  return (
    <div id="pnContent" onWheel={props.onWheel}>
      {props.children}
    </div>
  );
}
