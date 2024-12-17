import React from "react";

export default function AddColor({ currentColor, setCurrentColor }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        value={currentColor}
        onChange={(e) => setCurrentColor(e.target.value)}
      />
    </form>
  );
}
