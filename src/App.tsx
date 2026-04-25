import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GuidesPage from './pages/GuidesPage';
import GuideDetail from './pages/GuideDetail';
import ContactPage from './pages/ContactPage';

// Policy Pages
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import CookiePolicy from './pages/policies/CookiePolicy';
import RefundPolicy from './pages/policies/RefundPolicy';
import Disclaimer from './pages/policies/Disclaimer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:id" element={<GuideDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Policy Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
