import React from "react";
import Bank from "./Bank";
import BankSpan from "./BankSpan";
import BetSpan from "./BetSpan";
import Bet from "./Bet";

export default function BankContainer() {
  return (
    <div className="bankContainer">
      <Bank>
        <BankSpan />
      </Bank>
      <Bet>
        <BetSpan />
      </Bet>
    </div>
  );
}
