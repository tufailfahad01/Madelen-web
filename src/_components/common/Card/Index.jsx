import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../Button";

export const CardComponent = ({ icon, title, content, buttonText, imageSrc, altText }) => (
  <Box
    borderRadius="30px"
    sx={{
      background: "linear-gradient(to right, rgb(201, 124, 202), rgb(80, 31, 143))",
      p: 2,
      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "scale(1.02)" },
      width: { xs: "100%", sm: "260px", md: "280px" },
      mb: { xs: 2, sm: 0 },
    }}
  >
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      sx={{
        width: { xs: "100%", sm: "300px" },
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {icon}
      <Typography fontWeight={600} sx={{fontSize: "10px", fontFamily: "sans-serif", lineHeight: "14px"}}>
        {title}
      </Typography>
    </Box>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
      sx={{
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
        gap: { xs: 2, sm: 0 }, // Add gap between items on small screens
      }}
    >
      <Image
        src={imageSrc}
        width={45}
        height={45}
        alt={altText}
        style={{ transition: "transform 0.3s", cursor: "pointer" }}
      />
      <Typography fontWeight={600} sx={{ textAlign: { xs: "center", sm: "left" }, fontSize: "20px", lineHeight: "29px" }}>
        {content}
      </Typography>
      <CustomButton text={buttonText} />
    </Box>
  </Box>
);