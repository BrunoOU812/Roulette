import React from "react";
import { useCasino } from "../Context";

export default function TtbbetblockTop(props) {
  const { setBet, removeBet } = useCasino();
  return (
    <div
      className={`ttbbetblock`}
      onClick={() => {
        setBet(props.target, props.num, props.type, props.odd);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        removeBet(props.target, props.num, props.type, props.odd);
      }}
    >
      {props.children}
    </div>
  );
}
