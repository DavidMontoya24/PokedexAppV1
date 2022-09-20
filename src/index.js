import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import { AuthProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);