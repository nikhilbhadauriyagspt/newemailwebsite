import React, { useState } from "react";
import { ArrowRight, MailCheck, CheckCircle2, X } from "lucide-react";

const FinalCTA: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setShowPopup(true);
      // Reset form after submission
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto rounded-[18px] overflow-hidden bg-gradient-to-br from-[#4F46E5] via-[#5B55F6] to-[#6D5DFB] px-6 md:px-10 py-9 md:py-10 relative shadow-sm">

        <div className="relative z-10 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="w-[58px] h-[58px] rounded-full bg-white/15 flex items-center justify-center mb-5">
              <MailCheck className="w-7 h-7 text-white" strokeWidth={2.3} />
            </div>

            <h3 className="text-[28px] md:text-[36px] font-extrabold text-white leading-tight max-w-[560px]">
              Still Need Help With Your Email Issue?
            </h3>

            <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-white/80 font-medium max-w-[520px]">
              We’re here to help you understand the issue and get your email
              working again.
            </p>

            <button 
              onClick={() => document.getElementById('issues')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-7 h-[46px] px-7 rounded-md bg-white text-[#4F46E5] text-[14px] font-extrabold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Form */}
          <div className="relative z-10">
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-2xl">
              <h4 className="text-[20px] font-extrabold text-[#0F1B3D] mb-6">
                Send us a message
              </h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#5B6478] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full h-[48px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-4 text-[13px] outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#5B6478] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full h-[48px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-4 text-[13px] outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#5B6478] ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-[48px] bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl px-4 text-[13px] outline-none focus:border-[#4F46E5] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#5B6478] ml-1">Describe your issue</label>
                  <textarea 
                    placeholder="I am having trouble with..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="w-full bg-[#F7F8FF] border border-[#E7E9F5] rounded-xl p-4 text-[13px] outline-none focus:border-[#4F46E5] transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full h-[50px] bg-[#4F46E5] text-white rounded-xl text-[14px] font-extrabold hover:bg-[#4338CA] shadow-lg shadow-indigo-100 transition-all mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Soft Shapes */}
        <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
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
    </section>
  );
};

export default FinalCTA;
