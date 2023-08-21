import React from "react";
import { useCasino } from "../Context";

export default function BankSpan() {
  const { bankSpan } = useCasino();
  return <div id="bankSpan">{bankSpan}</div>;
}
