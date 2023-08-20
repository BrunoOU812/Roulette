import React from "react";
import { CasinoContext } from "../Context";

export default function BetSpan() {
  const { betSpan } = CasinoContext();
  return <div id="betSpan">{betSpan}</div>;
}
