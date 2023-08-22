import React from "react";
import Zero from "./Zero";
import Nbnz from "./Nbnz";
import NumberBlock from "./NumberBlock";
import Nbn from "./Nbn";
import { useCasino } from "../Context";

export default function NumberBoard(props) {
  const { setBet, removeBet } = useCasino();
  return (
    <div className="number_board">
      {" "}
      <Zero
        onClick={() => {
          setBet(this, "0", "zero", 35);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          removeBet(this, "0", "zero", 35);
        }}
      >
        <Nbnz>{0}</Nbnz>
      </Zero>
      {[
        3,
        6,
        9,
        12,
        15,
        18,
        21,
        24,
        27,
        30,
        33,
        36,
        "2 to 1",
        2,
        5,
        8,
        11,
        14,
        17,
        20,
        23,
        26,
        29,
        32,
        35,
        "2 to 1",
        1,
        4,
        7,
        10,
        13,
        16,
        19,
        22,
        25,
        28,
        31,
        34,
        "2 to 1",
      ].map((_, i, arr) => {
        let a = i;
        let redBlocks = [
          1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
        ];
        let nbClass = arr[i] == "2 to 1" ? "tt1_block" : "number_block";
        let colourClass = redBlocks.includes(arr[i])
          ? " redNum"
          : nbClass == "number_block"
          ? " blackNum"
          : "";
        return (
          <NumberBlock
            key={i}
            className={`${nbClass + colourClass}`}
            onClick={() => {
              if (arr[a] != "2 to 1") {
                setBet(this, "" + arr[a] + "", "inside_whole", 35);
              } else {
                let num =
                  a == 12
                    ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
                    : a == 25
                    ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
                    : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                setBet(this, num, "outside_column", 2);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              if (arr[a] != "2 to 1") {
                removeBet(this, "" + arr[a] + "", "inside_whole", 35);
              } else {
                let num =
                  a == 12
                    ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
                    : a == 25
                    ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
                    : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                removeBet(this, num, "outside_column", 2);
              }
            }}
          >
            <Nbn>{arr[i]}</Nbn>
          </NumberBlock>
        );
      })}
    </div>
  );
}
