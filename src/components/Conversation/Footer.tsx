import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

// array
const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput: React.FC = ({ setOpenPicker }) => {
  const { t } = useTranslation();
  const [openActions, setOpenActions] = useState<boolean>(false);
  return (
    <StyledInput
      fullWidth
      placeholder={t("write_message")}
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                porision: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((action, index) => (
                <Tooltip placement="right" title={action.title} key={index}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                      position: "absolute",
                      top: -action.y,
                      backgroundColor: action.color,
                    }}
                  >
                    {action.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker((prev: boolean) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer: React.FC = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState<boolean>(false);

  return (
    <Box
      p={2}
      sx={{
        width: "calc(100% - 32px)",
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          {/* ChatInput */}
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
