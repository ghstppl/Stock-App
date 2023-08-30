import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
