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
    clearBet,
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
          setWager(arr[i]);
        } else {
          setBankValue((prevState) => prevState + currentBet);
          setCurrentBet(0);
          clearBet(true);
        }
      }}
    >
      {props.children}
    </div>
  );
}
