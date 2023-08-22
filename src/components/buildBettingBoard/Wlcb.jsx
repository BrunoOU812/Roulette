import React from "react";

export default function Wlcb(props) {
  return (
    <div id={`wlcb_${props.index + 1}`} className={`wlcb`}>
      {props.children}
    </div>
  );
}
