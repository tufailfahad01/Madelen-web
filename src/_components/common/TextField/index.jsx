"use client";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomTextField({ placeholder }) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
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
  );
}
