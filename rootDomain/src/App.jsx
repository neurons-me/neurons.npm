import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy
import Layout from './pages/Layout';
//Pages
//Introduction
import IntroductionHome from './pages/Home/Home';
import IntroductionAbout from './pages/Home/About';
import Contact from './pages/Home/Contact';
//OpenSource
import Ecosystem from './pages/OpenSource/Ecosystem';
import Contributing from './pages/OpenSource/Contributing';
import Roadmap from './pages/OpenSource/Roadmap';
//Business Solutions
import BusinessSolutions from './pages/BusinessSolutions/BusinessSolutions';
import BusinessAI from './pages/BusinessSolutions/AIIntegration';
import DataDriven from './pages/BusinessSolutions/DataDriven';
import MarketingSolutions from './pages/BusinessSolutions/MarketingSolutions';
import Branding from './pages/BusinessSolutions/Branding';
import SystemDevelopment from './pages/BusinessSolutions/SystemDevelopment';
import CyberSecurity from './pages/BusinessSolutions/CyberSecurity';

const App = () => {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<Layout />}>
        {/* Introduction */}
        <Route path="/home" element={<IntroductionHome />} />
        <Route path="/about" element={<IntroductionAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/open-source" element={<Ecosystem />} />
        {/* Open Source */}
        <Route path="/open-source/ecosystem" element={<Ecosystem />} /> 
        <Route path="/open-source/roadmap" element={<Roadmap />} />
        <Route path="/open-source/contributing" element={<Contributing />} />  
        {/* Business Solutions */}
        <Route path="/business" element={<BusinessSolutions />} />
        <Route path="/business/ai" element={<BusinessAI />} />
        <Route path="/business/data" element={<DataDriven/>} />
        <Route path="/business/marketing" element={<MarketingSolutions />} />
        <Route path="/business/branding" element={<Branding />} />
        <Route path="/business/system-development" element={<SystemDevelopment />} />
        <Route path="/business/cyber-security" element={<CyberSecurity />} />
        {/* Policies */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Puedes seguir con las demás rutas aquí... */}
        </Route>
        {/* Add more routes as needed */}
        </Routes>
    </Router>
    );
};

export default App;
