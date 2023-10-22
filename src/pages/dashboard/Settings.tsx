import * as React from "react";
import Shortcuts from "@/sections/settings/Shortcuts";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { randFullName, randImg, randWord } from "@ngneat/falso";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";

const Settings = () => {
  const theme = useTheme();

  const [openShortcuts, setOpenShortcuts] = React.useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      icon: <Bell size={20} />,
      title: "Notifications",
      onClick: () => {},
    },
    {
      icon: <Lock size={20} />,
      title: "Privacy",
      onClick: () => {},
    },
    {
      icon: <Key size={20} />,
      title: "Security",
      onClick: () => {},
    },
    {
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onClick: () => {},
      // onClick: handleOpenTheme,
    },
    {
      icon: <Image size={20} />,
      title: "Chat Wellpaper",
      onClick: () => {},
    },
    {
      icon: <Note size={20} />,
      title: "Request Acount Info",
      onClick: () => {},
    },
    {
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      // onClick: () => {},
      onClick: handleOpenShortcuts,
    },
    {
      icon: <Info size={20} />,
      title: "Help",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* LeftPanel */}
        <Box
          sx={{
            overflowY: "auto",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background.default,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4b4b4b"} />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={randImg()}
                alt={randFullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="h6">{randFullName()}</Typography>
                <Typography variant="body2">{randWord()}</Typography>
              </Stack>
            </Stack>
            {/* List of options */}
            <Stack spacing={4}>
              {list.map(({ icon, title, onClick }, index) => (
                <Stack
                  key={index}
                  spacing={2}
                  sx={{ cursor: "pointer" }}
                  onClick={onClick}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    {icon}
                    <Typography variant="body2">{title}</Typography>
                  </Stack>
                  {index !== list.length - 1 && <Divider />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
        {/* RightPanel */}
      </Stack>
      {openShortcuts && (
        <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
      )}
    </>
  );
};

export default Settings;
