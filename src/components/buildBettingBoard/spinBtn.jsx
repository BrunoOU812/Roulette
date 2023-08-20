import React from "react";
import { CasinoContext } from "../Context";

export default function spinBtn() {
  const { spinBtnValue, setSpinBtn } = CasinoContext();
  return (
    <div
      className={`${spinBtnValue ? "spinBtn" : ""}`}
      onClick={() => {
        setSpinBtn(false);
      }}
    >
      Spin
    </div>
  );
}
