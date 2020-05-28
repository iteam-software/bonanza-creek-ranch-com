import React from "react";

import "./list.scss";

export default function List({ children, columns = 1, style = {} }) {
  return <ul style={{ columns, ...style }}>{children}</ul>;
}
