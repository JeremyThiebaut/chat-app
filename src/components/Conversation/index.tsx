import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100vh"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box
        width={"100%"}
        height={"100%"}
        sx={{ flewGrow: 1, height: "100%", overflow: "auto" }}
      >
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
