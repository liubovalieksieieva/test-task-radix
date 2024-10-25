import { useState } from "react";
const colorOptions = [
  { label: "Grey", colorCode: "#403d3b" },
  { label: "Golden", colorCode: "#bd844a" },
  { label: "Titanium", colorCode: "#b6aea8" },
];
const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].colorCode);
  return (
    <>
      <label className="selector-label">Color:</label>
      <div className="color-options">
        {colorOptions.map((color) => (
          <div
            key={color.colorCode}
            className={`color-circle ${
              selectedColor === color.colorCode ? "active" : ""
            }`}
            style={{ backgroundColor: color.colorCode }}
            onClick={() => setSelectedColor(color.colorCode)}
            title={color.label}
          />
        ))}
      </div>
    </>
  );
};

export default ColorSelector;
