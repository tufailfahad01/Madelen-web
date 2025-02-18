"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../_components/core/Sidebar/Sidebar";
import Dashboard from "../_components/core/Dashboard/Dashboard";
import Emporium from "../_components/core/Emporium/Emporium";
import Library from "../_components/core/Library/Library";
import Studio from "../_components/core/Studio/Studio";
import Ocoin from "../_components/core/Ocoin/Ocoin";
import ProfileBar from "../_components/core/ProfileBar/ProfileBar";
import "./globals.css";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  let ActiveComponent;
  switch (activePage) {
    case "dashboard":
      ActiveComponent = Dashboard;
      break;
    case "emporium":
      ActiveComponent = Emporium;
      break;
    case "library":
      ActiveComponent = Library;
      break;
    case "studio":
      ActiveComponent = Studio;
      break;
    case "ocoin":
      ActiveComponent = Ocoin;
      break;
    default:
      ActiveComponent = Dashboard;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      sx={{
        background:
          "linear-gradient(to bottom, #171029, #192336, #2A1D3C, #2C2239, #1E122A)",
        color: "#fff",
      }}
      width="100%"
    >
      <Sidebar setActivePage={setActivePage} />

      <Box gridColumn="span 8" width="100%" ml={"20%"} p={2}>
        <ActiveComponent />
      </Box>

      <ProfileBar />
    </Box>
  );
}
