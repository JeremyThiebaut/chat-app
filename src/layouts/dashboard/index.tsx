import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
