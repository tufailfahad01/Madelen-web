import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export const ImageCarousel = ({
  imagesData,
  currentIndex,
  setCurrentIndex,
}) => (
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
                background: "linear-gradient(to right, #ffffff, #0022FF)",
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
);
