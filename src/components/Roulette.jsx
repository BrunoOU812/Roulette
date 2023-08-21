import React, { useState } from "react";
import { useCasino } from "./Context";
import Wheel from "./buildWheel/Wheel";
import BettingBoard from "./buildBettingBoard/BettingBoard";

export default function Roulette() {
  const [chips, setChips] = useState([]);
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

  let container = document.createElement("div");
  container.setAttribute("id", "container");
  document.body.append(container);

  startGame();

  let wheel = document.getElementsByClassName("wheel")[0];
  let ballTrack = document.getElementsByClassName("ballTrack")[0];

  function resetGame() {
    setBankValue(1000);
    setCurrentBet(0);
    setWager(5);
    setBetValue([]);
    setNumbersBet([]);
    setPreviousNumbers([]);
    document.getElementById("betting_board").remove();
    document.getElementById("notification").remove();
    buildBettingBoard();
  }

  function startGame() {
    buildWheel();
    buildBettingBoard();
  }

  function gameOver() {
    let notification = document.createElement("div");
    notification.setAttribute("id", "notification");
    let nSpan = document.createElement("span");
    nSpan.setAttribute("class", "nSpan");
    nSpan.innerText = "Bankrupt";
    notification.append(nSpan);

    let nBtn = document.createElement("div");
    nBtn.setAttribute("class", "nBtn");
    nBtn.innerText = "Play again";
    nBtn.onclick = function () {
      resetGame();
    };
    notification.append(nBtn);
    container.prepend(notification);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function buildWheel() {
    let wheel = <Wheel />;
    container.append(wheel);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function buildBettingBoard() {
    let bettingBoard = <BettingBoard />;
    container.append(bettingBoard);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function clearBet() {
    bet = [];
    numbersBet = [];
  }

  function spin() {
    let winningSpin = Math.floor(Math.random() * 36);
    spinWheel(winningSpin);
    setTimeout(function () {
      if (numbersBet.includes(winningSpin)) {
        let winValue = 0;
        let betTotal = 0;
        for (let i = 0; i < bet.length; i++) {
          let numArray = bet[i].numbers.split(",").map(Number);
          if (numArray.includes(winningSpin)) {
            setBankValue(
              (prevState) => prevState + bet[i].odds * bet[i].amt + bet[i].amt
            );
            winValue = winValue + bet[i].odds * bet[i].amt;
            betTotal = betTotal + bet[i].amt;
          }
        }
        win(winningSpin, winValue, betTotal);
      }

      setCurrentBet(0);
      document.getElementById("bankSpan").innerText =
        "" + bankValue.toLocaleString("en-GB") + "";
      document.getElementById("betSpan").innerText =
        "" + currentBet.toLocaleString("en-GB") + "";

      let pnClass = numRed.includes(winningSpin)
        ? "pnRed"
        : winningSpin == 0
        ? "pnGreen"
        : "pnBlack";
      let pnContent = document.getElementById("pnContent");
      let pnSpan = document.createElement("span");
      pnSpan.setAttribute("class", pnClass);
      pnSpan.innerText = winningSpin;
      pnContent.append(pnSpan);
      pnContent.scrollLeft = pnContent.scrollWidth;

      bet = [];
      numbersBet = [];
      removeChips();
      setWager(lastWager);
      if (bankValue == 0 && currentBet == 0) {
        gameOver();
      }
    }, 10000);
  }

  function win(winningSpin, winValue, betTotal) {
    if (winValue > 0) {
      let notification = document.createElement("div");
      notification.setAttribute("id", "notification");
      let nSpan = document.createElement("div");
      nSpan.setAttribute("class", "nSpan");
      let nsnumber = document.createElement("span");
      nsnumber.setAttribute("class", "nsnumber");
      nsnumber.style.cssText = numRed.includes(winningSpin)
        ? "color:red"
        : "color:black";
      nsnumber.innerText = winningSpin;
      nSpan.append(nsnumber);
      let nsTxt = document.createElement("span");
      nsTxt.innerText = " Win";
      nSpan.append(nsTxt);
      let nsWin = document.createElement("div");
      nsWin.setAttribute("class", "nsWin");
      let nsWinBlock = document.createElement("div");
      nsWinBlock.setAttribute("class", "nsWinBlock");
      nsWinBlock.innerText = "Bet: " + betTotal;
      nSpan.append(nsWinBlock);
      nsWin.append(nsWinBlock);
      nsWinBlock = document.createElement("div");
      nsWinBlock.setAttribute("class", "nsWinBlock");
      nsWinBlock.innerText = "Win: " + winValue;
      nSpan.append(nsWinBlock);
      nsWin.append(nsWinBlock);
      nsWinBlock = document.createElement("div");
      nsWinBlock.setAttribute("class", "nsWinBlock");
      nsWinBlock.innerText = "Payout: " + (winValue + betTotal);
      nsWin.append(nsWinBlock);
      nSpan.append(nsWin);
      notification.append(nSpan);
      container.prepend(notification);
      setTimeout(function () {
        notification.style.cssText = "opacity:0";
      }, 3000);
      setTimeout(function () {
        notification.remove();
      }, 4000);
    }
  }

  function spinWheel(winningSpin) {
    let style;
    for (let i = 0; i < wheelnumbersAC.length; i++) {
      if (wheelnumbersAC[i] == winningSpin) {
        var degree = i * 9.73 + 362;
      }
    }
    wheel.style.cssText = "animation: wheelRotate 5s linear infinite;";
    ballTrack.style.cssText = "animation: ballRotate 1s linear infinite;";

    setTimeout(function () {
      ballTrack.style.cssText = "animation: ballRotate 2s linear infinite;";
      let style = document.createElement("style");
      style.type = "text/css";
      style.innerText =
        "@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-" +
        degree +
        "deg);}}";
      document.head.appendChild(style);
    }, 2000);
    setTimeout(function () {
      ballTrack.style.cssText = "animation: ballStop 3s linear;";
    }, 6000);
    setTimeout(function () {
      ballTrack.style.cssText = "transform: rotate(-" + degree + "deg);";
    }, 9000);
    setTimeout(function () {
      wheel.style.cssText = "";
      style.remove();
    }, 10000);
  }

  function removeChips() {
    var chips = document.getElementsByClassName("chip");
    if (chips.length > 0) {
      for (let i = 0; i < chips.length; i++) {
        chips[i].remove();
      }
      removeChips();
    }
  }

  return <div id="container"></div>;
}
