import React from "react";
import Bbtoptwo from "./Bbtoptwo";

export default function Bbtop(props) {
  return (
    <div className="bbtop">
      {["1 to 18", "19 to 36"].map((item, i) => {
        return (
          <Bbtoptwo key={i} index={i}>
            {item}
          </Bbtoptwo>
        );
      })}
    </div>
  );
}
