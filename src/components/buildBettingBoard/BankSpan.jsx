import React from "react";
import { CasinoContext } from "../Context";

export default function BankSpan() {
  const { bankSpan } = CasinoContext();
  return <div id="bankSpan">{bankSpan}</div>;
}
