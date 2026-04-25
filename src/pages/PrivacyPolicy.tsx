import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-24 ">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PRIVACY POLICY</h1>
          <p className="text-gray-500 mb-12 italic">Last updated February 06, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <section>
              <p>
                This Privacy Notice describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visit our website at <a href="https://mailyaga.shop/" className="text-primary hover:text-secondary font-bold">mailyaga.shop</a> or any website of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any marketing or events</li>
              </ul>
              <p>
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@mailyaga.shop" className="text-primary font-bold">info@mailyaga.shop</a>.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SUMMARY OF KEY POINTS</h2>
              <p className="mb-4 font-medium italic">This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</p>
              <div className="space-y-4 text-sm">
                <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
                <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
                <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
                <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</p>
                <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
                <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
                <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 space-y-2 font-medium">
                <li><a href="#collect" className="text-primary hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#process" className="text-primary hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#legal" className="text-primary hover:underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#share" className="text-primary hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#cookies" className="text-primary hover:underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                <li><a href="#keep" className="text-primary hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#safe" className="text-primary hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                <li><a href="#minors" className="text-primary hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                <li><a href="#rights" className="text-primary hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#dnt" className="text-primary hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#us-residents" className="text-primary hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                <li><a href="#updates" className="text-primary hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#contact" className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#review" className="text-primary hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </section>

            <section id="collect">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h3>
              <p className="font-bold">Personal information you disclose to us</p>
              <p><em>In Short: We collect personal information that you provide to us.</em></p>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include names, phone numbers, and email addresses.</p>
              <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
              <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
            </section>

            <section id="process">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
              <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the purpose of delivering and facilitating delivery of services to the user. We may also process your information for other purposes only with your prior explicit consent.</em></p>
            </section>

            <section id="legal">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h3>
              <p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>
            </section>

            <section id="share">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
              <p><em>In Short: We may share information in specific situations described in this section such as during business transfers. We do not sell your personal information to third parties.</em></p>
            </section>

            <section id="cookies">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
              <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
              <p>We may use cookies and similar tracking technologies to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
            </section>

            <section id="keep">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
              <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
            </section>

            <section id="safe">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
              <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
            </section>

            <section id="minors">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
              <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
            </section>

            <section id="rights">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
              <p><em>In Short: Depending on your region, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></p>
            </section>

            <section id="dnt">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
              <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. We do not currently respond to DNT browser signals as no uniform technology standard has been finalized.</p>
            </section>

            <section id="us-residents">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
              <p><em>In Short: Residents of certain states may have specific rights regarding access to personal information, correction of inaccuracies, and deletion of data.</em></p>
            </section>

            <section id="updates">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
              <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
              <p>If you have questions or comments about this notice, you may email us at <a href="mailto:info@mailyaga.shop" className="text-primary font-bold">info@mailyaga.shop</a>.</p>
            </section>

            <section id="review">
              <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
              <p>Based on the applicable laws, you may have the right to request access to the personal information we collect from you, correct inaccuracies, or delete your personal information. To exercise these rights, please contact us via email.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;