import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "@/redux/store";
import { ToggleSidebar, UpdateSidebarType } from "@/redux/slices/app";
import { randFirstName, randFullName, randImg } from "@ngneat/falso";
import AntSwitch from "@/components/AntSwitch";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{t("block_contact")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t("question_block_contact")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button onClick={handleClose}>{t("yes")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DeleteDialog = ({ open, handleClose }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{t("delete_chat")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t("question_delete_chat")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button onClick={handleClose}>{t("yes")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const { t } = useTranslation();

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background.default,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", width: "100%", p: 2 }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">{t("contact_info")}</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar() as any);
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relatice",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={randImg()}
              alt={randFirstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="body1" fontWeight={600}>
                {randFullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"+91 729 2829 2992"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">{t("voice_call")}</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">{t("video_call")}</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="body1">{t("about")}</Typography>
            <Typography variant="body2">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">{t("shared")}</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED") as any);
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((_, index) => (
              <Box key={index}>
                <img
                  src={randImg()}
                  alt={randFirstName()}
                  style={{ width: "100%" }}
                />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Star size={21} />
              <Typography variant="subtitle2">
                {t("starred_messages")}
              </Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED") as any);
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Bell size={21} />
              <Typography variant="subtitle2">
                {t("mute_notifications")}
              </Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 {t("group_in_common")}</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={randImg()} alt={randFirstName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="caption">
                Owl, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Button
              onClick={() => {
                setOpenBlock(true);
              }}
              startIcon={<Prohibit />}
              fullWidth
              variant="outlined"
            >
              {t("block")}
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(true);
              }}
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
            >
              {t("delete")}
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};

export default Contact;
