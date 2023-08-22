import React from "react";
import OtoBlock from "./OtoBlock";
import { useCasino } from "../Context";

export default function OtoBoard(props) {
  const { setBet, removeBet } = useCasino();
  return (
    <div className="oto_board">
      {["EVEN", "RED", "BLACK", "ODD"].map((_, i, arr) => {
        let d = i;
        let colourClass =
          arr[i] == "RED" ? " redNum" : arr[i] == "BLACK" ? " blackNum" : "";
        return (
          <OtoBlock
            key={i}
            className={`oto_block${colourClass}`}
            onClick={() => {
              let num =
                d == 0
                  ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
                  : d == 1
                  ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
                  : d == 2
                  ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
                  : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
              setBet(this, num, "outside_oerb", 1);
            }}
            onContextMenu={(e) => {
              let num =
                d == 0
                  ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
                  : d == 1
                  ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
                  : d == 2
                  ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
                  : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
              e.preventDefault();
              removeBet(this, num, "outside_oerb", 1);
            }}
          >
            {arr[i]}
          </OtoBlock>
        );
      })}
    </div>
  );
}
