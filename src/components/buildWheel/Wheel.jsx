import React, { useEffect, useState } from "react";
import OuterRim from "./OuterRim";
import Sect from "./Sect";
import Cone from "./Cone";
import Pockets from "./Pockets";
import PocketsRim from "./PocketsRim";
import ThendOne from "./ThendOne";
import ThendTwo from "./ThendTwo";
import Turret from "./Turret";
import TurretHandle from "./TurretHandle";
import { Helmet } from "react-helmet";
import { useCasino } from "../Context";
import Ball from "./Ball";
export default function Wheel() {
  const { spin, setSpin, setSpinBtn, clearBet, setPreviousNumbers } =
    useCasino();
  const [ballAnimation, setBallAnimation] = useState(
    "ballRotate 1s linear infinite"
  );
  const [rotationFrom, setRotationFrom] = useState(0);
  const [rotationTo, setRotationTo] = useState(0);
  const [style, setStyle] = useState(false);
  const wheelRotate = "wheelRotate 5s linear infinite";
  const numbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ];
  let wheelnumbersAC = [
    0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
    23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
  ];
  const sectElements = Array(numbers.length)
    .fill()
    .map((_, i) => {
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

  useEffect(() => {
    if (spin) {
      const winningSpin = 35;
      // const winningSpin = Math.floor(Math.random() * 36);
      wheelnumbersAC.forEach((_, i) => {
        if (wheelnumbersAC[i] == winningSpin) {
          setRotationTo(i * 9.73 + 362);
        }
      });

      setStyle(true);
      setTimeout(() => {}, 2000);
      setTimeout(() => {
        // setBallAnimation("ballRotate 2s linear infinite");
      }, 6000);
      setTimeout(() => {
        // setRotationTo(degree);
      }, 9000);
      setTimeout(() => {
        setSpin(false);
        // setBallAnimation("ballStop 3s linear");
        setBallAnimation("ballRotate 2s linear infinite");
        setSpinBtn(true);
        setStyle(false);
        clearBet(true);
        setRotationFrom(rotationTo);
        setPreviousNumbers((prevState) => [...prevState, winningSpin]);
      }, 10000);
    }
  }, [spin]);

  return (
    <div className="wheel" style={style ? { animation: `${wheelRotate}` } : {}}>
      <Helmet>
        <style>
          {`
            @keyframes ballStop {
              from { transform: rotate(-${rotationFrom}deg); }
              to { transform: rotate(-${rotationTo}deg); }
            }
          `}
        </style>
      </Helmet>
      <OuterRim />
      {sectElements}
      <div
        className={`ballTrack`}
        style={{
          animation: `${style && ballAnimation}`,
          transform: `rotate(-${rotationTo}deg)`,
        }}
      >
        <Ball />
      </div>
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
