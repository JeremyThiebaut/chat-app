import { Box, Stack } from "@mui/material";
import Chat from "./Chat";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

type GeneralAppProps = {
  app: {
    sidebar: {
      open: boolean;
    };
  };
};

const GeneralApp = () => {
  const { sidebar } = useSelector((state: GeneralAppProps) => state.app);
  return (
    <Stack direction={"row"} sx={{ with: "100%" }}>
      {/* Chat */}
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor: "#f0f4fa",
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
