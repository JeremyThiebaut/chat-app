import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { randFirstName, randFullName, randImg } from "@ngneat/falso";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import StyledBadge from "../StyledBadge";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slices/app";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        width: "calc(100% - 32px)",
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          onClick={() => dispatch(ToggleSidebar())}
          direction={"row"}
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={randFirstName()} src={randImg()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">{randFullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
