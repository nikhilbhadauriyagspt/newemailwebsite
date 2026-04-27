import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CommonProblems from '../components/CommonProblems';
import WhyEmailIssues from '../components/WhyEmailIssues';
import FixProcess from '../components/FixProcess';
import IssueGuides from '../components/IssueGuides';
import TrustedGuidance from '../components/TrustedGuidance';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen font-sans bg-bg-light text-dark-navy">
      <Header />
      <main>
        <Hero />
        <CommonProblems />
        <WhyEmailIssues />
        <FixProcess />
        <IssueGuides />
        <TrustedGuidance />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
