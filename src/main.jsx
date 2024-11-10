import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoryTrackerPage from "./MemoryTracker/MemoryTrackerPage.jsx";
import EarlyAccessForm from "./EarlyAccessForm/EarlyAccessForm.tsx"; // Import the Wait page
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<MemoryTrackerPage />} />
        <Route path="/wait" element={<EarlyAccessForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
