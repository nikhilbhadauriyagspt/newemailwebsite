import React from 'react';
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
