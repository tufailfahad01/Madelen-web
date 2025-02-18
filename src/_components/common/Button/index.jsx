"use client";
import { Button } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function CustomButton({ text }) {
  return (
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
      {text}
    </Button>
  );
}
