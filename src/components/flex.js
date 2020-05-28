import React from "react";
import { oneOf } from "prop-types";
import classnames from "classnames";

import "./flex.scss";

export default function Flex({
  children,
  direction = "row",
  style = {},
  padded = false,
}) {
  const classes = classnames("flex", {
    padded,
  });
  return (
    <div className={classes} style={{ flexDirection: direction, ...style }}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  direction: oneOf(["row", "column", "row-reverse", "column-reverse"]),
};
