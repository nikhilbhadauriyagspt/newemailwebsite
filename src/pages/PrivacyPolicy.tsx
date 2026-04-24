import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
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
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#0F1B3D]">Privacy Policy</h1>
          </div>

          <div className="prose prose-indigo max-w-none text-[#5B6478] space-y-8">
            <p className="font-medium text-[15px] leading-7">
              At Mail Yaga, accessible from mailyaga.shop, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mail Yaga and how we use it.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-500" /> 1. Information We Collect
              </h2>
              <p className="leading-7">
                If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-500" /> 2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-500" /> 3. Log Files
              </h2>
              <p className="leading-7">
                Mail Yaga follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" /> 4. Data Protection
              </h2>
              <p className="leading-7">
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, and to restrict processing of their personal data.
              </p>
            </section>

            <div className="pt-8 border-t border-[#EEF0FA] text-sm italic">
              Last updated: April 2024. If you have any questions, contact us at info@mailyaga.shop.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
