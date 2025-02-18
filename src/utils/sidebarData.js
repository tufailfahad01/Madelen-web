import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const navItems = [
    { src: "/assets/icons/dashboard.png", label: "Dashboard", page: "dashboard" },
    { src: "/assets/icons/emporium.png", label: "Emporium", page: "emporium" },
    { src: "/assets/icons/library.png", label: "Library", page: "library" },
    { src: "/assets/icons/studio.png", label: "Studio", page: "studio" },
    { src: "/assets/icons/coins.png", label: "Ocoin", page: "ocoin" },
  ];
  
  export const bottomItems = [
    { icon: <HelpOutlineIcon />, label: "Help", page: "help" },
    { icon: <SettingsIcon />, label: "Settings", page: "settings" },
    { icon: <LogoutIcon />, label: "Logout", page: "logout" },
  ];
  