import Wheel from "./components/buildWheel/Wheel";
import ContextProvider from "./components/Context";
import BettingBoard from "./components/buildBettingBoard/BettingBoard";
import SpinBtn from "./components/buildBettingBoard/SpinBtn";
function App() {
  return (
    <ContextProvider>
      <div className="App" style={{ fontFamily: "arial" }}>
        <div id="container">
          <Wheel />
          <BettingBoard />
          <SpinBtn />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
