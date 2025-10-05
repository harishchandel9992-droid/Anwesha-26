// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthUserProvider } from "./context/AuthUserContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import '@tailwindplus/elements';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthUserProvider>
      <RouterProvider router={router} />
    </AuthUserProvider>
  </React.StrictMode>
);
