import React from "react";
import Copilot from "./components/CopilotPage/Copilot";
import LandingPage from "./components/LandingPage/LandingPage";
import ContactFormModal from "./components/LandingPage/ContactFormModal";
import ThankYouPage from "./components/LandingPage/ThankYouPage";
import {
  Route,
  BrowserRouter as Router, // Changed to BrowserRouter
  Routes, // Added Routes
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* Changed to BrowserRouter */}
      <Routes>
        {" "}
        {/* Added Routes */}
        <Route path="/microsoft-365/copilot" element={<Copilot />} />
        <Route
          path="/microsoft-365/solutions-and-offerings"
          element={<LandingPage />}
        />
        <Route
          path="/microsoft-365/contactform"
          element={<ContactFormModal />}
        />
        <Route path="/microsoft-365/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
