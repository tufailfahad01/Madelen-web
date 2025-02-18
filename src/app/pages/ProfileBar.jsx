"use client";
import Image from "next/image";
import { Box, Typography, Button, Avatar } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PersonIcon from "@mui/icons-material/Person";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Divider from "@mui/material/Divider";

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
              src="/NumbersImage.png"
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
            width: 180,
            height: 180,
            borderRadius: "50%",
            p: "2px",
            background: "linear-gradient(to right, #D300C5, #FFC900)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <Avatar
            alt="User Image"
            src="/ProfileImage.png"
            sx={{
              width: 176,
              height: 176,
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box display={"flex"} gap={0.5} alignItems={"center"} mt={1}>
          <Typography variant="h5" fontWeight={600}>
            Madelen Sam
          </Typography>
          <EditNoteIcon
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Box>
        <Typography variant="body1" color="gray">
          @raymadelen
        </Typography>
        <Typography variant="body2" textAlign={"center"} color="gray">
          Lorem odor amet, consec tetuer adipi scing elit ctus effi citur cura
          erdiet ntum senectus odio.
        </Typography>
        <Divider
          sx={{
            width: "100%",
            mt: 2,
            border: "1px solid gray",
            borderColor: "gray",
          }}
        />
      </Box>

      <Box mt={2}>
        <Typography variant="h5" mt={1} fontWeight={600}>
          Recent activities
        </Typography>
        {[
          "Downloaded new mesh 1",
          "Downloaded new mesh 2",
          "Downloaded new mesh 3",
          "Downloaded new mesh 4",
        ].map((activity, id) => (
          <Box
            key={id}
            display={"flex"}
            py={0.3}
            alignItems={"center"}
            gap={1}
            sx={{
              transition: "background-color 0.3s ease",
              "&:hover": { backgroundColor: "#111" },
              borderRadius: "4px",
              px: 1,
            }}
          >
            <Image
              src="/ListTypeImage.png"
              width={14}
              height={14}
              alt="List Icon"
            />
            <Typography variant={"body1"} py={0.3} color="gray">
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

      <Box mt={2}>
        <Typography mt={1} variant="h5" fontWeight={600}>
          Statistics
        </Typography>
        <Box
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            234
          </Typography>
          <Typography variant="body2" fontWeight={600} color="gray">
            TOTAL REMIXES
          </Typography>
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
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Typography mt={1} variant="h6" fontWeight={600}>
            1342
          </Typography>
          <Typography variant="body2" fontWeight={600} color="gray">
            TOTAL DOWNLOADS
          </Typography>
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
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Typography mt={1} variant="h6" fontWeight={600}>
            3494
          </Typography>
          <Typography variant="body2" fontWeight={600} color="gray">
            TOTAL PROJECTS
          </Typography>
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
        mt={3}
        flexDirection={"column"}
        gap={1}
        alignItems={"center"}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.03)" },
        }}
      >
        <Image
          src="/discordImage.png"
          width={54}
          height={54}
          alt="Discord Icon"
        />
        <Typography variant={"h6"} fontWeight={600}>
          Join Us On Discord!
        </Typography>
        <Typography variant={"body2"} textAlign={"center"} color="gray">
          Connect with fellow creators, stay in touch with the team, and get the
          latest updates and news from OOR!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#FF0101",
            color: "#fff",
            borderRadius: "20px",
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
