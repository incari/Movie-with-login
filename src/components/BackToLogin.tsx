import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BackToLogin = () => {
  return (
    <RouterLink to="/login">
      <Link
        sx={{ cursor: "pointer" }}
        variant="body2"
        href="/login"
      >
        ← Back to login page
      </Link>
    </RouterLink>
  );
};

export { BackToLogin };
