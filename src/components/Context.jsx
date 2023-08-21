import React, { useState, useEffect, useContext, createContext } from "react";
import Chip from "./buildBettingBoard/Chip";
import ChipSpan from "./buildBettingBoard/ChipSpan";
export const CasinoContext = createContext();
export const useCasino = () => {
  return useContext(CasinoContext);
};
export default function ContextProvider({ children }) {
  const [bankValue, setBankValue] = useState(1000);
  const [currentBet, setCurrentBet] = useState(0);
  const [wager, setWager] = useState(5);
  const [lastWager, setLastWager] = useState(0);
  const [bet, setBetValue] = useState([]);
  const [numbersBet, setNumbersBet] = useState([]);
  const [previousNumbers, setPreviousNumbers] = useState([]);
  const [bankSpan, setBankSpan] = useState(0);
  const [betSpan, setBetSpan] = useState(0);
  const [chips, setChips] = useState([]);
  const [spinBtnValue, setSpinBtn] = useState(true);
  const [chipValues, setChipValues] = useState(["1", "5", "10", "100"]);
  const numRed = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const wheelnumbersAC = [
    0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
    23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
  ];

  function removeBet({ target: e, number: n, type: t, isOdd: o }) {
    setWager((prevState) => (prevState == 0 ? 100 : prevState));
    for (let i = 0; i < bet.length; i++) {
      if (bet[i].numbers == n && bet[i].type == t) {
        if (bet[i].amt != 0) {
          setWager((prevState) =>
            bet[i].amt > prevState ? prevState : bet[i].amt
          );
          const updatedBet = [...bet];
          updatedBet[i].amt = updatedBet[i].amt - wager;
          setBetValue(updatedBet);
          setBankValue((prevState) => prevState + wager);
          setCurrentBet((prevState) => prevState - wager);
          setBankSpan("" + bankValue.toLocaleString("en-GB") + "");
          setBetSpan("" + currentBet.toLocaleString("en-GB") + "");
          if (bet[i].amt === 0) {
            let updateChips = [...chips];
            updateChips[e] = { cls: ``, style: `display:none` };
            setChips(updateChips);
          } else {
            let chipColour =
              bet[i].amt < 5
                ? "red"
                : bet[i].amt < 10
                ? "blue"
                : bet[i].amt < 100
                ? "orange"
                : "gold";
            let updateChips = [...chips];
            updateChips[e] = { cls: `chip${chipColour}`, style: `` };
            setChips(updateChips);
            let chipSpan = e.querySelector(".chipSpan");
            chipSpan.innerText = bet[i].amt;
          }
        }
      }
    }
    if (currentBet == 0 && spinBtnValue) {
      setSpinBtn(false);
    }
  }

  function setBet({ target: e, number: n, type: t, isOdd: o }) {
    setLastWager(wager);
    setWager((prevState) => (bankValue < prevState ? bankValue : prevState));
    if (wager > 0) {
      if (spinBtnValue) {
        setSpinBtn(true);
      }
      setBankValue((prevState) => prevState - wager);
      setCurrentBet((prevState) => prevState + wager);
      setBankSpan("" + bankValue.toLocaleString("en-GB") + "");
      setBetSpan("" + currentBet.toLocaleString("en-GB") + "");
      for (let i = 0; i < bet.length; i++) {
        if (bet[i].numbers == n && bet[i].type == t) {
          bet[i].amt = bet[i].amt + wager;
          let chipColour =
            bet[i].amt < 5
              ? "red"
              : bet[i].amt < 10
              ? "blue"
              : bet[i].amt < 100
              ? "orange"
              : "gold";
          let updateChips = [...chips];
          updateChips[e] = { cls: `chip${chipColour}`, style: `` };
          setChips(updateChips);
          let chipSpan = e.querySelector(".chipSpan");
          chipSpan.innerText = bet[i].amt;
        }
      }
      let obj = {
        amt: wager,
        type: t,
        odds: o,
        numbers: n,
      };
      setBetValue((prevState) => [...prevState, obj]);
      let numArray = n.split(",").map(Number);
      for (let i = 0; i < numArray.length; i++) {
        if (!numbersBet.includes(numArray[i])) {
          setNumbersBet((prevState) => [...prevState, numArray[i]]);
        }
      }

      if (!e.querySelector(".chip")) {
        let chipColour =
          wager < 5
            ? "red"
            : wager < 10
            ? "blue"
            : wager < 100
            ? "orange"
            : "gold";
        const chip = (
          <Chip className={`chip${chipColour}`}>
            <ChipSpan>{wager}</ChipSpan>
          </Chip>
        );
        e.append(chip);
      }
    }
  }

  const casinoContextvalues = {
    bankValue: bankValue,
    setBankValue: setBankValue,
    currentBet: currentBet,
    setCurrentBet: setCurrentBet,
    wager: wager,
    setWager: setWager,
    lastWager: lastWager,
    setLastWager: setLastWager,
    bet: bet,
    setBet: setBetValue,
    numbersBet: numbersBet,
    setNumbersBet: setNumbersBet,
    previousNumbers: previousNumbers,
    setPreviousNumbers: setPreviousNumbers,
    numRed: numRed,
    wheelnumbersAC: wheelnumbersAC,
    bankSpan: bankSpan,
    setBankSpan: setBankSpan,
    betSpan: betSpan,
    setBetSpan: setBetSpan,
    removeBet: removeBet,
    setBet: setBet,
    spinBtnValue: spinBtnValue,
    setSpinBtn: setSpinBtn,
    chipValues: chipValues,
    setChipValues: setChipValues,
  };
  return (
    <CasinoContext.Provider value={casinoContextvalues}>
      {children}
    </CasinoContext.Provider>
  );
}
