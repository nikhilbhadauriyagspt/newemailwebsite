import React from "react";
import {
  Search,
  Wifi,
  Settings,
  Download,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wand2,
} from "lucide-react";

const FixProcess: React.FC = () => {
  const steps = [
    {
      title: "Identify the Issue",
      text: "Check whether the problem is related to sending, receiving, login, sync, security, or settings.",
      icon: Search,
    },
    {
      title: "Check Connection & Device",
      text: "Ensure your internet is working and try another device or browser.",
      icon: Wifi,
    },
    {
      title: "Review Settings",
      text: "Check email server, sync, filters, forwarding rules, and account settings.",
      icon: Settings,
    },
    {
      title: "Update App/Browser",
      text: "Use the latest version for better performance and fewer errors.",
      icon: Download,
    },
    {
      title: "Secure Your Account",
      text: "Change password, verify recovery info, and review account activity.",
      icon: ShieldCheck,
    },
    {
      title: "Test Again",
      text: "Send a test email, refresh inbox, and confirm everything is fixed.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="solutions" className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 shadow-sm">

        {/* Heading */}
        <div className="text-center mb-9">
          <div className="mx-auto w-[58px] h-[58px] rounded-full bg-[#EAF3FF] flex items-center justify-center mb-4">
            <Wand2 className="w-7 h-7 text-[#2F80ED]" strokeWidth={2.3} />
          </div>
          <h3 className="text-[24px] md:text-[26px] font-extrabold text-[#0F1B3D] leading-tight">
            How to Fix Email Problems
          </h3>
          <p className="mt-2 text-[13px] text-[#5B6478] font-medium">
            Follow these simple steps to resolve most email issues easily.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number */}
                <div className="absolute -top-2 left-[30%] lg:left-5 w-6 h-6 rounded-full bg-[#4F46E5] text-white text-[11px] font-extrabold flex items-center justify-center z-20">
                  {i + 1}
                </div>

                {/* Icon Circle */}
                <div className="relative w-[76px] h-[76px] rounded-full bg-[#F0EEFF] flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-[#4F46E5]" strokeWidth={2.2} />
                </div>

                {/* Arrow Connector */}
                {i !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[36px] -right-[24px] items-center text-[#9B93FF]">
                    <span className="w-10 border-t-2 border-dotted border-[#B9B4FF]" />
                    <ArrowRight className="w-4 h-4 -ml-1" />
                  </div>
                )}

                <h5 className="text-[13px] font-extrabold text-[#0F1B3D] leading-snug mb-2">
                  {step.title}
                </h5>

                <p className="text-[12px] leading-5 text-[#5B6478] font-medium max-w-[150px]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FixProcess;
