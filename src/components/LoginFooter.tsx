import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LoginFooter = ({
  setIsLogin,
  isLogin
}: {
  setIsLogin: (isLogin: boolean) => void;
  isLogin: boolean;
}) => {
  return (
    <Grid container>
      <Grid
        item
        xs
      >
        <RouterLink to="/reset">
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
          >
            Forgot password?
          </Link>
        </RouterLink>
      </Grid>
      <Grid item>
        <Link
          sx={{ cursor: "pointer" }}
          onClick={() => setIsLogin(!isLogin)}
          variant="body2"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"}
        </Link>
      </Grid>
    </Grid>
  );
};

export { LoginFooter };
