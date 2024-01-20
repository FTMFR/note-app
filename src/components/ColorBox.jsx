import React, { useEffect, useState } from "react";

export const ColorPallete = [
  "#ffffff",
  "#ffd37f",
  "#fffa81",
  "#ca6e12",
  "#78f87f",
  "#79fbd6",
  "#79fdfe",
  "#7ad6fd",
  "#7b84fc",
  "#d687fc",
  "#ff89fd",
];

const ColorBox = ({ onColorSelect }) => {
  const colorHandler = (e) => {
    onColorSelect(e);
  };

  return (
    <div className="colorcontainer">
      {ColorPallete.map((item) => (
        <div
          className="color"
          key={item}
          style={{ backgroundColor: `${item}` }}
          //   value={color}
          onClick={(e) => colorHandler(item)}
        ></div>
      ))}
    </div>
  );
};

export default ColorBox;
