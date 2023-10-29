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

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { t } = useTranslation();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required(t("first_name_required")),
    lastName: Yup.string().required(t("last_name_required")),
    email: Yup.string().email(t("valid_email")).required(t("required_email")),
    password: Yup.string()
      .required(t("required_password"))
      .min(8, t("password_min"))
      .max(50, t("password_max"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        t("password_strength")
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("password_match"))
      .required(t("required_confirm_password")),
  });

  const defaultValues = {
    firstName: "Demo",
    lastName: "User",
    email: "demo@gmail.com",
    password: "Demo1234.",
    confirmPassword: "Demo1234.",
  };

  // useForm hook gives all the methods and properties of react-hook-form
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmintSuccessful },
  } = methods;

  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
        <Stack direction={{ sx: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label={t("first_name")} />
          <RHFTextField name="lastName" label={t("last_name")} />
        </Stack>
        <RHFTextField name="email" label="Email Address" />
        <RHFTextField
          name="password"
          label={t("password")}
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
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Eye /> : <EyeSlash />}
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
          {t("create_account")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
