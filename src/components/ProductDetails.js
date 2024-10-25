import { useState } from "react";
import MemorySelector from "./product_details/MemorySelector";
import ColorSelector from "./product_details/ColorSelector";
import CardButton from "./CardButton";

const ProductDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product-details">
      <h2 className="product-name">Phone</h2>
      <p className="product-price">$ 1,499</p>
      <div className="product-description">
        <p>
          {isExpanded
            ? `Phone features a Grade 5 titanium design with a new, refined
              microblasted texture. Titanium has one of the highest
              strength-to-weight ratios of any metal, making these models
              incredibly strong and impressively light. Phone comes in four
              stunning finishes — including new Desert Titanium.`
            : `Phone features a Grade 5 titanium design with a new, refined
              microblasted texture.`}
        </p>
        <button className="toggle-button" onClick={toggleDescription}>
          {isExpanded ? "Back" : "More"}
        </button>
      </div>
      <div className="selectors">
        <MemorySelector />
        <ColorSelector />
      </div>
      <CardButton />
    </div>
  );
};

export default ProductDetails;
