import React, { useState } from "react";

export default function Ttbbetblock(props) {
  return (
    <div
      // className={`chip${colour} ttbbetblock`}
      onClick={props.onClick}
      onContextMenu={props.onContextMenu}
    ></div>
  );
}
