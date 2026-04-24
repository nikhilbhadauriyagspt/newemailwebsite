import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, ShieldCheck } from "lucide-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const badges = [
    {
      icon: BookOpen,
      title: "Easy to Follow",
      text: "Step-by-step guides",
    },
    {
      icon: Users,
      title: "Works for Everyone",
      text: "For all email users",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      text: "Privacy-focused help",
    },
  ];

  const handleExploreSolutions = () => {
    const element = document.getElementById("issues");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewGuides = () => {
    navigate("/guides");
  };

  return (
    <section id="home" className="relative overflow-hidden h-screen flex items-center px-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner/banner-1.png')" }}
      />
      
      {/* Optional Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/10 z-0" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10 text-center lg:text-left">
        {/* Left Content */}
        <div className="relative pt-6 max-w-[700px] mx-auto lg:mx-0">
          <h2 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0F1B3D]">
            Email Issues?
            <br />
            <span className="text-[#4F46E5]">We Understand.</span>
            <br />
            We Help. You Stay Connected.
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#5B6478] max-w-[500px] font-medium mx-auto lg:mx-0">
            Find clear explanations and easy solutions for common email problems.
            Fix issues fast and keep your communication smooth and secure.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={handleExploreSolutions}
              className="h-[52px] px-9 rounded-xl bg-[#4F46E5] text-white text-[14px] font-extrabold shadow-lg shadow-indigo-200 hover:bg-[#4338CA] hover:-translate-y-0.5 transition-all"
            >
              Explore Solutions
            </button>
            <button 
              onClick={handleViewGuides}
              className="h-[52px] px-9 rounded-xl bg-white border-2 border-[#E7E9F5] text-[#0F1B3D] text-[14px] font-extrabold hover:bg-slate-50 hover:border-[#4F46E5] hover:-translate-y-0.5 transition-all"
            >
              View All Guides
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8">
            {badges.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#4F46E5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] font-extrabold text-[#0F1B3D] leading-none">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-[#5B6478] mt-1 font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
