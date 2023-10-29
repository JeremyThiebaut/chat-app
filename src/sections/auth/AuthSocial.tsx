import { Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <IconButton>
          <GoogleLogo color="#df3e30" />
        </IconButton>
        <IconButton color="inherit">
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1c9cea" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
