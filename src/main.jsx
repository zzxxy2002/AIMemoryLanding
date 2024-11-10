import React from "react";
import ReactDOM from "react-dom/client";
import App from "./FeatureSection/FeatureSection.jsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeatureSection />
  </React.StrictMode>
);
