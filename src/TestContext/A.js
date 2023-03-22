import React, { createContext, useState } from "react";
import B from "./B";
export const aContext = createContext();
export default function A() {
  //   const a = 1;
  const [a, seta] = useState([
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
  ]);
  return (
    <aContext.Provider value={a}>
      <B />
    </aContext.Provider>
  );
}
