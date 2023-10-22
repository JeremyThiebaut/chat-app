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
import { useTranslation } from "react-i18next";

const Settings = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
      title: "notifications",
      onClick: () => {},
    },
    {
      icon: <Lock size={20} />,
      title: "privacy",
      onClick: () => {},
    },
    {
      icon: <Key size={20} />,
      title: "security",
      onClick: () => {},
    },
    {
      icon: <PencilCircle size={20} />,
      title: "theme",
      onClick: () => {},
      // onClick: handleOpenTheme,
    },
    {
      icon: <Image size={20} />,
      title: "chat_wallpaper",
      onClick: () => {},
    },
    {
      icon: <Note size={20} />,
      title: "request_account_info",
      onClick: () => {},
    },
    {
      icon: <Keyboard size={20} />,
      title: "keyboard_shortcuts",
      // onClick: () => {},
      onClick: handleOpenShortcuts,
    },
    {
      icon: <Info size={20} />,
      title: "help",
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
              <Typography variant="h6">{t("settings")}</Typography>
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
                    <Typography variant="body2">
                      {t(`dashboard_list.${title}`)}
                    </Typography>
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
