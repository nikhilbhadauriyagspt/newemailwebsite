import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, X } from "lucide-react";

const ContactPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Login Problem",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setShowPopup(true);
      // Reset form after submission
      setFormData({ name: "", email: "", phone: "", subject: "Login Problem", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header />

      <main className="py-16 md:py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-[#4F46E5]" />
            </div>
            <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#0F1B3D] mb-4 tracking-tight">Contact Us</h1>
            <p className="text-[16px] md:text-[18px] text-[#5B6478] max-w-[600px] mx-auto font-medium leading-relaxed">
              Have a specific email problem? Our experts are ready to help you. Send us a message or reach out via our support channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Side: Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] border border-[#EEF0FA] p-8 shadow-sm space-y-8">
                <h2 className="text-[22px] font-extrabold text-[#0F1B3D]">Support Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#5B6478] mb-1">Email Support</p>
                      <p className="text-[15px] font-extrabold text-[#0F1B3D]">info@mailyaga.shop</p>
                    </div>
                  </div>



                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4F46E5] to-[#6D5DFB] rounded-[32px] p-8 text-white">
                <h3 className="text-[18px] font-extrabold mb-3">Instant Help</h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-6 font-medium">
                  Looking for immediate answers? Check our detailed guides or FAQ section for step-by-step solutions.
                </p>
                <button
                  onClick={() => window.location.href = "/guides"}
                  className="w-full h-[48px] bg-white text-[#4F46E5] rounded-xl text-[14px] font-extrabold hover:shadow-lg transition-all"
                >
                  Visit Help Center
                </button>
              </div>
            </div>

            {/* Right Side: Detailed Form */}
            <div className="bg-white rounded-[32px] border border-[#EEF0FA] p-8 md:p-12 shadow-sm">
              <h2 className="text-[24px] font-extrabold text-[#0F1B3D] mb-8">Send Us a Detailed Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#5B6478] ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full h-[52px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-5 text-[14px] outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#5B6478] ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full h-[52px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-5 text-[14px] outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#5B6478] ml-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-[52px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-5 text-[14px] outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#5B6478] ml-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-[52px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-5 text-[14px] outline-none focus:border-[#4F46E5] transition-all appearance-none cursor-pointer"
                    >
                      <option>Login Problem</option>
                      <option>Sending/Receiving Issue</option>
                      <option>Storage/Full Mailbox</option>
                      <option>Security Concern</option>
                      <option>Other Email Issue</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#5B6478] ml-1">How can we help?</label>
                  <textarea
                    placeholder="Describe your email problem in detail..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl p-5 text-[14px] outline-none focus:border-[#4F46E5] transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="h-[56px] px-10 bg-[#4F46E5] text-white rounded-xl text-[15px] font-extrabold hover:bg-[#4338CA] shadow-xl shadow-indigo-100 transition-all flex items-center gap-3">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
            <div className="relative bg-white rounded-[32px] p-8 md:p-12 max-w-[500px] w-full text-center shadow-2xl animate-in zoom-in duration-300">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-[#5B6478]" />
              </button>

              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>

              <h4 className="text-[28px] font-extrabold text-[#0F1B3D] mb-4">Message Sent!</h4>
              <p className="text-[#5B6478] font-medium leading-7 mb-8">
                Thank you for reaching out. Your request has been received, and our support team will get back to you within 24 hours.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full h-[56px] bg-[#4F46E5] text-white rounded-xl text-[15px] font-extrabold hover:bg-[#4338CA] shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
