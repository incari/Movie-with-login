import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { Copyright } from "../components/Copyright";
import { Link as RouterLink } from "react-router-dom";
import { BackToLogin } from "../components/BackToLogin";
import { CheckCircleOutline } from "@mui/icons-material";

const ResetSuccess = () => {
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
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <CheckCircleOutline />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Your password is now reset!
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          my={2}
        >
          Check your email to change your password{" "}
        </Typography>
      </Box>
      <BackToLogin />

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export { ResetSuccess };
