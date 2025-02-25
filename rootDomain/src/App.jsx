import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import DocsPage from './pages/Docs/DocsPage';
import AboutUs from './pages/AboutUs/AboutUs'; // Import AboutUs component
import BusinessSolutions from './pages/AboutUs/BusinessSolutions';
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy
import MdxPage from './pages/MdxPage';

const App = () => {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/docs"
          element={
          <Navigate to="https://docs.neurons.me" replace />
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/mdx/:slug" element={<MdxPage />} />
        <Route
          path="/terms-and-conditions"
          element={
            <DocsPage>
              <TermsAndConditions />
            </DocsPage>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <DocsPage>
              <PrivacyPolicy />
            </DocsPage>
          }
        />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
