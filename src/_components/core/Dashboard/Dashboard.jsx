"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import CustomTextField from "@/_components/common/TextField";
import { imagesData } from "@/utils/dashboardData";
import { useState } from "react";
import { CardComponent } from "@/_components/common/Card/Index";
import { ImageCarousel } from "@/_components/common/ImageCarousel/Index";
import { CustomTypography } from "@/_components/common/Typography";

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
      <Typography
        p={2}
        fontWeight={600}
        sx={{
          fontFamily: "Inter, serif",
          fontSize: "40px",
          lineHeight: "49px",
        }}
      >
        Welcome Back, Madelen
      </Typography>
      <Box
        sx={{
          backgroundImage: `url("/assets/images/EmporiumBox.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "285px",
          width: "100%",
          borderRadius: "30px",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.02)" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            fontWeight={700}
            sx={{
              fontSize: "48px",
              fontFamily: "Inter, serif",
              lineHeight: "50px",
            }}
          >
            Your Next Creation Starts Here
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Box>
              <CustomTypography
                textSize="18px"
                content="Browse & Remix a Vast Collection of Editable, Game-Ready Meshes."
                textHeight="28px"
                textColor="rgb(209, 205, 205)"
                textfamily="Inter, serif"
              />
              <CustomTypography
                textSize="18px"
                content="With Remix AI, transform any asset—no skills needed."
                textHeight="28px"
                textColor="rgb(209, 205, 205)"
                textfamily="Inter, serif"
              />
            </Box>
            <Image
              src="/assets/icons/GOIcon.png"
              width={89}
              height={83}
              alt="Go Icon"
            />
          </Box>
        </Box>
      </Box>
      <Box gap={2} mt={4} display="flex" flexDirection="row">
        <CardComponent
          icon={
            <Image
              src="/assets/icons/Group 395.png"
              width={14.67}
              height={14.67}
              alt="Library Icon"
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
              src="/assets/icons/OpenedFolder(1).png"
              width={16}
              height={16}
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
            <Image
              src="/assets/icons/Vector.png"
              width={12}
              height={14}
              alt="Go Icon"
            />
          }
          title="TRENDING MESHES"
          content="Popular"
          buttonText="Discover"
          imageSrc="/assets/icons/Sun.png"
          altText="Sun Icon"
          btnFontSize="18px"
        />
      </Box>
      <Typography
        mt={4}
        fontWeight={700}
        sx={{ fontSize: "30px", fontFamily: "Inter, serif" }}
      >
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
