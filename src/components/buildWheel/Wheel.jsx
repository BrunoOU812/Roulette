import React from "react";
import OuterRim from "./OuterRim";
import Sect from "./Sect";
import BallTrack from "./BallTrack";
import Cone from "./Cone";
import Pockets from "./Pockets";
import PocketsRim from "./PocketsRim";
import ThendOne from "./ThendOne";
import ThendTwo from "./ThendTwo";
import Turret from "./Turret";
import TurretHandle from "./TurretHandle";
export default function Wheel() {
  let numbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ];
  const sectElements = Array(numbers.length)
    .fill()
    .map((item, i) => {
      const a = i + 1;
      const spanClass = numbers[i] < 10 ? "single" : "double";
      return (
        <Sect
          key={i}
          id={"sect" + a}
          number={numbers[i]}
          spanClass={spanClass}
        />
      );
    });
  return (
    <div className="wheel">
      <OuterRim />
      {sectElements}
      <BallTrack />
      <Pockets />
      <PocketsRim />
      <Cone />
      <Turret />
      <TurretHandle>
        <ThendTwo />
        <ThendOne />
      </TurretHandle>
    </div>
  );
}
