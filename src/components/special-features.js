import React from "react";

import featureBg from "../images/feature-bg.png";

export default function SpecialFeatures({ children }) {
  return (
    <div
      style={{
        width: 300,
        height: 500,
        padding: "20px 30px",
        background: `url(${featureBg}) no-repeat`,
      }}
    >
      <h4 style={{ color: "black", margin: "1em -8px" }}>Special Features</h4>
      {children}
    </div>
  );
}
