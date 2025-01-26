import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./auth/Login";
import Register from "./auth/register";
import "./index.css";
import Main from "./layout/sidebar/Main";
import Chats from "./pages/chats/Chats";
import Error from "./pages/error/error";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Chats />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
