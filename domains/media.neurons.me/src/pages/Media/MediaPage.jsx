import React from "react";
import { Box } from "@mui/material";
import NeuronsAppBar from "../../components/AppBar/NeuronsAppBar";
import Footer from "../../components/Footer/Footer";

const APPBAR_HEIGHT = 64; // Adjust this based on your AppBar height

const MediaPage = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NeuronsAppBar />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
          marginTop: `${APPBAR_HEIGHT}px`, // Pushes content below AppBar
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MediaPage;