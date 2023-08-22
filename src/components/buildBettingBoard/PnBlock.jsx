import React from "react";
import PnContent from "./PnContent";

export default function PnBlock(props) {
  return (
    <div className="pnBlock">
      <PnContent
        onWheel={(e) => {
          e.preventDefault();
          // pnContent.scrollLeft += e.deltaY;
        }}
      />
    </div>
  );
}
