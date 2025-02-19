
"use client";
import Image from "next/image";
import { Box, Typography, IconButton } from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CustomTextField from "@/_components/common/TextField";
import CustomButton from "@/_components/common/Button";
import { imagesData } from "@/utils/dashboardData";
import { useState } from "react";

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
            <Image src="/assets/icons/GOIcon.png" width={70} height={70} alt="Go Icon" />
          </Box>
        </Box>
      </Box>

      <Box mt={3} gap={2} display="flex" flexDirection="row" width="100%">
        <Box
          borderRadius="30px"
          sx={{
            background:
              "linear-gradient(to right,rgb(201, 124, 202),rgb(80, 31, 143))",
            p: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.04)" },
          }}
        >
          <Box width="300px" display="flex" gap={1} alignItems="center">
            <EmojiEventsIcon
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(10deg)" },
              }}
            />
            <Typography variant="body2" fontWeight={600}>
              CURRENT PLAN
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Image
              src="/assets/icons/Trophy.png"
              width={60}
              height={60}
              alt="Trophy Icon"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            />{" "}
            <Typography variant="h5" fontWeight={600}>
              Designer
            </Typography>
            <CustomButton text="Upgrade" />
          </Box>
        </Box>

        <Box
          borderRadius="30px"
          width="320px"
          sx={{
            background:
              "linear-gradient(to right,rgb(201, 124, 202),rgb(80, 31, 143))",
            p: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <Image
              src="/assets/icons/library.png"
              width={22}
              height={22}
              alt="Library Icon"
            />

            <Typography variant="body2" fontWeight={600}>
              SAVED PROJECTS
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Image
              src="/assets/icons/OpenedFolder.png"
              width={70}
              height={70}
              alt="Opened Folder Icon"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            />{" "}
            <CustomButton text="Open Library" />
          </Box>
        </Box>

        <Box
          borderRadius="30px"
          width="330px"
          sx={{
            background:
              "linear-gradient(to right,rgb(201, 124, 202),rgb(80, 31, 143))",
            p: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <WhatshotIcon
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(-10deg)" },
              }}
            />
            <Typography variant="body2" fontWeight={600}>
              TRENDING MESHES
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Image src="/assets/icons/Sun.png" width={60} height={60} alt="Sun Icon" />
            <Typography variant="h5" fontWeight={600}>
              Popular
            </Typography>
            <CustomButton text="Discover" />
          </Box>
        </Box>
      </Box>
      <Typography p={2} fontWeight={700} variant="h5">
        Get Started – Quick Actions
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.02)" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          {imagesData.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                minWidth: "45%",
                textAlign: "center",
                color: "#fff",
                borderRadius: "15px",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <Image
                src={image.src}
                alt={image.heading}
                width={400}
                height={220}
                style={{
                  borderRadius: "24px",
                  objectFit: "cover",
                  border: index === 1 ? "4px solid white" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
              {index === 1 && (
                <Typography
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "linear-gradient(to right,#ffffff, #0022FF)",
                    color: "#fff",
                    padding: "5px 20px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  FREE
                </Typography>
              )}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "10%",
                  textAlign: "left",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-3px)" },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {image.heading}
                    </Typography>
                    <Typography sx={{ mb: 2 }} color="lightgray">
                      {image.text}
                    </Typography>
                  </Box>
                  <Image
                    src="/assets/icons/GOIcon.png"
                    width={50}
                    height={50}
                    alt="Go Icon"
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            top: "30%",
            left: 0,
            color: "#fff",
            background: "rgba(0,0,0,0.5)",
            transition: "background 0.3s ease",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "30%",
            right: 0,
            color: "#fff",
            background: "rgba(0,0,0,0.5)",
            transition: "background 0.3s ease",
            "&:hover": { background: "rgba(0,0,0,0.9)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
          {imagesData.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "white" : "gray",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}