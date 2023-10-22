import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";

type ShortcutsProps = {
  open: boolean;
  handleClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    title: "mark_as_unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    title: "mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    title: "archive_chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    title: "delete_chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    title: "pin_chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    title: "search",
    combination: ["Cmd", "F"],
  },
  {
    title: "search_chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    title: "next_chat",
    combination: ["Cmd", "N"],
  },
  {
    title: "next_step",
    combination: ["Ctrl", "Tab"],
  },
  {
    title: "previous_step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    title: "new_group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    title: "profile_&_about",
    combination: ["Cmd", "P"],
  },
  {
    title: "increase_speed_of_voice_message",
    combination: ["Shift", "."],
  },
  {
    title: "decrease_speed_of_voice_message",
    combination: ["Shift", ","],
  },
  {
    title: "settings",
    combination: ["Shift", "S"],
  },
  {
    title: "emoji_panel",
    combination: ["Cmd", "E"],
  },
  {
    title: "sticker_panel",
    combination: ["Cmd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }: ShortcutsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        sx={{ p: 4 }}
        keepMounted
        TransitionComponent={Transition}
      >
        <DialogTitle>{t("shortcuts")}</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ title, combination }, index) => (
              <Grid key={index} item xs={6}>
                <Stack
                  sx={{ with: "100%" }}
                  justifyContent={"space-between"}
                  spacing={3}
                  direction={"row"}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {t(`shortcuts_list.${title}`)}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((item, index) => {
                      return (
                        <Button
                          key={index}
                          disabled
                          variant="contained"
                          sx={{ color: "#212121" }}
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} sx={{ m: 2 }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
