import ChatElement from "@/components/ChatElement";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/Search";
import { ChatList } from "@/data";
import CreateGroup from "@/sections/main/CreateGroup";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Group = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background.default,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant={"h5"}>{t("group")}</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  // placeholder="Search..."
                  placeholder={t("searching")}
                  inputProps={{ "aria-label": t("search") }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignContent={"center"}
            >
              <Typography variant={"subtitle2"} component={Link}>
                {t("create_new_group")}
              </Typography>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}
              spacing={3}
            >
              <Typography variant={"subtitle2"} sx={{ color: "#676667" }}>
                {t("pinned")}
              </Typography>
              {/* Chat List */}
              {ChatList.filter((item) => item.pinned).map((item, index) => {
                return <ChatElement {...item} key={index} />;
              })}
              <Typography variant={"subtitle2"} sx={{ color: "#676667" }}>
                {t("all_groups")}
              </Typography>

              {ChatList.filter((item) => !item.pinned).map((item, index) => {
                return <ChatElement {...item} key={index} />;
              })}
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
        {/* // TODO => Reuse Conversation Component */}
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Group;
