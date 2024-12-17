import React, { useState } from "react";
import Color from "./Color";
import AddColor from "./AddColor";

export default function Content() {
  const [currentColor, setCurrentColor] = useState("");
  return (
    <main>
      <Color currentColor={currentColor} />
      <AddColor currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </main>
  );
}
