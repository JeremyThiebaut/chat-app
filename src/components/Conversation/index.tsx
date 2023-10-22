import { Box, Stack } from "@mui/material";
import Header from "@/components/Conversation/Header";
import Footer from "@/components/Conversation/Footer";
import Message from "@/components/Conversation/Message";

const Conversation = () => {
  return (
    <Stack height={"100vh"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box
        width={"100%"}
        height={"100%"}
        sx={{ flewGrow: 1, height: "100%", overflow: "auto" }}
      >
        <Message menu={true} />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
