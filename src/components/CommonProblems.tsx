import React from "react";
import {
  Send,
  Inbox,
  Lock,
  RefreshCw,
  Shield,
  Paperclip,
  Database,
  ArrowRight,
  ShieldAlert,
  ServerOff,
  UserX,
} from "lucide-react";

const CommonProblems: React.FC = () => {
  const problems = [
    {
      title: "Can’t Send Emails",
      desc: "Emails stuck in outbox, sending failed, or message not delivered.",
      icon: Send,
      iconColor: "text-[#6D5DFB]",
      bg: "bg-[#F0EEFF]",
    },
    {
      title: "Can’t Receive Emails",
      desc: "Inbox not updating, new emails missing, or delivery delay.",
      icon: Inbox,
      iconColor: "text-[#2F80ED]",
      bg: "bg-[#EAF3FF]",
    },
    {
      title: "Login Problems",
      desc: "Wrong password, account locked, or sign-in loop.",
      icon: Lock,
      iconColor: "text-[#20B26B]",
      bg: "bg-[#EAFBF2]",
    },
    {
      title: "Email Not Syncing",
      desc: "Emails not updating across devices or apps.",
      icon: RefreshCw,
      iconColor: "text-[#FF9F2D]",
      bg: "bg-[#FFF3E3]",
    },
    {
      title: "Spam & Junk Issues",
      desc: "Important emails going to junk or too many spam messages.",
      icon: Shield,
      iconColor: "text-[#19B98F]",
      bg: "bg-[#E9FBF6]",
    },
    {
      title: "Attachment Issues",
      desc: "Files not uploading, downloading, opening, or sending.",
      icon: Paperclip,
      iconColor: "text-[#FF4F8B]",
      bg: "bg-[#FFF0F6]",
    },
    {
      title: "Storage Full",
      desc: "Mailbox full, unable to receive new emails.",
      icon: Database,
      iconColor: "text-[#FF9F2D]",
      bg: "bg-[#FFF3E3]",
    },
    {
      title: "Account Blocked",
      desc: "Your account is temporarily disabled or blocked for security.",
      icon: UserX,
      iconColor: "text-[#EF3F6B]",
      bg: "bg-[#FFF0F3]",
    },
    {
      title: "Server Down",
      desc: "The email server is not responding or currently unavailable.",
      icon: ServerOff,
      iconColor: "text-[#6D5DFB]",
      bg: "bg-[#F0EEFF]",
    },
    {
      title: "Phishing Alerts",
      desc: "Warning about suspicious links or fraudulent emails.",
      icon: ShieldAlert,
      iconColor: "text-[#FF4F8B]",
      bg: "bg-[#FFF0F6]",
    },
  ];

  return (
    <section id="issues" className="px-6 py-8 bg-[#FAFBFF]">
      <div className="max-w-[1600px] mx-auto bg-white border border-[#EEF0FA] rounded-[18px] px-6 md:px-8 py-8 md:py-10 shadow-sm">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="mx-auto w-[58px] h-[58px] rounded-full bg-[#F0EEFF] flex items-center justify-center mb-4">
            <Send className="w-7 h-7 text-[#6D5DFB]" strokeWidth={2.3} />
          </div>
          <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#0F1B3D] leading-tight">
            Common Email Problems
          </h3>
          <div className="w-20 h-1 bg-[#4F46E5] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[14px] text-[#5B6478] font-medium max-w-[600px] mx-auto">
            Explore issues by category and find the right solution for you. We cover everything from connection errors to security concerns.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {problems.map((problem, i) => {
            const Icon = problem.icon;

            return (
              <div
                key={i}
                className="min-h-[210px] rounded-xl border border-[#E7E9F5] bg-white px-4 py-6 text-center flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full ${problem.bg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${problem.iconColor}`} strokeWidth={2.3} />
                </div>

                <h4 className="text-[14px] font-extrabold text-[#0F1B3D] leading-snug mb-3">
                  {problem.title}
                </h4>

                <p className="text-[12px] leading-5 text-[#5B6478] font-medium">
                  {problem.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;