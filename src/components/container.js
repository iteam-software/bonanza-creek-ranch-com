import React from "react";

import "./container.css";

export default function Container({ children, style = {} }) {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
}
