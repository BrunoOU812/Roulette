import React from "react";
import Wlttb from "./Wlttb";
import Wlrtl from "./Wlrtl";
import Rtlbb from "./Rtlbb";
import Wlcb from "./Wlcb";
import Cbbb from "./Cbbb";
import Ttbbetblock from "./Ttbbetblock";
import { useCasino } from "../Context";

export default function Wl() {
  const { setBet, removeBet } = useCasino();

  return (
    <div className="winning_lines">
      <Wlttb id={`wlttb_top`}>
        {Array(12)
          .fill()
          .map((_, i) => {
            let j = i;
            const numA = 1 + 3 * j;
            const numB = 2 + 3 * j;
            const numC = 3 + 3 * j;
            const numD = 4 + 3 * j;
            const numE = 5 + 3 * j;
            const numF = 6 + 3 * j;
            const num =
              numA +
              ", " +
              numB +
              ", " +
              numC +
              ", " +
              numD +
              ", " +
              numE +
              ", " +
              numF;
            const objType = "double_street";
            return (
              <Ttbbetblock
                key={i}
                props={{ target: this, num: num, type: objType, odd: 5 }}
              />
            );
          })}
      </Wlttb>
      {Array(3)
        .fill()
        .map((_, c) => {
          let d = c;
          return (
            <Wlttb key={c} id={`wlttb_${c + 1}`}>
              {Array(12)
                .fill()
                .map((_, i) => {
                  const j = i;
                  return <Ttbbetblock />;
                })}
            </Wlttb>
          );
        })}
      {Array(11)
        .fill()
        .map((_, c) => {
          let d = c;
          return (
            <Wlrtl key={c} id={`wlrtl_${c + 1}`}>
              {Array(3)
                .fill()
                .map((_, i) => {
                  let j = i;
                  let numA = 3 + 3 * (d - 1) - (j - 1);
                  let numB = 6 + 3 * (d - 1) - (j - 1);
                  let num = numA + ", " + numB;
                  return <Rtlbb index={i} />;
                })}
            </Wlrtl>
          );
        })}
      {Array(2)
        .fill()
        .map((_, c) => {
          return (
            <Wlcb key={c} index={c}>
              {Array(11)
                .fill()
                .map((_, i) => {
                  let count = c == 1 ? i : i + 11;
                  let numA = "2";
                  let numB = "3";
                  let numC = "5";
                  let numD = "6";
                  let num =
                    count >= 1 && count < 12
                      ? parseInt(numA) +
                        (count - 1) * 3 +
                        ", " +
                        (parseInt(numB) + (count - 1) * 3) +
                        ", " +
                        (parseInt(numC) + (count - 1) * 3) +
                        ", " +
                        (parseInt(numD) + (count - 1) * 3)
                      : parseInt(numA) -
                        1 +
                        (count - 12) * 3 +
                        ", " +
                        (parseInt(numB) - 1 + (count - 12) * 3) +
                        ", " +
                        (parseInt(numC) - 1 + (count - 12) * 3) +
                        ", " +
                        (parseInt(numD) - 1 + (count - 12) * 3);
                  let objType = "corner_bet";
                  return <Cbbb index={i} />;
                })}
            </Wlcb>
          );
        })}
    </div>
  );
}
