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
      {Array(3)
        .fill()
        .map((_, c) => {
          let d = c;
          return (
            <Wlttb key={c} id={`wlttb_${c}`}>
              {Array(11)
                .fill()
                .map((_, i) => {
                  const j = i;
                  return (
                    <Ttbbetblock
                      key={`wlttb_${c}${i}`}
                      onClick={() => {
                        if (d == 1 || d == 2) {
                          var numA = 2 - (d - 1) + 3 * j;
                          var numB = 3 - (d - 1) + 3 * j;
                          var num = numA + ", " + numB;
                        } else {
                          var numA = 1 + 3 * j;
                          var numB = 2 + 3 * j;
                          var numC = 3 + 3 * j;
                          var num = numA + ", " + numB + ", " + numC;
                        }
                        var objType = d == 3 ? "street" : "split";
                        var odd = d == 3 ? 11 : 17;
                        setBet(3, num, objType, odd);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        if (d == 1 || d == 2) {
                          var numA = 2 - (d - 1) + 3 * j;
                          var numB = 3 - (d - 1) + 3 * j;
                          var num = numA + ", " + numB;
                        } else {
                          var numA = 1 + 3 * j;
                          var numB = 2 + 3 * j;
                          var numC = 3 + 3 * j;
                          var num = numA + ", " + numB + ", " + numC;
                        }
                        var objType = d == 3 ? "street" : "split";
                        var odd = d == 3 ? 11 : 17;
                        removeBet(3, num, objType, odd);
                      }}
                    />
                  );
                })}
            </Wlttb>
          );
        })}
      {Array(11)
        .fill()
        .map((_, c) => {
          let d = c;
          return (
            <Wlrtl key={c} id={`wlrtl_${c}`}>
              {Array(3)
                .fill()
                .map((_, i) => {
                  let j = i;
                  let numA = 3 + 3 * (d - 1) - (j - 1);
                  let numB = 6 + 3 * (d - 1) - (j - 1);
                  let num = numA + ", " + numB;
                  return (
                    <Rtlbb
                      key={`${i}`}
                      className={`rtlbb${i}`}
                      onClick={() => {
                        setBet(3, num, "split", 17);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        removeBet(3, num, "split", 17);
                      }}
                    />
                  );
                })}
            </Wlrtl>
          );
        })}
      {Array(2)
        .fill()
        .map((_, c) => {
          return (
            <Wlcb id={`wlcb_${c}`}>
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
                  return (
                    <Cbbb
                      key={i}
                      id={`cbbb_${count}`}
                      onClick={() => {
                        setBet(3, num, objType, 8);
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        removeBet(3, num, objType, 8);
                      }}
                    />
                  );
                })}
            </Wlcb>
          );
        })}
    </div>
  );
}
