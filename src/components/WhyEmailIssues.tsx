import React, { useState, useEffect } from "react";
import {
  Settings,
  Lock,
  Wifi,
  Database,
  RefreshCw,
  ShieldAlert,
  Trash2,
  Globe,
  ShieldCheck,
  UserCheck,
  FileWarning,
  ZapOff,
  AlertCircle,
} from "lucide-react";

const WhyEmailIssues: React.FC = () => {
  const reasons = [
    { title: "Incorrect Settings", icon: Settings, bg: "bg-[#F0EEFF]", color: "text-[#6D5DFB]" },
    { title: "Weak or Changed Password", icon: Lock, bg: "bg-[#FFF0F3]", color: "text-[#EF3F6B]" },
    { title: "Poor Internet Connection", icon: Wifi, bg: "bg-[#EAF3FF]", color: "text-[#2F80ED]" },
    { title: "Full Mailbox Storage", icon: Database, bg: "bg-[#FFF3E3]", color: "text-[#FF9F2D]" },
    { title: "Outdated App or Browser", icon: RefreshCw, bg: "bg-[#E9FBF6]", color: "text-[#19B98F]" },
    { title: "Security Filters", icon: ShieldAlert, bg: "bg-[#FFF0F6]", color: "text-[#FF4F8B]" },
    { title: "Browser Cache Issues", icon: Trash2, bg: "bg-[#F0EEFF]", color: "text-[#6D5DFB]" },
    { title: "ISP Blocked Ports", icon: Globe, bg: "bg-[#EAF3FF]", color: "text-[#2F80ED]" },
    { title: "Firewall Interference", icon: ShieldCheck, bg: "bg-[#EAFBF2]", color: "text-[#20B26B]" },
    { title: "Account Recovery", icon: UserCheck, bg: "bg-[#FFF3E3]", color: "text-[#FF9F2D]" },
    { title: "Large Attachments", icon: FileWarning, bg: "bg-[#FFF0F3]", color: "text-[#EF3F6B]" },
    { title: "VPN Connection", icon: ZapOff, bg: "bg-[#E9FBF6]", color: "text-[#19B98F]" },
  ];

  const extendedReasons = [...reasons, ...reasons];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === reasons.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else if (currentIndex !== 0 && !isTransitioning) {
      setIsTransitioning(true);
    }
  }, [currentIndex, reasons.length, isTransitioning]);

  return (
    <section className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-center">

          {/* Left Text with Icon */}
          <div className="relative">
            <div className="w-[52px] h-[52px] rounded-full bg-[#FFF0F6] flex items-center justify-center mb-5">
              <AlertCircle className="w-6 h-6 text-[#FF4F8B]" strokeWidth={2.3} />
            </div>
            <h3 className="text-[24px] md:text-[26px] font-extrabold text-[#0F1B3D] leading-tight">
              Why Email Issues Happen
            </h3>
            <p className="mt-3 text-[13px] leading-6 text-[#5B6478] font-medium">
              Understanding the reason behind an issue is the first step to fixing it. Our insights help you stay one step ahead.
            </p>
          </div>

          {/* Right Slider Container */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
            >
              {extendedReasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div key={i} className="min-w-[50%] md:min-w-[33.333%] lg:min-w-[16.666%] px-2">
                    <div className="text-center flex flex-col items-center gap-3 py-2 transition-all hover:scale-105">
                      <div className={`w-[58px] h-[58px] rounded-full ${reason.bg} flex items-center justify-center shadow-sm`}>
                        <Icon className={`w-7 h-7 ${reason.color}`} strokeWidth={2.3} />
                      </div>
                      <h4 className="text-[12px] font-extrabold text-[#0F1B3D] leading-snug">
                        {reason.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyEmailIssues;
