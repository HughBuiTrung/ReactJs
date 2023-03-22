import React, { useContext } from "react";
import { aContext } from "./A";
export default function B() {
  const b = useContext(aContext);
  console.log("b: ", b);
  return <div>B</div>;
}
