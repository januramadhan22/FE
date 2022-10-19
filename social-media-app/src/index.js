import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
// import App from "./components/ProfileCard";
// import App from "./components/EditModal";
// import App from "./pages/UserProfile";
// import App from "./pages/Home";
import App from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
