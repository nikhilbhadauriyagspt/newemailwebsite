import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Send,
  Lock,
  Smartphone,
  ShieldCheck,
  Paperclip,
  Archive,
  BookOpen,
} from "lucide-react";

const IssueGuides: React.FC = () => {
  const guides = [
    {
      id: "sending-receiving",
      title: "Sending & Receiving Issues",
      text: "Fix problems related to sending failures, delivery delays, and outbox issues.",
      icon: Send,
    },
    {
      id: "login-password",
      title: "Login & Password Issues",
      text: "Resolve login errors, password issues, account locks, and verification problems.",
      icon: Lock,
    },
    {
      id: "sync-device",
      title: "Sync & Device Issues",
      text: "Fix email not syncing across devices, apps, or browsers.",
      icon: Smartphone,
    },
    {
      id: "security-privacy",
      title: "Security & Privacy Issues",
      text: "Handle security alerts, blocked access, suspicious activity, and recovery problems.",
      icon: ShieldCheck,
    },
    {
      id: "attachment-file",
      title: "Attachment & File Issues",
      text: "Solve attachment not opening, sending, file size, or format errors.",
      icon: Paperclip,
    },
    {
      id: "inbox-storage",
      title: "Inbox & Storage Issues",
      text: "Manage full mailbox, missing emails, folder issues, and storage limits.",
      icon: Archive,
    },
  ];

  return (
    <section id="guides" className="px-6 py-5 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 shadow-sm">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-[58px] h-[58px] rounded-full bg-[#EAF3FF] flex items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-[#2F80ED]" strokeWidth={2.3} />
          </div>
          <h3 className="text-[24px] md:text-[26px] font-extrabold text-[#0F1B3D] leading-tight">
            Detailed Issue Guides
          </h3>
          <p className="mt-2 text-[13px] text-[#5B6478] font-medium max-w-[600px]">
            Learn more about each issue and how to fix it. Our guides provide detailed walkthroughs for all major email platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {guides.map((guide, i) => {
            const Icon = guide.icon;

            return (
              <div
                key={i}
                className="rounded-xl border border-[#E7E9F5] bg-white p-5 min-h-[265px] flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="h-[95px] rounded-xl bg-[#F1F3FF] flex items-center justify-center mb-5 overflow-hidden">
                  <div className="w-[64px] h-[64px] rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Icon className="w-8 h-8 text-[#5B55F6]" strokeWidth={2.1} />
                  </div>
                </div>

                <h4 className="text-[14px] font-extrabold text-[#0F1B3D] leading-snug mb-3">
                  {guide.title}
                </h4>

                <p className="text-[12px] leading-5 text-[#5B6478] font-medium flex-1">
                  {guide.text}
                </p>

                <Link 
                  to={`/guides/${guide.id}`}
                  className="mt-5 text-[#4F46E5] font-extrabold text-[12px] flex items-center gap-1 group/btn"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IssueGuides;
