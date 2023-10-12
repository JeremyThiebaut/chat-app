import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { ChatCircleDots, Gear, Phone, Users } from "phosphor-react";
import { styled } from "@mui/material/styles";
import Logo from "../../assets/images/logo.ico";
import { useState } from "react";
import { Switch } from "@mui/material";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 16,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Profil_Icon = () => [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  return (
    <>
      <Box
        // p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack sx={{ alignItems: "center" }} spacing={4} p={2}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"Chat App Logo"} style={{ height: 64 }} />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={3}
            >
              {Profil_Icon().map((item) =>
                item.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={item.index}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(item.index)}
                    sx={{ width: "max-content", color: "#000" }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack p={2} spacing={4}>
            <AntSwitch defaultChecked />
            <Avatar src={"https://avatars.dicebear.com/api/avataaars/1.svg"} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
