import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";

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
};

const DocMsg = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={props.item.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.item.incoming
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
              color: props.item.incoming ? theme.palette.text.primary : "#fff",
            }}
          >
            {props.item.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const LinkMsg = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={props.item.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.item.incoming
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
              src={props.item.preview}
              alt={props.item.message}
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
              color={props.item.incoming ? theme.palette.text.primary : "#fff"}
            >
              {props.item.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const ReplyMsg = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={props.item.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.item.incoming
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
              {props.item.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={props.item.incoming ? theme.palette.text.primary : "#fff"}
          >
            {props.item.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const MediaMsg = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={props.item.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={props.item.img}
            alt={props.item.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={props.item.incoming ? theme.palette.text.primary : "#fff"}
          >
            {props.item.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const TextMsg = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={props.item.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={props.item.incoming ? theme.palette.text.primary : "#fff"}
        >
          {props.item.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const Timeline = (props: TimelineProps) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider sx={{ width: "46%" }} />
      <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
        {props.item.text}
      </Typography>
      <Divider sx={{ width: "46%" }} />
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
