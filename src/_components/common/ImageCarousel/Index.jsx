"use client";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { imagesData } from "@/utils/dashboardData";

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 32}%)`,
          width: "90%",
        }}
      >
        {imagesData.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: index === currentIndex + 2 ? "30%" : "50%",
              padding: "10px",
              position: "relative",
              transition: "all 0.3s",
            }}
          >
            {index === 1 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "268px",
                  right: "0px",
                  background:
                    "linear-gradient(to right, rgb(188, 188, 221), rgb(19, 47, 231))",
                  color: "white",
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontWeight: 900,
                  fontFamily: "sans-serif",
                  borderRadius: "10px",
                  fontStyle: "italic",
                }}
              >
                FREE
              </Box>
            )}
            <Image
              src={image.src}
              alt={image.heading}
              width={475}
              height={283}
              style={{
                borderRadius: "30px",
                objectFit: "cover",
                width: "100%",
                transition: "transform 0.3s ease",
                boxShadow:
                  index === currentIndex
                    ? "0 0 7px rgba(255, 255, 255, 0.5)"
                    : "none",
                border: index === currentIndex ? "4px solid #fff" : "none",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "10%",
                textAlign: "left",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "26px" }}>
                  {image.heading}
                </Typography>
                <Typography sx={{ color: "lightgray" }}>
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
        ))}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "45%",
          left: 0,
          color: "#fff",
          p: 2,
          background: "rgba(0,0,0,0.5)",
          transform: "translateY(-50%)",
          "&:hover": { background: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "45%",
          right: 0,
          color: "#fff",
          p: 2,
          background: "rgba(0,0,0,0.5)",
          transform: "translateY(-50%)",
          "&:hover": { background: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Box
        sx={{
          height: "9px",
          width: "100%",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px",
          margin: "20px auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${((currentIndex + 1) / imagesData.length) * 100}%`,
            background: "#fff",
            borderRadius: "500px",
            transition: "width 0.5s ease-in-out",
            boxShadow: "0 0 0px rgba(0, 0, 0, 0.76)",
          }}
        />
      </Box>
    </Box>
  );
};
