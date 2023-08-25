import React, { useState, useEffect, useContext, createContext } from "react";
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
  const [bankSpan, setBankSpan] = useState(1000);
  const [betSpan, setBetSpan] = useState(0);
  const [chipValues, setChipValues] = useState(["1", "5", "10", "100"]);
  const [spinBtnValue, setSpinBtn] = useState(true);
  const [spin, setSpin] = useState(false);
  const [chipActive, setChipActive] = useState([
    false,
    true,
    false,
    false,
    false,
  ]);
  const [clear, clearBet] = useState(false);
  const numRed = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const wheelnumbersAC = [
    0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
    23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
  ];
  useEffect(() => {
    if (clear) {
      clearBet(false);
    }
  }, [clear]);
  useEffect(() => {
    if (currentBet > 0) {
      setSpinBtn(true);
    }
  }, [currentBet]);

  const setBet = ({
    chip: chip,
    setChip: setChip,
    setChipValue: setChipValue,
  }) => {
    if (!spin) {
      setBankValue((prevState) => prevState - wager);
      setCurrentBet((prevState) => prevState + wager);
      if (chip) {
        setChipValue((prevState) => prevState + wager);
      } else {
        setChipValue(wager);
        setChip(true);
      }
    }
  };
  const removeBet = ({
    e: e,
    chipValue: chipValue,
    setChipValue: setChipValue,
  }) => {
    if (!spin) {
      e.preventDefault();
      if (chipValue > 0) {
        if (chipValue > wager) {
          setBankValue((prevState) => prevState + wager);
          setCurrentBet((prevState) => prevState - wager);
          setChipValue((prevState) => prevState - wager);
        } else {
          setBankValue((prevState) => prevState + chipValue);
          setCurrentBet((prevState) => prevState - chipValue);
          setChipValue(0);
        }
      }
    }
  };
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
    spinBtnValue: spinBtnValue,
    setSpinBtn: setSpinBtn,
    chipValues: chipValues,
    setChipValues: setChipValues,
    chipActive: chipActive,
    setChipActive: setChipActive,
    clear: clear,
    clearBet: clearBet,
    spin: spin,
    setSpin: setSpin,
    setBet: setBet,
    removeBet: removeBet,
  };
  return (
    <CasinoContext.Provider value={casinoContextvalues}>
      {children}
    </CasinoContext.Provider>
  );
}
