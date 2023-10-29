import NewPasswordForm from "@/sections/auth/NewPasswordForm";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewPassword = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography paragraph variant="h3">
          {t("reset_password")}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          {t("new_password_description")}
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
        {t("back_to_login")}
      </Link>
    </>
  );
};

export default NewPassword;
