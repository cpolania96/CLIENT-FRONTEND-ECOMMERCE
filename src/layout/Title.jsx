import React from "react";
import IconHearth from "../assets/svg/IconHearth";

function Title({ msg }) {
  return (
    <h1 className="title">
      {msg}
      <span><IconHearth /></span>
    </h1>
  );
}

export default Title;
