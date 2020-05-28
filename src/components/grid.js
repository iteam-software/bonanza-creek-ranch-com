import React from "react";

import "./grid.scss";

export default function Grid({
  children,
  columns = "auto",
  rows = "auto",
  gutter = 0,
}) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridGap: gutter,
      }}
    >
      {children}
    </div>
  );
}
