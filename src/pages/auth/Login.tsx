import LoginForm from "@/sections/settings/auth/LoginForm";
import AuthSocial from "@/sections/settings/auth/AuthSocial";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          position: "relative",
        }}
      >
        <Typography variant="h4">{t("login_title")}</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New User ?</Typography>
          <Link
            to="/auth/register"
            underline="none"
            component={RouterLink}
            variant="subtitle2"
          >
            Created an account
          </Link>
        </Stack>
        {/* Login Form */}
        <LoginForm />
        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
