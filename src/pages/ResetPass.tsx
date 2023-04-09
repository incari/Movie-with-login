import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  Grid,
  Link,
  Typography
} from "@mui/material";
import { login, register, resetPassword } from "../firebase/client";
import { useState } from "react";
import {
  formatErrorText,
  isValidEmail as isValidEmailRegex
} from "../helpers/regex";
import { getFormData } from "../helpers/formHelpers";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Copyright } from "../components/Copyright";
import { FormInput } from "../components/FormInput";
import { BackToLogin } from "../components/BackToLogin";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = getFormData(event);
    const user = await resetPassword(email);

    if (typeof user === "string") {
      setErrorMessage(user);
      return;
    }
    navigate("/reset-success");
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Uh oh, looks like your password needs a refresh! Let's reset it so you
          can get back in the game.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <FormInput
            id="email"
            label="Email Address"
            name="email"
            error={errorMessage !== undefined}
          />

          {errorMessage ? (
            <FormHelperText error>
              {formatErrorText(errorMessage)}
            </FormHelperText>
          ) : (
            <div style={{ height: "20px" }}></div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset password
          </Button>
          <Grid container>
            <Grid
              item
              xs
              sx={{ maxWidth: "390px", width: "100%" }}
            >
              <BackToLogin />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export { ResetPassword };
