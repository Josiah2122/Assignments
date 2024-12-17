import React from "react";

export default function PreviewColor({ currentColor }) {
  return (
    <div
      className="preview-color"
      style={{ backgroundColor: `${currentColor}` }}
    ></div>
  );
}
