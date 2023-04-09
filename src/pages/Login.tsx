import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  Typography
} from "@mui/material";
import { login, register } from "../firebase/client";
import { useState } from "react";
import {
  formatErrorText,
  isPasswordError,
  isValidEmail as isValidEmailRegex
} from "../helpers/regex";
import { getFormData } from "../helpers/formHelpers";
import { Copyright } from "../components/Copyright";
import { LoginFooter } from "../components/LoginFooter";
import { FormInput } from "../components/FormInput";

const signUpLabel = "Welcome! We're so excited to have you join us.";
const loginLabel = "Welcome back! We're so excited to see you again.";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = getFormData(event);
    const user = await login({ email, password });

    if (typeof user === "string") {
      setErrorMessage(user);
    }
  };

  const handleSingUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, confirmPassword } = getFormData(event);

    if (confirmPassword !== password) {
      setErrorMessage("Error (/auth/passwords-don't-match)");
      return;
    }

    register({ email, password });
  };

  return (
    <Container maxWidth="xs">
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
          {isLogin ? loginLabel : signUpLabel}
        </Typography>
        <Box
          component="form"
          onSubmit={isLogin ? handleLogin : handleSingUp}
          noValidate
          sx={{ mt: 1 }}
        >
          <FormInput
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onBlur={(event) => {
              if (!event.target.value) return;

              const isValidEmail = isValidEmailRegex(event.target.value);
              setIsValidEmail(isValidEmail);
              if (!isValidEmail) {
                setErrorMessage("Error (/auth/invalid-email)");
              }
            }}
            onFocus={() => {
              setIsValidEmail(true);
              setErrorMessage(undefined);
            }}
            error={
              !isValidEmail ||
              (errorMessage !== undefined && isPasswordError(errorMessage))
            }
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={errorMessage !== undefined && isPasswordError(errorMessage)}
          />

          {!isLogin && (
            <FormInput
              name="confirmPassword"
              label="Confirm your password"
              type="password"
              id="confirmPassword"
              error={
                errorMessage !== undefined && isPasswordError(errorMessage)
              }
            />
          )}
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
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
          <LoginFooter
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export { Login };
