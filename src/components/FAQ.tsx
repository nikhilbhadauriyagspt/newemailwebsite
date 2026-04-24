import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why am I not receiving emails?",
      a: "It may happen due to storage limits, spam filters, sync issues, blocked senders, or incorrect settings.",
    },
    {
      q: "Why are my emails going to spam?",
      a: "Filters, sender reputation, mailbox rules, or message content can move emails to spam.",
    },
    {
      q: "Why can’t I log in to my email?",
      a: "Password changes, account locks, verification issues, or suspicious activity alerts can cause login problems.",
    },
    {
      q: "Why are attachments not opening?",
      a: "The file may be too large, unsupported, blocked, or your browser or app may need updating.",
    },
    {
      q: "Why is email loading slow?",
      a: "Large inbox size, slow internet, outdated apps, or too many browser extensions can cause slow loading.",
    },
    {
      q: "How can I secure my email account?",
      a: "Use a strong password, update recovery details, review login activity, and avoid suspicious links.",
    },
  ];

  return (
    <section id="faq" className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 shadow-sm">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">

          {/* Left Heading */}
          <div>
            <div className="w-[58px] h-[58px] rounded-full bg-[#F0EEFF] flex items-center justify-center mb-5">
              <HelpCircle className="w-7 h-7 text-[#6D5DFB]" strokeWidth={2.3} />
            </div>

            <h3 className="text-[24px] md:text-[26px] font-extrabold text-[#0F1B3D] leading-tight">
              Frequently Asked Questions
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-[#5B6478] font-medium max-w-[280px]">
              Quick answers to common email issues, account problems, and setup questions.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isActive = activeFaq === i;

              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all overflow-hidden ${isActive
                    ? "border-[#DADDF8] bg-[#FAFBFF] shadow-sm"
                    : "border-[#E7E9F5] bg-white"
                    }`}
                >
                  <button
                    onClick={() => setActiveFaq(isActive ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[14px] font-extrabold text-[#0F1B3D] leading-snug">
                      {faq.q}
                    </span>

                    <span
                      className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all ${isActive
                        ? "bg-[#4F46E5] text-white"
                        : "bg-[#F0EEFF] text-[#4F46E5]"
                        }`}
                    >
                      {isActive ? (
                        <Minus className="w-4 h-4" strokeWidth={2.4} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>

                  {isActive && (
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-[13px] leading-6 text-[#5B6478] font-medium">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;