import React from "react";
import Button1 from "../../../../assets/svg/Icon download done.svg";
import Button2 from "../../../../assets/svg/Icon delete outline.svg";
import Button3 from "../../../../assets/svg/Icon stacked line chart.svg";
import "./Button.css";

export default function Button() {
  return (
    <div className="button_container">
      <img src={Button1} alt="" style={{ display: "inline-block" }} />
      <img src={Button3} alt="" style={{ display: "inline-block" }} />
      <div className="button2">
        <img src={Button2} alt="" style={{ display: "inline-block" }} />
      </div>
    </div>
  );
}
