import React, { useEffect, useState } from "react";
import { useCasino } from "../Context";

export default function OtoBlock(props) {
  const [chip, setChip] = useState(false);
  const [chipValue, setChipValue] = useState(0);
  const [chipColour, setChipColour] = useState("red");
  const { wager, setBankValue, setCurrentBet } = useCasino();
  useEffect(() => {
    chipValue >= 100
      ? setChipColour("gold")
      : chipValue >= 10
      ? setChipColour("orange")
      : chipValue >= 5
      ? setChipColour("blue")
      : setChipColour("red");
    if (chipValue === 0) {
      setChip(false);
    }
  }, [chipValue]);
  return (
    <div
      className={props.className}
      onClick={() => {
        setBankValue((prevState) => prevState - wager);
        setCurrentBet((prevState) => prevState + wager);
        if (chip) {
          setChipValue((prevState) => prevState + wager);
        } else {
          setChipValue(wager);
          setChip(true);
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (chipValue > 0) {
          if (chipValue > wager) {
            setBankValue((prevState) => prevState + wager);
            setCurrentBet((prevState) => prevState - wager);
            setChipValue((prevState) => prevState - wager);
          } else {
            setBankValue((prevState) => prevState + chipValue);
            setCurrentBet((prevState) => prevState - chipValue);
            setChipValue(0);
          }
        }
      }}
    >
      {props.children}
      {chip && (
        <div className={`chip ${chipColour}`}>
          <div className="chipSpan">{chipValue}</div>
        </div>
      )}
    </div>
  );
}
