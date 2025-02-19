"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { navItems, bottomItems } from "@/utils/sidebarData";

export default function Sidebar({ setActivePage }) {
  const [activeItem, setActiveItem] = useState(navItems[0].page); // Default active item

  const handleItemClick = (page) => {
    setActiveItem(page);
    setActivePage(page);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      gridColumn="span 2"
      py={3}
      position="fixed"
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
                border: activeItem === item.page ? "2px solid white" : "none",
                backgroundColor: activeItem === item.page ? "rgba(255, 255, 255, 0.1)" : "none",
                borderRadius: "20px",
                width: "max-content",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  
                },
              }}
              onClick={() => handleItemClick(item.page)}
            >
              <Image src={item.src} width={20} height={20} alt={item.label} />
              <Typography color="white" sx={{fontSize: "18px"}}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="flex-end" px={7}>
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
            onClick={() => handleItemClick(item.page)}
          >
            {item.icon}
            <Image src={item.src} width={20} height={20} alt={item.label} />
            <Typography color="white" sx={{fontSize: "18px"}}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}