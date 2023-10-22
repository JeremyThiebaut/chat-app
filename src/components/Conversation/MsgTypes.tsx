import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "@/data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type MessageType = {
  text?: string;
  incoming?: boolean;
  message?: string;
  img?: string;
  reply?: string;
  preview?: string;
};

type TimelineProps = {
  item: MessageType;
  menu?: boolean;
};

const DocMsg = ({ item, menu }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: item.incoming ? theme.palette.text.primary : "#fff",
            }}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const LinkMsg = ({ item, menu }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={item.preview}
              alt={item.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Greating Chat App</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.main }}
                component={Link}
                href={"https://www.youtube.com/"}
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={item.incoming ? theme.palette.text.primary : "#fff"}
            >
              {item.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const ReplyMsg = ({ item, menu }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            alignItems={"centrer"}
            spacing={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text.primary}>
              {item.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text.primary : "#fff"}
          >
            {item.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const MediaMsg = ({ item, menu }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={item.img}
            alt={item.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text.primary : "#fff"}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const TextMsg = ({ item, menu }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={item.incoming ? theme.palette.text.primary : "#fff"}
        >
          {item.message}
        </Typography>
      </Box>
      {/*  */}
      {menu && <MessageOptions />}
    </Stack>
  );
};

const Timeline = ({ item }: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider sx={{ width: "46%" }} />
      <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
        {item.text}
      </Typography>
      <Divider sx={{ width: "46%" }} />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={20}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((item) => (
            <MenuItem
              onClick={() => {
                handleClick;
              }}
              key={item.title}
            >
              {t(`message_options.${item.title}`)}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
