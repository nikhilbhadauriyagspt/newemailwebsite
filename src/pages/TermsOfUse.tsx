import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Scale, Info, AlertTriangle, CheckCircle } from "lucide-react";

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header />
      <main className="py-16 px-6 font-sans">
        <div className="max-w-[800px] mx-auto bg-white rounded-[32px] border border-[#EEF0FA] p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#0F1B3D]">Terms of Use</h1>
          </div>

          <div className="prose prose-indigo max-w-none text-[#5B6478] space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-500" /> 1. Acceptance of Terms
              </h2>
              <p className="leading-7">
                By accessing this website, you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-500" /> 2. Use License
              </h2>
              <p className="leading-7">
                Permission is granted to temporarily download one copy of the materials on Mail Yaga's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-indigo-500" /> 3. Disclaimer
              </h2>
              <p className="leading-7">
                The materials on Mail Yaga's website are provided on an 'as is' basis. Mail Yaga makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-500" /> 4. Limitations
              </h2>
              <p className="leading-7">
                In no event shall Mail Yaga or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mail Yaga's website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-500" /> 5. Revisions
              </h2>
              <p className="leading-7">
                The materials appearing on Mail Yaga's website could include technical, typographical, or photographic errors. Mail Yaga does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <div className="pt-8 border-t border-[#EEF0FA] text-sm italic">
              Last updated: April 2024. Use of this website constitutes acceptance of our terms.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
