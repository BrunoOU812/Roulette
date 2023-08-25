import React from "react";
import OtoBlock from "./OtoBlock";

export default function OtoBoard(props) {
  return (
    <div className="oto_board">
      {["EVEN", "RED", "BLACK", "ODD"].map((_, i, arr) => {
        let colourClass =
          arr[i] == "RED" ? " redNum" : arr[i] == "BLACK" ? " blackNum" : "";
        return (
          <OtoBlock
            key={i}
            className={`oto_block${colourClass}`}
            type={arr[i]}
          />
        );
      })}
    </div>
  );
}
