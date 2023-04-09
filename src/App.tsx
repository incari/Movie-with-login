import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "./firebase/client";
import { Login } from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";

import { ResetPassword } from "./pages/ResetPass";
import { ResetSuccess } from "./pages/ResetSucess";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const id = user?.uid;
  console.log(user);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    currentUser && setUser(currentUser);
  });

  useEffect(() => {
    if (!id) {
      navigate("/login");
      return;
    }
    navigate("/");
  }, [user]);

  const handleLogOut = async () => {
    await logout();
    setUser(null);
    navigate("/login");
  };
  return (
    <>
      <Navbar
        email={id && user ? user.email : null}
        isLogged={typeof id === "string"}
        onLogOut={handleLogOut}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/reset"
          element={<ResetPassword />}
        />{" "}
        <Route
          path="/reset-success"
          element={<ResetSuccess />}
        />
      </Routes>
    </>
  );
};
