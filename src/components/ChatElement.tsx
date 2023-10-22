import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { randImg } from "@ngneat/falso";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "75%",
      height: "75%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = (params: {
  id: number;
  name: string;
  img: string;
  msg: string;
  time: string;
  unread: number;
  online: boolean;
}) => {
  return (
    <Box
      sx={{
        width: "calc(100% - 32px)",
        borderRadius: 1,
        backgroundColor: "#fff",
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {params.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={randImg()} />
            </StyledBadge>
          ) : (
            <Avatar alt="Remy Sharp" src={randImg()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{params.name}</Typography>
            <Typography variant="caption">{params.msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {params.time}
          </Typography>
          <Badge color="primary" badgeContent={params.unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
