import React from "react";
import Wlttb from "./Wlttb";
import Wlrtl from "./Wlrtl";
import Rtlbb from "./Rtlbb";
import Wlcb from "./Wlcb";
import Cbbb from "./Cbbb";
import Ttbbetblock from "./Ttbbetblock";
import HalfRowBlock from "./HalfRowBlock";
import RowBlock from "./RowBlock";
import HalfH1 from "./HalfH1";
import HalfH2 from "./HalfH2";

export default function Wl() {
  return (
    <div className="winning_lines">
      <Wlttb id={`wlttb_top`}>
        {Array(11)
          .fill()
          .map((_, i) => {
            return <HalfRowBlock key={i} index={i} />;
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
                  return c === 2 ? (
                    <RowBlock key={i} index={i} />
                  ) : c === 1 ? (
                    <HalfH1 key={i} index={i} wlttbIndex={c} />
                  ) : (
                    <HalfH2 key={i} index={i} wlttbIndex={c} />
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
            <Wlrtl key={c} id={`wlrtl_${c + 1}`}>
              {Array(3)
                .fill()
                .map((_, i) => {
                  let j = i;
                  let numA = 3 + 3 * (d - 1) - (j - 1);
                  let numB = 6 + 3 * (d - 1) - (j - 1);
                  let num = numA + ", " + numB;
                  return <Rtlbb key={i} index={i} compIndex={c} />;
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
                  return <Cbbb key={i} index={i} wlcbIndex={c} />;
                })}
            </Wlcb>
          );
        })}
    </div>
  );
}
