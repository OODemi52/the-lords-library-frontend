import React from "react";
import { Box, TextField } from "@mui/material";

export default function SearchField() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="search" label="Search" variant="outlined" />
    </Box>
  );
}
