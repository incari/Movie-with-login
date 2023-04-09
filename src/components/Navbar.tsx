import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { useState } from "react";
import BlenderIcon from "@mui/icons-material/Blender";
import { Link } from "react-router-dom";

const Navbar = ({
  email,
  isLogged,
  onLogOut
}: {
  email: string | null;
  isLogged: boolean;
  onLogOut: () => void;
}) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const menuItems = [{ label: email }, { label: "Logout", onClick: onLogOut }];

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer"
          }}
        >
          <BlenderIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            My app
          </Typography>
        </Link>
        {isLogged ? (
          <Tooltip title="Open settings">
            <Avatar onClick={handleOpen}>
              {email ? email[0].toUpperCase() : "U"}
            </Avatar>
          </Tooltip>
        ) : (
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer"
            }}
          >
            <Typography>Login</Typography>
          </Link>
        )}
      </Toolbar>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleClose}
      >
        {menuItems.map(({ label, onClick }) => (
          <MenuItem
            key={label}
            onClick={() => {
              onClick && onClick();
              handleClose();
            }}
          >
            <Typography textAlign="center">{label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export { Navbar };
