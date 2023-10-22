import ResetPasswordForm from "@/sections/settings/auth/ResetPasswordForm";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography paragraph variant="h3">
          Forgot your password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter your email address associated with your account and we
          will send you a link to reset your password.
        </Typography>

        {/* Reset Password Form */}

        <ResetPasswordForm />

        <Link
          component={RouterLink}
          to="/auth/login"
          variant="subtitle2"
          color="inherit"
          sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline" }}
        >
          <CaretLeft />
          Back to login
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
