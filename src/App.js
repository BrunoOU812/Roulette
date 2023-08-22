import logo from "./logo.svg";
// import Roulette from "./components/Roulette";
import Wheel from "./components/buildWheel/Wheel";
import ContextProvider from "./components/Context";
import BettingBoard from "./components/buildBettingBoard/BettingBoard";
function App() {
  return (
    <ContextProvider>
      <div className="App" style={{ fontFamily: "arial" }}>
        <div id="container">
          <Wheel />
          <BettingBoard />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
