import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../Button";

export const CardComponent = ({ icon, title, content, buttonText, imageSrc, altText }) => (
  <Box
    borderRadius="30px"
    sx={{
      background: "linear-gradient(to right, rgb(201, 124, 202), rgb(80, 31, 143))",
      p: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "scale(1.02)" },
      width: { xs: "100%", sm: "300px", md: "320px" }, // Responsive width
      mb: { xs: 2, sm: 0 }, // Margin bottom for small screens
    }}
  >
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      sx={{
        width: { xs: "100%", sm: "300px" }, // Responsive width
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
        textAlign: { xs: "center", sm: "left" }, // Center text on small screens
      }}
    >
      {icon}
      <Typography variant="body2" fontWeight={600}>
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
        width={60}
        height={60}
        alt={altText}
        style={{ transition: "transform 0.3s", cursor: "pointer" }}
      />
      <Typography variant="h5" fontWeight={600} sx={{ textAlign: { xs: "center", sm: "left" } }}>
        {content}
      </Typography>
      <CustomButton text={buttonText} />
    </Box>
  </Box>
);