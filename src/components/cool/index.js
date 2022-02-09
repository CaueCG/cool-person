import React, { Fragment } from "react";

const IsCool = (props) => {
  return (
    <div className="isCool">
      <h3>{props.textCool}</h3>
      <button onClick={props.functionCool}>{props.textCool}</button>
    </div>
  );
};

export default IsCool;
