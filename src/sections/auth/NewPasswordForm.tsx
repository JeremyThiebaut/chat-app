import * as React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/hook-form/FormProvider";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { useTranslation } from "react-i18next";

const NewPasswordForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, t("password_min"))
      .max(50, t("password_max"))
      .required(t("required_password")),
    confirmPassword: Yup.string()
      .required(t("required_confirm_password"))
      .oneOf([Yup.ref("newPassword")], t("password_match")),
  });

  const defaultValues = {
    newPassword: "",
    confirmPassword: "",
  };

  // useForm hook gives all the methods and properties of react-hook-form
  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmintSuccessful },
  } = methods;

  type FormValues = {
    newPassword: string;
    confirmPassword: string;
    afterSubmit?: string;
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // submit data to api
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmin={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name="newPassword"
          label={t("new_password")}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmPassword"
          label={t("confirm_password")}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "gery.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "gery.800",
            },
          }}
        >
          {t("submit")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
