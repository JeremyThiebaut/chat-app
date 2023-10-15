import { Chat_History } from "../../data";
import { Box, Stack } from "@mui/material";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item, index) => {
          switch (item.type) {
            case "divider":
              //  Timeline
              return <Timeline item={item} key={index} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg item={item} key={index} />;
                case "doc":
                  // doc msg
                  return <DocMsg item={item} key={index} />;
                case "link":
                  // link msg
                  return <LinkMsg item={item} key={index} />;
                case "reply":
                  // reply msg
                  return <ReplyMsg item={item} key={index} />;

                default:
                  // text msg
                  return <TextMsg item={item} key={index} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
