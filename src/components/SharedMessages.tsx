import * as React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "@/redux/slices/app";
import { randFullName, randImg } from "@ngneat/falso";
import { SHARED_DOCS, SHARED_LINKS } from "@/data";
import { DocMsg, LinkMsg } from "@/components/Conversation/MsgTypes";
import { useTranslation } from "react-i18next";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
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
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT") as any);
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">{t("shared_messages")}</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2, alignSelf: "center" }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label={t("media")} />
          <Tab label={t("links")} />
          <Tab label={t("docs")} />
        </Tabs>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relatice",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((item) => {
                      return (
                        <Grid item xs={4} key={item}>
                          <img
                            src={randImg()}
                            alt={randFullName()}
                            style={{ height: 64 }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1:
                return SHARED_LINKS.map((item, index: number) => (
                  <LinkMsg key={index} item={item} />
                ));
              case 2:
                return SHARED_DOCS.map((item, index: number) => (
                  <DocMsg key={index} item={item} />
                ));
              default:
                return null;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
