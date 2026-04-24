import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  ListChecks,
  LockKeyhole,
  Smile,
  MailCheck,
  RefreshCw,
} from "lucide-react";

const TrustedGuidance: React.FC = () => {
  const features = [
    {
      title: "No Brand Confusion",
      text: "We provide solutions without any brand bias.",
      icon: ShieldCheck,
      bg: "bg-[#F0EEFF]",
      color: "text-[#6D5DFB]",
    },
    {
      title: "Step-by-Step Help",
      text: "Easy guides with simple instructions.",
      icon: ListChecks,
      bg: "bg-[#EAF3FF]",
      color: "text-[#2F80ED]",
    },
    {
      title: "Privacy Focused",
      text: "Your data and privacy are always important.",
      icon: LockKeyhole,
      bg: "bg-[#E9FBF6]",
      color: "text-[#19B98F]",
    },
    {
      title: "Beginner Friendly",
      text: "Designed for all users, even non-technical.",
      icon: Smile,
      bg: "bg-[#FFF3E3]",
      color: "text-[#FF9F2D]",
    },
    {
      title: "Covers All Issues",
      text: "Solutions for common email problems.",
      icon: MailCheck,
      bg: "bg-[#FFF0F6]",
      color: "text-[#FF4F8B]",
    },
    {
      title: "Always Updated",
      text: "Guides updated regularly for accuracy.",
      icon: RefreshCw,
      bg: "bg-[#EAFBF2]",
      color: "text-[#20B26B]",
    },
  ];

  return (
    <section className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 shadow-sm">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="mx-auto w-[58px] h-[58px] rounded-full bg-[#F0EEFF] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-7 h-7 text-[#6D5DFB]" strokeWidth={2.3} />
          </div>

          <h3 className="text-[24px] md:text-[26px] font-extrabold text-[#0F1B3D] leading-tight">
            Safe, Simple & Trusted Guidance
          </h3>

          <p className="mt-2 text-[13px] text-[#5B6478] font-medium">
            Clear email help designed for everyday users.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="rounded-xl border border-[#E7E9F5] bg-white p-5 min-h-[180px] text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full ${feature.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} strokeWidth={2.3} />
                </div>

                <h4 className="text-[13px] font-extrabold text-[#0F1B3D] leading-snug mb-2">
                  {feature.title}
                </h4>

                <p className="text-[12px] leading-5 text-[#5B6478] font-medium">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustedGuidance;