import React, { useEffect, useState } from "react";
import { useCasino } from "../Context";

export default function Cbbb(props) {
  const [chip, setChip] = useState(false);
  const [chipValue, setChipValue] = useState(0);
  const [chipColour, setChipColour] = useState("red");
  const { clear, setBet, removeBet } = useCasino();
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
    } else if (clear) {
      setChip(false);
    }
  }, [chipValue, clear]);
  return (
    <div
      id={`cbbb_${props.index + 1}`}
      className={`cbbb`}
      onClick={() => {
        setBet({ chip: chip, setChip: setChip, setChipValue: setChipValue });
      }}
      onContextMenu={(e) => {
        removeBet({
          e: e,
          chipValue: chipValue,
          setChipValue: setChipValue,
        });
      }}
    >
      {chip && (
        <div className={`chip ${chipColour}`}>
          <div className="chipSpan">{chipValue}</div>
        </div>
      )}
    </div>
  );
}
