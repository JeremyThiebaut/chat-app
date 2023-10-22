import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "@/data";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/Search";
import ChatElement from "@/components/ChatElement";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "calc(100vh - 48px)" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("searching")}
              inputProps={{ "aria-label": t("search") }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button
              sx={{
                textTransform: "none",
              }}
            >
              Archive
            </Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "auto", height: "100%" }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              {t("pinned")}
            </Typography>
            {ChatList.filter((item) => item.pinned).map((item, index) => {
              return <ChatElement {...item} key={index} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              {t("all_chats")}
            </Typography>
            {ChatList.filter((item) => !item.pinned).map((item, index) => {
              return <ChatElement {...item} key={index} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
