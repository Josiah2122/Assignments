import React from "react";
import PreviewColor from "./PreviewColor";

export default function Color({ currentColor }) {
  return (
    <div
      className="color-container"
      style={{ backgroundColor: `${currentColor}` }}
    >
      {currentColor === "" ? (
        <h3 className="empty-header">Empty Value</h3>
      ) : (
        <h3 className="empty-header">{currentColor}</h3>
      )}
    </div>
  );
}
