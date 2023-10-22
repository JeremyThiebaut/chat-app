import AuthSocial from "@/sections/settings/auth/AuthSocial";
import RegisterForm from "@/sections/settings/auth/RegisterForm";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          position: "relative",
        }}
      >
        <Typography variant="h4">Get Started with Talk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link
            to="/auth/login"
            underline="none"
            component={RouterLink}
            variant="subtitle2"
          >
            Sign in
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
            Terms of Service
          </Link>
          {" and "}
          <Link underline="always" color="text.primary">
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
