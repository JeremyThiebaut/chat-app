import NewPasswordForm from "@/sections/settings/auth/NewPasswordForm";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography paragraph variant="h3">
          Reset Password
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your new password.
        </Typography>
      </Stack>
      {/* NewPasswordForm */}
      <NewPasswordForm />

      <Link
        component={RouterLink}
        to="/auth/login"
        variant="subtitle2"
        color="inherit"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}
      >
        <CaretLeft />
        Back to login
      </Link>
    </>
  );
};

export default NewPassword;
