import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Send,
  Lock,
  Smartphone,
  ShieldCheck,
  Paperclip,
  Archive,
  BookOpen,
  CheckCircle2
} from "lucide-react";

const GuidesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guides = [
    {
      id: "sending",
      title: "Sending & Receiving Issues",
      icon: Send,
      color: "text-violet-600",
      bg: "bg-violet-50",
      details: [
        "Check your internet connection and SMTP settings.",
        "Verify if the recipient's email address is correct.",
        "Check if your email server is temporarily down.",
        "Ensure your outgoing mail port (usually 465 or 587) is not blocked."
      ]
    },
    {
      id: "login",
      title: "Login & Password Issues",
      icon: Lock,
      color: "text-blue-600",
      bg: "bg-blue-50",
      details: [
        "Reset your password using the recovery email or phone number.",
        "Clear your browser cookies and cache.",
        "Disable any VPN or Proxy that might be blocking access.",
        "Check if Two-Factor Authentication (2FA) is causing a loop."
      ]
    },
    {
      id: "sync",
      title: "Sync & Device Issues",
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      details: [
        "Re-add your email account on your mobile device.",
        "Ensure IMAP is enabled in your email settings.",
        "Check for app updates in the App Store or Play Store.",
        "Verify background data usage is enabled for the email app."
      ]
    },
    {
      id: "security",
      title: "Security & Privacy Issues",
      icon: ShieldCheck,
      color: "text-amber-600",
      bg: "bg-amber-50",
      details: [
        "Review recent login activity for suspicious devices.",
        "Enable Multi-Factor Authentication for maximum security.",
        "Scan your computer for malware or keyloggers.",
        "Update your recovery information (phone and secondary email)."
      ]
    },
    {
      id: "attachment",
      title: "Attachment & File Issues",
      icon: Paperclip,
      color: "text-pink-600",
      bg: "bg-pink-50",
      details: [
        "Check if the file size exceeds the limit (usually 25MB).",
        "Compress large files into a ZIP folder before sending.",
        "Verify if the file format is supported by the recipient's server.",
        "Try using a different browser to upload the attachment."
      ]
    },
    {
      id: "storage",
      title: "Inbox & Storage Issues",
      icon: Archive,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      details: [
        "Delete large emails with heavy attachments.",
        "Empty your Trash and Spam folders regularly.",
        "Archive old emails to free up space in your primary inbox.",
        "Check if you need to upgrade your storage plan."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header />

      <main className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-[#4F46E5]" />
            </div>
            <h1 className="text-[40px] font-extrabold text-[#0F1B3D] mb-4">Complete Email Guides</h1>
            <p className="text-[16px] text-[#5B6478] max-w-[700px] mx-auto font-medium">
              Comprehensive step-by-step instructions to help you resolve any email problem. Choose a category below to dive deep into the solution.
            </p>
          </div>

          {/* Detailed Guides List */}
          <div className="grid gap-12">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div key={guide.id} className="bg-white rounded-[32px] border border-[#EEF0FA] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
                    {/* Left Info */}
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-2xl ${guide.bg} flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${guide.color}`} />
                      </div>
                      <h2 className="text-[28px] font-extrabold text-[#0F1B3D] leading-tight">{guide.title}</h2>
                      <p className="text-[#5B6478] font-medium leading-relaxed text-[15px]">
                        Everything you need to know about fixing {guide.title.toLowerCase()} for any email provider.
                      </p>

                    </div>

                    {/* Right Steps */}
                    <div className="bg-[#FAFBFF] rounded-[24px] p-8 space-y-6">
                      <h3 className="text-[18px] font-extrabold text-[#0F1B3D]">Key Troubleshooting Steps:</h3>
                      <div className="grid gap-4">
                        {guide.details.map((detail, dIndex) => (
                          <div key={dIndex} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[#EEF0FA]">
                            <div className="mt-1">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            </div>
                            <p className="text-[14px] text-[#0F1B3D] font-medium leading-6">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesPage;
