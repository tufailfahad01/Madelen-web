"use client";
import Image from "next/image";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/1stSlideImage.png",
      heading: "New? Start Here!",
      text: "Learn the basics of how to use OOR3D",
    },
    {
      src: "/2ndSlideImage.jfif",
      heading: "Edit Your First Mesh 2 Heading",
      text: "Beginner Friendly",
    },
    {
      src: "/3rdSlideImage.png",
      heading: "Upload on IMVU",
      text: "Learn how to upload the remixed mesh",
    },
  ];

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
      <TextField
        variant="outlined"
        placeholder="Search anything..."
        fullWidth
        sx={{
          borderRadius: "50px",
          backgroundColor: "#04050E",
          transition: "box-shadow 0.3s ease",
          "&:hover": { boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            backgroundColor: "#04050E",
            padding: "0px 16px",
            "& fieldset": { borderColor: "black" },
            "&:hover fieldset": { borderColor: "black" },
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputAdornment-root, & input, & input::placeholder": {
            color: "#f9f9f9",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          ),
        }}
      />

      <Typography p={2} fontWeight={700} variant="h4">
        Welcome Back, Madelen
      </Typography>

      <Box
        sx={{
          backgroundImage: `url("/EmporiumBox.png")`,
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
            <Image src="/GOIcon.png" width={70} height={70} alt="Go Icon" />
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
              src="/Trophy.png"
              width={60}
              height={60}
              alt="Trophy Icon"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            />
            <Typography variant="h5" fontWeight={600}>
              Designer
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF0101",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: "50px",
                textTransform: "lowercase",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#D60000",
                  transform: "scale(1.05)",
                },
              }}
            >
              <ArrowUpwardRoundedIcon
                sx={{
                  backgroundColor: "#fff",
                  color: "#FF0101",
                  borderRadius: "20px",
                }}
              />
              Upgrade
            </Button>
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
              src="/library.png"
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
              src="/Opened Folder.png"
              width={70}
              height={70}
              alt="Opened Folder Icon"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF0101",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: "50px",
                textTransform: "lowercase",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#D60000",
                  transform: "scale(1.05)",
                },
              }}
            >
              <ArrowUpwardRoundedIcon
                sx={{
                  backgroundColor: "#fff",
                  color: "#FF0101",
                  borderRadius: "20px",
                }}
              />
              Open Library
            </Button>
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
            <Image
              src="/Sun.png"
              width={60}
              height={60}
              alt="Sun Icon"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            />
            <Typography variant="h5" fontWeight={600}>
              Popular
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF0101",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: "50px",
                textTransform: "none",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#D60000",
                  transform: "scale(1.05)",
                },
              }}
            >
              <ArrowUpwardRoundedIcon
                sx={{
                  backgroundColor: "#fff",
                  color: "#FF0101",
                  borderRadius: "20px",
                }}
              />
              Discover
            </Button>
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
          {images.map((image, index) => (
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
                    src="/GOIcon.png"
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
          {images.map((_, index) => (
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
