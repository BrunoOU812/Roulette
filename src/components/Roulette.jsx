import Wheel from "./buildWheel/Wheel";
import ContextProvider from "./Context";
import BettingBoard from "./buildBettingBoard/BettingBoard";
import SpinBtn from "./buildBettingBoard/SpinBtn";
import React from "react";

export default function Roulette() {
  return (
    <ContextProvider>
      <div className="App" style={{ fontFamily: "arial" }}>
        <div id="container">
          <Wheel />
          <BettingBoard />
          <SpinBtn />
        </div>
      </div>
    </ContextProvider>
  );
}
