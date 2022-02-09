import React, { Fragment } from "react";
import IsCool from "../cool";

const Person = (props) => {
  return (
    <div className="divPerson">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <IsCool textCool={props.textCool} functionCool={props.functionCool} />
    </div>
  );
};

export default Person;
