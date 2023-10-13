import { Box, Stack } from "@mui/material";
import Chat from "./Chat";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ with: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "#fff",
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
