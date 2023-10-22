import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import SideBar from "@/layouts/dashboard/SideBar";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
