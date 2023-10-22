import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import { useTranslation } from "react-i18next";

const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email(t("valid_email")).required(t("required_email")),
  });

  const defaultValues = {
    email: "demo@gmail.com",
  };

  // useForm hook gives all the methods and properties of react-hook-form
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmintSuccessful },
  } = methods;

  type FormValues = {
    email: string;
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
        <RHFTextField name="email" label={t("email")} />

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
          {/* Send Request */}
          {t("send_request")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordForm;
