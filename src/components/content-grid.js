import React from "react";
import Grid from "./grid";

export default function ContentGrid({ children }) {
  return (
    <Grid gutter={30} columns="590px 300px">
      {children}
    </Grid>
  );
}
