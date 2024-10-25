import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
const MemorySelector = () => {
  const [selectedMemory, setSelectedMemory] = useState("small");
  return (
    <>
      <label className="selector-label">Memory:</label>
      <RadioGroup.Root
        className="radio-group"
        value={selectedMemory}
        onValueChange={setSelectedMemory}>
        <RadioGroup.Item
          className={`radio-item ${selectedMemory === "small" ? "active" : ""}`}
          value="small">
          128Gb
        </RadioGroup.Item>
        <RadioGroup.Item
          className={`radio-item ${
            selectedMemory === "medium" ? "active" : ""
          }`}
          value="medium">
          256Gb
        </RadioGroup.Item>
        <RadioGroup.Item
          className={`radio-item ${selectedMemory === "large" ? "active" : ""}`}
          value="large">
          516Gb
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
};

export default MemorySelector;
