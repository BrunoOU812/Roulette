import React from "react";
import Bbtoptwo from "./Bbtoptwo";
import { useCasino } from "../Context";

export default function Bbtop(props) {
  const { setBet, removeBet } = useCasino();
  return (
    <div className="bbtop">
      {["1 to 18", "19 to 36"].map((_, i) => {
        let f = i;
        let num =
          f == 0
            ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18"
            : "19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
        let objType = f == 0 ? "outside_low" : "outside_high";
        let bbtopBlocks = ["1 to 18", "19 to 36"];
        return (
          <Bbtoptwo
            key={i}
            onClick={() => {
              setBet(this, num, objType, 1);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              removeBet(this, num, objType, 1);
            }}
          >
            {bbtopBlocks[i]}
          </Bbtoptwo>
        );
      })}
    </div>
  );
}
