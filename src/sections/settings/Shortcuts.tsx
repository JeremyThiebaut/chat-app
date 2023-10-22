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
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    title: "Next Chat",
    combination: ["Cmd", "N"],
  },
  {
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    title: "Profil & About",
    combination: ["Cmd", "P"],
  },
  {
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }: ShortcutsProps) => {
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
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
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
                    {title}
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
