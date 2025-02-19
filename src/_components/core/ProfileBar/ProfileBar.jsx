"use client";
import Image from "next/image";
import { Box, Typography, Button, Avatar } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import { CustomTypography } from "@/_components/common/Typography";

export default function ProfileBar() {
  return (
    <Box
      gridColumn="span 2"
      width={"100%"}
      ml={30}
      p={2}
      sx={{
        animation: "fadeIn 0.5s ease-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Box display={"flex"} gap={2} alignItems={"center"}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "50px",
            p: "2px",
            background: "linear-gradient(to right, #D300C5, #FFC900)",
            position: "relative",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              px: 2,
              backgroundColor: "#0B0D15",
              position: "relative",
            }}
          >
            <Image
              src="/assets/icons/NumbersImage.png"
              width={30}
              height={30}
              alt="Trophy Icon"
            />
            <Typography variant="body2">100000</Typography>

            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 10,
                height: 10,
                left: 99,
                p: 1,
                borderRadius: "8px",
                backgroundColor: "rgb(172, 8, 8)",
                color: "#fff",
                fontSize: "23px",
                fontWeight: "bold",
                border: "2px solid rgb(209, 15, 15)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              +
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          <NotificationsRoundedIcon
            sx={{
              border: "2px solid rgb(12, 93, 104)",
              borderRadius: "50px",
              p: 0.4,
              fontSize: "32px",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "rotate(20deg)" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "10px",
              height: "10px",
              backgroundColor: "#FF0101",
              borderRadius: "50px",
            }}
          />
        </Box>
        <Box
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          <PersonIcon
            sx={{
              border: "2px solid rgb(12, 93, 104)",
              borderRadius: "50px",
              p: 0.6,
              fontSize: "33px",
            }}
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        mt={3}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          sx={{
            position: "relative",
            width: 196,
            height: 196,
          }}
        >
          <Avatar
            alt="User Image"
            src="/assets/images/Profile.png"
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              right: 26,
              width: 35,
              height: 35,
              background: "rgba(17, 17, 17, 0.6)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/assets/icons/PictureIcon.png"
              width={18}
              height={18}
              alt="Edit Name Icon"
            />
          </Box>
        </Box>

        <Box display={"flex"} gap={1} alignItems={"center"}>
          <CustomTypography
            textSize="27px"
            content="Madelen Sam"
            textWeight={600}
          />
          <Image
            src="/assets/icons/EditNameIcon.png"
            width={16}
            height={16}
            alt="Edit Name Icon"
          />
        </Box>
        <CustomTypography
          textSize="14px"
          content="@raymadelen"
          textColor="gray"
        />
        <CustomTypography
          textSize="14px"
          content="Lorem odor amet, consec tetuer adipi scing elit ctus effi citur cura
          erdiet ntum senectus odio."
          textColor="gray"
          align="center"
        />
        <Divider
          sx={{
            width: "100%",
            mt: 2,
            border: "1px solid gray",
            borderColor: "gray",
          }}
        />
      </Box>

      <Box mt={1}>
        <CustomTypography
          textSize="18px"
          content="Recent Activities"
          textWeight={600}
        />
        {[
          "Downloaded new mesh 1",
          "Downloaded new mesh 2",
          "Downloaded new mesh 3",
          "Downloaded new mesh 4",
        ].map((activity, id) => (
          <Box
            key={id}
            display={"flex"}
            py={0.2}
            alignItems={"center"}
            gap={1}
            sx={{
              transition: "background-color 0.3s ease",
              "&:hover": { backgroundColor: "#111" },
              borderRadius: "4px",
            }}
          >
            <Image
              src="/assets/icons/ListTypeImage.png"
              width={12}
              height={12}
              alt="List Icon"
            />
            <Typography sx={{ fontSize: "14px" }} color="gray">
              {activity}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider
        sx={{
          width: "100%",
          mt: 2,
          border: "1px solid gray",
          borderColor: "gray",
        }}
      />

      <Box mt={1}>
        <CustomTypography
          textSize="18px"
          content="Statistics"
          textWeight={600}
        />
        <Box
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <CustomTypography textSize="26px" content="234" textWeight={600} />
          <CustomTypography
            textSize="12px"
            content="TOTAL REMIXES"
            textWeight={600}
            textColor="gray"
          />
        </Box>
        <Divider
          sx={{
            width: "100%",
            mt: 1,
            border: "1px dashed gray",
            borderColor: "gray",
          }}
        />
        <Box
          mt={1}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <CustomTypography textSize="26px" content="1342" textWeight={600} />
          <CustomTypography
            textSize="12px"
            content="TOTAL DOWNLOADS"
            textWeight={600}
            textColor="gray"
          />
        </Box>
        <Divider
          sx={{
            width: "100%",
            mt: 1,
            border: "1px dashed gray",
            borderColor: "gray",
          }}
        />
        <Box
          mt={1}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <CustomTypography textSize="26px" content="3494" textWeight={600} />
          <CustomTypography
            textSize="12px"
            content="TOTAL PROJECTS"
            textWeight={600}
            textColor="gray"
          />
        </Box>
        <Divider
          sx={{
            width: "100%",
            mt: 1,
            border: "1px solid gray",
            borderColor: "gray",
          }}
        />
      </Box>

      <Box
        display={"flex"}
        mt={2}
        flexDirection={"column"}
        gap={0.8}
        alignItems={"center"}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.03)" },
        }}
      >
        <Image
          src="/assets/images/discordImage.png"
          width={52}
          height={53}
          alt="Discord Icon"
        />
        <CustomTypography
          textSize="18px"
          content="Join Us On Discord!"
          textWeight={600}
        />
        <CustomTypography
          textSize="12px"
          content="Connect with fellow creators, stay in touch with the team, and get the
          latest updates and news from O!"
          textWeight={600}
          textColor="gray"
          align="center"
        />
        <Button
          sx={{
            mt: 1,
            backgroundColor: "#FF0101",
            color: "#fff",
            borderRadius: "30px",
            width: "100%",
            boxShadow: "0px 4px 10px #FF0101",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#D60000",
              boxShadow: "0px 4px 10px #FF0101",
              transform: "translateY(-2px)",
            },
          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
}
