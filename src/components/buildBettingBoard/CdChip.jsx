import React, { useState } from "react";
import { useCasino } from "../Context";

export default function CdChip(props) {
  const {
    chipActive,
    setChipActive,
    currentBet,
    setWager,
    setBankValue,
    setCurrentBet,
  } = useCasino();
  const i = props.index;
  let cvi = i;
  const arr = props.arr;
  return (
    <div
      className={`${props.className} ${chipActive[i] && "cdChipActive"}`}
      onClick={() => {
        if (cvi !== 4) {
          const updateActiveChips = chipActive.map((_, j) =>
            j === i ? true : false
          );
          setChipActive(updateActiveChips);
          setWager(parseInt(arr[i]));
        } else {
          setBankValue((prevState) => prevState + currentBet);
          setCurrentBet(arr[i]);
          // clearBet();
          // removeChips();
        }
      }}
    >
      {props.children}
    </div>
  );
}
