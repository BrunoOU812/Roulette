import React, { useEffect, useState } from "react";
import { useCasino } from "../Context";

export default function HalfRowBlock(props) {
  const [chip, setChip] = useState(false);
  const [chipValue, setChipValue] = useState(0);
  const [chipColour, setChipColour] = useState("red");
  const { clear, setBet, removeBet, setTtbbetPlay } = useCasino();
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
      className={`ttbbetblock`}
      onClick={() => {
        setBet({ chip: chip, setChip: setChip, setChipValue: setChipValue });
        setTtbbetPlay((prevState) => ({
          ...prevState,
          [`HALFROW_${props.index}`]: chipValue,
        }));
      }}
      onContextMenu={(e) => {
        removeBet({
          e: e,
          chipValue: chipValue,
          setChipValue: setChipValue,
        });
        setTtbbetPlay((prevState) => ({
          ...prevState,
          [`HALFROW_${props.index}`]: chipValue,
        }));
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
