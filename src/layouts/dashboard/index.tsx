import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        Hello
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
