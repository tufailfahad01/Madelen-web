import { Typography } from "@mui/material";

export const CustomTypography = ({ textSize, content, textColor, textWeight, align, textfamily, textHeight }) => {
    return (
        <Typography
            sx={{
                fontFamily: textfamily,
                fontSize: textSize,
                color: textColor,
                fontWeight: textWeight,
                textAlign: align,
                lineHeight: textHeight,
            }}
        >
            {content}
        </Typography>
    );
};