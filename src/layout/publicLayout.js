import React from "react";
import Box from "@mui/material/Box";
import Header from "@components/Header/Header";
export default function PublicLayout({ children }) {


  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }} >
        <div style={{ display: "flex", height: "80vh", alignItems: "center" }}>
          {children}
        </div>
      </Box >
    </>
  );
}
