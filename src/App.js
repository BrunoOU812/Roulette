import logo from "./logo.svg";
import "./App.css";
// import Roulette from "./components/Roulette";
import Wheel from "./components/buildWheel/Wheel";
import ContextProvider from "./components/Context";
import BettingBoard from "./components/buildBettingBoard/BettingBoard";
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div id="container">
          <Wheel />
          <BettingBoard />
          <>
            <div id="betting_board">
              <div class="winning_lines">
                <div id="wlttb_top" class="wlttb">
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                </div>
                <div id="wlttb_1" class="wlttb">
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                </div>
                <div id="wlttb_2" class="wlttb">
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                </div>
                <div id="wlttb_3" class="wlttb">
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                  <div class="ttbbetblock"></div>
                </div>
                <div id="wlrtl_1" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_2" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_3" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_4" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_5" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_6" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_7" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_8" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_9" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_10" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlrtl_11" class="wlrtl">
                  <div class="rtlbb1"></div>
                  <div class="rtlbb2"></div>
                  <div class="rtlbb3"></div>
                </div>
                <div id="wlcb_1" class="wlcb">
                  <div id="cbbb_1" class="cbbb"></div>
                  <div id="cbbb_2" class="cbbb"></div>
                  <div id="cbbb_3" class="cbbb"></div>
                  <div id="cbbb_4" class="cbbb"></div>
                  <div id="cbbb_5" class="cbbb"></div>
                  <div id="cbbb_6" class="cbbb"></div>
                  <div id="cbbb_7" class="cbbb"></div>
                  <div id="cbbb_8" class="cbbb"></div>
                  <div id="cbbb_9" class="cbbb"></div>
                  <div id="cbbb_10" class="cbbb"></div>
                  <div id="cbbb_11" class="cbbb"></div>
                </div>
                <div id="wlcb_2" class="wlcb">
                  <div id="cbbb_12" class="cbbb"></div>
                  <div id="cbbb_13" class="cbbb"></div>
                  <div id="cbbb_14" class="cbbb"></div>
                  <div id="cbbb_15" class="cbbb"></div>
                  <div id="cbbb_16" class="cbbb"></div>
                  <div id="cbbb_17" class="cbbb"></div>
                  <div id="cbbb_18" class="cbbb"></div>
                  <div id="cbbb_19" class="cbbb"></div>
                  <div id="cbbb_20" class="cbbb"></div>
                  <div id="cbbb_21" class="cbbb"></div>
                  <div id="cbbb_22" class="cbbb"></div>
                </div>
              </div>
              <div class="bbtop">
                <div class="bbtoptwo">1 to 18</div>
                <div class="bbtoptwo">19 to 36</div>
              </div>
              <div class="number_board">
                <div class="number_0">
                  <div class="nbn">0</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">3</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">6</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">9</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">12</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">15</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">18</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">21</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">24</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">27</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">30</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">33</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">36</div>
                </div>
                <div class="tt1_block">
                  <div class="nbn">2 to 1</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">2</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">5</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">8</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">11</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">14</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">17</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">20</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">23</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">26</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">29</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">32</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">35</div>
                </div>
                <div class="tt1_block">
                  <div class="nbn">2 to 1</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">1</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">4</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">7</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">10</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">13</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">16</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">19</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">22</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">25</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">28</div>
                </div>
                <div class="number_block blackNum">
                  <div class="nbn">31</div>
                </div>
                <div class="number_block redNum">
                  <div class="nbn">34</div>
                </div>
                <div class="tt1_block">
                  <div class="nbn">2 to 1</div>
                </div>
              </div>
              <div class="bo3_board">
                <div class="bo3_block">1 to 12</div>
                <div class="bo3_block">13 to 24</div>
                <div class="bo3_block">25 to 36</div>
              </div>
              <div class="oto_board">
                <div class="oto_block">EVEN</div>
                <div class="oto_block redNum">RED</div>
                <div class="oto_block blackNum">BLACK</div>
                <div class="oto_block">ODD</div>
              </div>
              <div class="chipDeck">
                <div class="cdChip red">
                  <span class="cdChipSpan">1</span>
                </div>
                <div class="cdChip blue cdChipActive">
                  <span class="cdChipSpan">5</span>
                </div>
                <div class="cdChip orange">
                  <span class="cdChipSpan">10</span>
                </div>
                <div class="cdChip gold">
                  <span class="cdChipSpan">100</span>
                </div>
                <div class="cdChip clearBet">
                  <span class="cdChipSpan">clear</span>
                </div>
              </div>
              <div class="bankContainer">
                <div class="bank">
                  <span id="bankSpan">1,000</span>
                </div>
                <div class="bet">
                  <span id="betSpan">0</span>
                </div>
              </div>
              <div class="pnBlock">
                <div id="pnContent"></div>
              </div>
            </div>
          </>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
