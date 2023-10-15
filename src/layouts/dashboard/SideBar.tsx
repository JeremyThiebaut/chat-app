import { Profil_Menu } from "../../data";
import { randImg } from "@ngneat/falso";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import Logo from "../../assets/images/logo.ico";
import { useState } from "react";
import { Stack } from "@mui/material";
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
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
            {Profil_Menu.map((item) =>
              item.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={item.index}
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
          <Avatar src={randImg()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
