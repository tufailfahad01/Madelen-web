"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CustomTextField from "@/_components/common/TextField";

import { imagesData, navItems, bottomItems } from "@/utils/dashboardData";
import { useState } from "react";
import { CardComponent } from "@/_components/common/Card/Index";
import { ImageCarousel } from "@/_components/common/ImageCarousel/Index";
export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box
      sx={{
        animation: "fadeIn 0.6s ease-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <CustomTextField placeholder="Search anything..." />
      <Typography p={2} fontWeight={700} variant="h4">
        Welcome Back, Madelen
      </Typography>
      <Box
        sx={{
          backgroundImage: `url("/assets/images/EmporiumBox.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          borderRadius: "30px",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.02)" },
        }}
      >
        <Box px={2} sx={{ width: "100%" }}>
          <Typography variant="h3" fontWeight={700} pb={1}>
            Your Next Creation Starts Here
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="body1" color="gray">
                Browse & Remix a Vast Collection of Editable, Game-Ready Meshes.
              </Typography>
              <Typography variant="body1" color="gray">
                With Remix AI, transform any asset—no skills needed.
              </Typography>
            </Box>
            <Image
              src="/assets/icons/GOIcon.png"
              width={70}
              height={70}
              alt="Go Icon"
            />
          </Box>
        </Box>
      </Box>
      <Box mt={3} gap={2} display="flex" flexDirection="row" width="100%">
        <CardComponent
          icon={
            <EmojiEventsIcon
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(10deg)" },
              }}
            />
          }
          title="CURRENT PLAN"
          content="Designer"
          buttonText="Upgrade"
          imageSrc="/assets/icons/Trophy.png"
          altText="Trophy Icon"
        />
        <CardComponent
          icon={
            <Image
              src="/assets/icons/library.png"
              width={22}
              height={22}
              alt="Library Icon"
            />
          }
          title="SAVED PROJECTS"
          content=""
          buttonText="Open Library"
          imageSrc="/assets/icons/OpenedFolder.png"
          altText="Opened Folder Icon"
        />
        <CardComponent
          icon={
            <WhatshotIcon
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(-10deg)" },
              }}
            />
          }
          title="TRENDING MESHES"
          content="Popular"
          buttonText="Discover"
          imageSrc="/assets/icons/Sun.png"
          altText="Sun Icon"
        />
      </Box>
      <Typography p={2} fontWeight={700} variant="h5">
        Get Started – Quick Actions
      </Typography>
      <ImageCarousel
        imagesData={imagesData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Box>
  );
}
