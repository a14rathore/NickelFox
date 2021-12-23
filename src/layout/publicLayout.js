import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Counter from "../pages/public/Counter/counter.js";
export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          {children}
        </Grid>
      </Grid>

    </Box>
  );
}
