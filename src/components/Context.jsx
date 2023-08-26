import React, { useState, useEffect, useContext, createContext } from "react";
export const CasinoContext = createContext();
export const useCasino = () => {
  return useContext(CasinoContext);
};
// Si la apuesta se gana se le devuelve lo apostado al jugador junto con la recompensa que es un numero que multiplica la apuesta es decir se paga X cantidad de veces
// Numero se paga 35 veces
// Medio, se paga 17 veces
// transversal o calle se juegan los 3 numeros seguidos que constituyen una fila y se paga 11 veces
// cuadro, es una esquina osea es un vertice compartido por 4 numeros se paga 8 veces
// linea esto es como un medio transversal o media calle en vez de 3 numeros seguidos son 6 se paga 5 veces
//linea especial o secta no lo contempla, pero seria la esquina entre el 0 y el transversal medio de 123, se pagaria 6 veces
// la docena se paga 2 veces
// columna se paga 2 veces
// par o impar tanto como color se paga 1 vez

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
  const [otoPlay, setOtoPlay] = useState({
    RED: 0,
    BLACK: 0,
    EVEN: 0,
    ODD: 0,
  });
  const [ttbPlay, setTtbPlay] = useState({
    COLUMN_3: 0,
    COLUMN_2: 0,
    COLUMN_1: 0,
  });

  const [winningNumber, setWinningNumber] = useState(0);
  const [clear, clearBet] = useState(false);
  const numRed = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const wheelnumbersAC = [
    0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
    23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
  ];
  const [each, setEach] = useState([]);
  const [column, setColumn] = useState([]);
  const [dozen, setDozen] = useState([]);
  const [halfRow, setHalfRow] = useState([]);
  const [row, setRow] = useState([]);

  const winArrays = {
    eachNumbers: Array(37)
      .fill()
      .map((_, i) => i),
    columnNumbers: () => {
      return [1, 2, 3].map((num) => {
        return Array(12)
          .fill()
          .map((_, i) => (i === 0 ? num : num + i * 3));
      });
    },
    dozenNumbers: [1, 13, 25].map((num) =>
      Array(12)
        .fill()
        .map((_, i) => num + i)
    ),
    halfNumbers: () => {
      const halfsInRows = Array(37)
        .fill()
        .map((_, i) => i)
        .map((num, i, arr) => {
          if (num > 0 && num <= 36 && !(num % 3 === 0)) {
            return [num, arr[i + 1]];
          }
        })
        .filter((array) => array !== undefined);
      const columnNumbers = winArrays.columnNumbers();
      const halfsInColumns = [
        ...columnNumbers[0],
        ...columnNumbers[1],
        ...columnNumbers[2],
      ]
        .map((num, i, arr) => {
          if (!(num > arr[i + 1]) && arr[i + 1] <= 36) {
            return [num, arr[i + 1]];
          }
        })
        .filter((array) => array !== undefined);
      return [...halfsInRows, ...halfsInColumns];
    },
    rowNumbers: () => {
      const columnNumbers = winArrays.columnNumbers();
      return [...columnNumbers[0]].map((num) => {
        return [num, num + 1, num + 2];
      });
    },
    halfRowNumbers: () => {
      const rowNumbers = winArrays.rowNumbers();
      return rowNumbers
        .map((array, i, arr) => {
          if (i + 1 < arr.length) {
            return [...array, ...arr[i + 1]];
          }
        })
        .filter((arr) => arr != undefined);
    },
    quarterNumbers: () => {
      const rowNumbers = winArrays.rowNumbers();
      let quarterNumbers = [];
      rowNumbers.forEach((array, i, arr) => {
        array.forEach((value, j, arrJ) => {
          const nextValue = arrJ[j + 1];
          const nextRowValue = arr[i + 1] ? arr[i + 1][j] : undefined;
          const nextRowNextValue = arr[i + 1] ? arr[i + 1][j + 1] : undefined;

          if (
            nextValue !== undefined &&
            nextRowValue !== undefined &&
            nextRowNextValue !== undefined
          ) {
            quarterNumbers.push([
              value,
              nextValue,
              nextRowValue,
              nextRowNextValue,
            ]);
          }
        });
      });
      return quarterNumbers;
    },
  };

  useEffect(() => {
    setEach(winArrays.eachNumbers);
    setColumn(winArrays.columnNumbers().reverse());
    setDozen(winArrays.dozenNumbers);
    setHalfRow(winArrays.halfNumbers());
    setRow(winArrays.rowNumbers());
    console.log(column);
  }, [spin]);

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

  useEffect(() => {
    const plays = [];
    const lastWinningNumber = previousNumbers[previousNumbers.length - 1];
    if (previousNumbers.length > 0) {
      numRed.includes(lastWinningNumber)
        ? plays.push("RED")
        : plays.push("BLACK");
      lastWinningNumber % 2 === 0 ? plays.push("EVEN") : plays.push("ODD");
      column[0].includes(lastWinningNumber) && plays.push("COLUMN_1");
      column[1].includes(lastWinningNumber) && plays.push("COLUMN_2");
      column[2].includes(lastWinningNumber) && plays.push("COLUMN_3");
      console.log(plays, ttbPlay);
    }
    Object.keys(otoPlay).forEach(
      (value) =>
        plays.includes(value) &&
        otoPlay[value] > 0 &&
        setBankValue((prevState) => prevState + otoPlay[value] * 2)
    );
    Object.keys(ttbPlay).forEach(
      (value) =>
        plays.includes(value) &&
        ttbPlay[value] > 0 &&
        setBankValue((prevState) => prevState + ttbPlay[value] * 2)
    );
    setCurrentBet(0);
    Object.keys(otoPlay).forEach((key) =>
      setOtoPlay((prevState) => ({ ...prevState, [key]: 0 }))
    );
  }, [previousNumbers]);

  const setBet = ({ chip, setChip, setChipValue }) => {
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
    bankValue,
    setBankValue,
    currentBet,
    setCurrentBet,
    wager,
    setWager,
    lastWager,
    setLastWager,
    bet,
    setBetValue,
    numbersBet,
    setNumbersBet,
    previousNumbers,
    setPreviousNumbers,
    numRed,
    wheelnumbersAC,
    bankSpan,
    setBankSpan,
    betSpan,
    setBetSpan,
    spinBtnValue,
    setSpinBtn,
    chipValues,
    setChipValues,
    chipActive,
    setChipActive,
    clear,
    clearBet,
    spin,
    setSpin,
    setBet,
    removeBet,
    winArrays,
    otoPlay,
    setOtoPlay,
    winningNumber,
    setWinningNumber,
    ttbPlay,
    setTtbPlay,
  };
  return (
    <CasinoContext.Provider value={casinoContextvalues}>
      {children}
    </CasinoContext.Provider>
  );
}
