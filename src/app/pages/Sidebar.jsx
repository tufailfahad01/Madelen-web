"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar({ setActivePage }) {
  const navItems = [
    { src: "/dashboard.png", label: "Dashboard", page: "dashboard" },
    { src: "/emporium.png", label: "Emporium", page: "emporium" },
    { src: "/library.png", label: "Library", page: "library" },
    { src: "/studio.png", label: "Studio", page: "studio" },
    { src: "/coins.png", label: "Ocoin", page: "ocoin" },
  ];

  const bottomItems = [
    { icon: <HelpOutlineIcon />, label: "Help", page: "help" },
    { icon: <SettingsIcon />, label: "Settings", page: "settings" },
    { icon: <LogoutIcon />, label: "Logout", page: "logout" },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      gridColumn="span 2"
      py={3}
      position="fixed"
      width="20%"
      sx={{
        animation: "fadeIn 0.5s ease-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      }}
    >
      <Box>
        <Box
          px={5}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "rotate(5deg)" },
          }}
        >
          <Image src="/logo.png" width={45} height={45} alt="Logo" priority />
        </Box>

        <Box mt={1} px={5} py={2}>
          {navItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              py={1}
              px={2}
              gap={2}
              sx={{
                border: index === 0 ? "2px solid white" : "none",
                backgroundColor:
                  index === 0 ? "rgba(255, 255, 255, 0.1)" : "none",
                borderRadius: "20px",
                width: "max-content",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                },
              }}
              onClick={() => setActivePage(item.page)}
            >
              <Image src={item.src} width={20} height={20} alt={item.label} />
              <Typography variant="body1" color="white">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        px={7}
      >
        {bottomItems.map((item, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            py={2}
            gap={2}
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
            }}
            onClick={() => setActivePage(item.page)}
          >
            {item.icon}
            <Typography variant="body1" color="white">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
