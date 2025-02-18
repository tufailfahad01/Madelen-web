"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { navItems, bottomItems } from "@/utils/sidebarData";

export default function Sidebar({ setActivePage }) {
  

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
          <Image src="/assets/images/logo.png" width={45} height={45} alt="Logo" priority />
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
