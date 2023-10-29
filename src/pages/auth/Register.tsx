import AuthSocial from "@/sections/auth/AuthSocial";
import RegisterForm from "@/sections/auth/RegisterForm";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
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
        <Typography variant="h4">{t("get_started_with_talk")}</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">{t("already_account")}</Typography>
          <Link
            to="/auth/login"
            underline="none"
            component={RouterLink}
            variant="subtitle2"
          >
            {t("sign_in")}
          </Link>
        </Stack>
        {/* Register Form */}
        <RegisterForm />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 2,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, I agree to "}
          <Link underline="always" color="text.primary">
            {t("terms_of_service")}
          </Link>
          {" and "}
          <Link underline="always" color="text.primary">
            {t("privacy_policy")}
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
