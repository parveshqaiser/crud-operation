
import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./src/app.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
)