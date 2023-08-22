import React from "react";
import Bo3Block from "./Bo3Block";
import { useCasino } from "../Context";

export default function Bo3Board(props) {
  const { setBet, removeBet } = useCasino();
  return (
    <div className="bo3_board">
      {" "}
      {["1 to 12", "13 to 24", "25 to 36"].map((_, i, arr) => {
        let b = i;
        return (
          <Bo3Block
            key={i}
            onClick={() => {
              let num =
                b == 0
                  ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
                  : b == 1
                  ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
                  : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
              setBet(this, num, "outside_dozen", 2);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              let num =
                b == 0
                  ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
                  : b == 1
                  ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
                  : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
              removeBet(this, num, "outside_dozen", 2);
            }}
          >
            {arr[i]}
          </Bo3Block>
        );
      })}
    </div>
  );
}
