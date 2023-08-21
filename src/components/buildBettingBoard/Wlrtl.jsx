import React from "react";

export default function Wlrtl(props) {
  return (
    <div id={props.id} className="wlrtl">
      {props.children}
    </div>
  );
}
