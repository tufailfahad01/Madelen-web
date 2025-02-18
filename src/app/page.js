"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Emporium from "./components/Emporium";
import Library from "./components/Library";
import Studio from "./components/Studio";
import Ocoin from "./components/Ocoin";
import ProfileBar from "./components/ProfileBar";
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

      <Box gridColumn="span 8"
      width="100%" ml={"20%"} p={2}>
        <ActiveComponent />
      </Box>

      <ProfileBar />
    </Box>
  );
}