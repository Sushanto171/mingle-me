import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./auth/Login";
import Register from "./auth/register";
import "./index.css";
import Main from "./layout/sidebar/Main";
import Error from "./pages/error/error";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
