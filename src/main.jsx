import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
