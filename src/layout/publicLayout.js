import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "@components/Header/Header"
export default function PublicLayout({ children }) {

  const [clr, setClr] = React.useState({
    stl: {
      color: "black"
    }
  })
  return (
    <Box sx={{ flexGrow: 1 }} style={clr.stl}>
      <Header bclr={setClr} />
      <Grid container spacing={3}>
        <Grid item xs={12}  >
          {children}
        </Grid>
      </Grid>

    </Box>
  );
}
