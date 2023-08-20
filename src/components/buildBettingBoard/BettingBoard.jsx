import React from "react";
import Wlcb from "./Wlcb";
import Cbbb from "./Cbbb";
import Nbnz from "./Nbnz";
import Nbn from "./Nbn";
import Bo3Board from "./Bo3Board";
import Bo3Block from "./Bo3Block";
import OtoBlock from "./OtoBlock";
import OtoBoard from "./OtoBoard";
import BankContainer from "./BankContainer";
import BankSpan from "./BankSpan";
import Bank from "./Bank";
import ChipDeck from "./ChipDeck";
import ChipSpan from "./ChipSpan";
import Chip from "./Chip";
import PnBlock from "./PnBlock";
import PnContent from "./PnContent";
import Bet from "./Bet";
import NumberBlock from "./NumberBlock";
import Zero from "./Zero";
import Bbtop from "./Bbtop";
import Wlrtl from "./Wlrtl";
import Rtlbb from "./Rtlbb";
import Bbtoptwo from "./Bbtoptwo";
import NumberBoard from "./NumberBoard";
import Wl from "./Wl";
import { useCasino } from "../Context";

export default function BettingBoard() {
  const {
    bankValue,
    currentBet,
    wager,
    lastWager,
    bet,
    numbersBet,
    previousNumbers,
    numRed,
    wheelnumbersAC,
    setBankValue,
    setCurrentBet,
    setWager,
    setLastWager,
    setBetValue,
    setNumbersBet,
    setPreviousNumbers,
    bankSpan,
    setBankSpan,
    betSpan,
    setBetSpan,
    setBet,
    removeBet,
  } = useCasino();
  return (
    <div id="betting_board">
      <Wl />

      <Bbtop>
        {["1 to 18", "19 to 36"].map((_, i) => {
          let f = i;
          let num =
            f == 0
              ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18"
              : "19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
          let objType = f == 0 ? "outside_low" : "outside_high";
          let bbtopBlocks = ["1 to 18", "19 to 36"];
          return (
            <Bbtoptwo
              onClick={() => {
                setBet(this, num, objType, 1);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                removeBet(this, num, objType, 1);
              }}
            >
              {bbtopBlocks[i]}
            </Bbtoptwo>
          );
        })}
      </Bbtop>
      <NumberBoard>
        <Zero
          onClick={() => {
            setBet(this, "0", "zero", 35);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            removeBet(this, "0", "zero", 35);
          }}
        >
          <Nbnz>{0}</Nbnz>;
        </Zero>
        {() => {
          let numberBlocks = [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24,
            27,
            30,
            33,
            36,
            "2 to 1",
            2,
            5,
            8,
            11,
            14,
            17,
            20,
            23,
            26,
            29,
            32,
            35,
            "2 to 1",
            1,
            4,
            7,
            10,
            13,
            16,
            19,
            22,
            25,
            28,
            31,
            34,
            "2 to 1",
          ];
          let redBlocks = [
            1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
          ];
          return [...numberBlocks].map((_, i) => {
            let a = i;
            let nbClass =
              numberBlocks[i] == "2 to 1" ? "tt1_block" : "number_block";
            let colourClass = redBlocks.includes(numberBlocks[i])
              ? " redNum"
              : nbClass == "number_block"
              ? " blackNum"
              : "";
            return (
              <NumberBlock
                key={i}
                className={`${nbClass + colourClass}`}
                onClick={() => {
                  if (numberBlocks[a] != "2 to 1") {
                    setBet(this, "" + numberBlocks[a] + "", "inside_whole", 35);
                  } else {
                    let num =
                      a == 12
                        ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
                        : a == 25
                        ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
                        : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                    setBet(this, num, "outside_column", 2);
                  }
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  if (numberBlocks[a] != "2 to 1") {
                    removeBet(
                      this,
                      "" + numberBlocks[a] + "",
                      "inside_whole",
                      35
                    );
                  } else {
                    let num =
                      a == 12
                        ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36"
                        : a == 25
                        ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35"
                        : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                    removeBet(this, num, "outside_column", 2);
                  }
                }}
              >
                {<Nbn>{numberBlocks[i]}</Nbn>}
              </NumberBlock>
            );
          });
        }}
      </NumberBoard>
      <Bo3Board>
        {() => {
          let bo3Blocks = ["1 to 12", "13 to 24", "25 to 36"];
          return [...bo3Blocks].map((_, i) => {
            let b = i;
            return (
              <Bo3Block
                key={i}
                onClick={() => {
                  let num =
                    b == 0
                      ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
                      : b == 1
                      ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
                      : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
                  setBet(this, num, "outside_dozen", 2);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  let num =
                    b == 0
                      ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"
                      : b == 1
                      ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24"
                      : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
                  removeBet(this, num, "outside_dozen", 2);
                }}
              >
                {bo3Blocks[i]}
              </Bo3Block>
            );
          });
        }}
      </Bo3Board>
      <OtoBoard>
        {() => {
          let otoBlocks = ["EVEN", "RED", "BLACK", "ODD"];
          return [...otoBlocks].map((_, i) => {
            let d = i;
            let colourClass =
              otoBlocks[i] == "RED"
                ? " redNum"
                : otoBlocks[i] == "BLACK"
                ? " blackNum"
                : "";
            return (
              <OtoBlock
                key={i}
                className={`oto_block${colourClass}`}
                onClick={() => {
                  let num =
                    d == 0
                      ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
                      : d == 1
                      ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
                      : d == 2
                      ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
                      : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
                  setBet(this, num, "outside_oerb", 1);
                }}
                onContextMenu={(e) => {
                  let num =
                    d == 0
                      ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36"
                      : d == 1
                      ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36"
                      : d == 2
                      ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35"
                      : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
                  e.preventDefault();
                  removeBet(this, num, "outside_oerb", 1);
                }}
              >
                {otoBlocks[i]}
              </OtoBlock>
            );
          });
        }}
      </OtoBoard>
      <ChipDeck>
        {() => {
          let chipValues = [1, 5, 10, 100, "clear"];
          return [...chipValues].map((_, i) => {
            let cvi = i;
            let chipColour =
              i == 0
                ? "red"
                : i == 1
                ? "blue cdChipActive"
                : i == 2
                ? "orange"
                : i == 3
                ? "gold"
                : "clearBet";
            let chip = (
              <Chip
                key={i}
                className={`cdChip${chipColour}`}
                onClick={() => {
                  if (cvi !== 4) {
                    let cdChipActive =
                      document.getElementsByClassName("cdChipActive");
                    for (let i = 0; i < cdChipActive.length; i++) {
                      cdChipActive[i].classList.remove("cdChipActive");
                    }
                    let curClass = this.getAttribute("class");
                    if (!curClass.includes("cdChipActive")) {
                      this.setAttribute("class", curClass + " cdChipActive");
                    }
                    setWager(parseInt(chip.childNodes[0].innerText));
                  } else {
                    setBankValue((prevState) => prevState + currentBet);
                    setCurrentBet(0);
                    document.getElementById("bankSpan").innerText =
                      "" + bankValue.toLocaleString("en-GB") + "";
                    document.getElementById("betSpan").innerText =
                      "" + currentBet.toLocaleString("en-GB") + "";
                    // clearBet();
                    // removeChips();
                  }
                }}
              >
                <ChipSpan>{chipValues[i]}</ChipSpan>;
              </Chip>
            );
          });
        }}
      </ChipDeck>
      <BankContainer>
        <Bank>
          <BankSpan>{"" + bankValue.toLocaleString("en-GB") + ""}</BankSpan>
        </Bank>
        <Bet>
          <betSpan>{"" + currentBet.toLocaleString("en-GB") + ""}</betSpan>
        </Bet>
      </BankContainer>
      <PnBlock>
        <PnContent
          onWheel={(e) => {
            e.preventDefault();
            // pnContent.scrollLeft += e.deltaY;
          }}
        />
      </PnBlock>
    </div>
  );
}
