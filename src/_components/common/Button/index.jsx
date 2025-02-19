"use client";
import { Button } from "@mui/material";
import Image from "next/image";

export default function CustomButton({ text, btnFontSize, btnWidth }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FF0101",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 1,
        borderRadius: "30px",
        width: btnWidth,
        height: "47px",
        fontSize: btnFontSize,
        textTransform: "none",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: "#D60000",
          transform: "scale(1.05)",
        },
      }}
    >
      <Image
        src="/assets/icons/ArrowIcon.png"
        width={20}
        height={20}
        alt="Arrow Icon"
      />
      {text}
    </Button>
  );
}
