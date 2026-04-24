import { 
  Send, 
  Lock, 
  Smartphone, 
  ShieldCheck, 
  Paperclip, 
  Archive 
} from "lucide-react";

export const guidesData = {
  "sending-receiving": {
    title: "Sending & Receiving Issues",
    icon: Send,
    color: "text-violet-600",
    bg: "bg-violet-50",
    description: "Troubleshoot why your emails aren't reaching their destination or why your inbox is quiet.",
    sections: [
      {
        heading: "Common Causes",
        content: "Most sending failures happen due to incorrect SMTP settings, while receiving issues are often linked to IMAP/POP3 configuration or server downtime."
      },
      {
        heading: "Step-by-Step Solutions",
        steps: [
          "Verify your internet connection and ensure you're not in 'Work Offline' mode.",
          "Check the Outbox folder for stuck messages and delete them.",
          "Confirm your SMTP server address (e.g., smtp.mailserver.com) and port (465 or 587).",
          "Ensure SSL/TLS encryption is enabled in your account settings.",
          "Check if the recipient's email address has any typos."
        ]
      },
      {
        heading: "Receiving Checklist",
        steps: [
          "Check your Spam or Junk folder for missing emails.",
          "Verify that you haven't exceeded your storage limit.",
          "Check for any active 'Filter' or 'Forwarding' rules that might be redirecting mail.",
          "Ensure your incoming server settings (IMAP/POP) are correct."
        ]
      }
    ]
  },
  "login-password": {
    title: "Login & Password Issues",
    icon: Lock,
    color: "text-blue-600",
    bg: "bg-blue-50",
    description: "Resolve password resets, account locks, and two-factor authentication loops.",
    sections: [
      {
        heading: "Immediate Fixes",
        steps: [
          "Double-check your Caps Lock key and ensure your keyboard language is correct.",
          "Clear your browser cache and cookies completely.",
          "Try logging in using an 'Incognito' or 'Private' window.",
          "Disable browser extensions that might interfere with login scripts."
        ]
      },
      {
        heading: "Password Recovery",
        content: "If you've forgotten your password, use the 'Forgot Password' link. Ensure you have access to your recovery phone number or secondary email address."
      },
      {
        heading: "2FA & Security Codes",
        steps: [
          "If not receiving the SMS code, wait 5 minutes before requesting again.",
          "Check if you have any backup codes saved from your initial setup.",
          "Ensure your device time is set to 'Automatic' to avoid sync issues with Authenticator apps."
        ]
      }
    ]
  },
  "sync-device": {
    title: "Sync & Device Issues",
    icon: Smartphone,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    description: "Get your email working perfectly across your phone, tablet, and computer.",
    sections: [
      {
        heading: "Mobile Sync Issues",
        steps: [
          "Go to your phone settings and ensure 'Auto-Sync Data' is turned on.",
          "Remove the email account from the app and add it again from scratch.",
          "Ensure you are using the official app for your email provider.",
          "Check if 'Low Power Mode' is restricting background data sync."
        ]
      },
      {
        heading: "Server Settings",
        content: "Always prefer IMAP over POP3 for multi-device sync. IMAP keeps your folders and 'Read' status consistent everywhere."
      }
    ]
  },
  "security-privacy": {
    title: "Security & Privacy Issues",
    icon: ShieldCheck,
    color: "text-amber-600",
    bg: "bg-amber-50",
    description: "Protect your account from hackers and manage your privacy settings.",
    sections: [
      {
        heading: "Signs of Compromise",
        steps: [
          "Unknown messages in your 'Sent' folder.",
          "Security alerts about logins from unrecognized locations.",
          "Changes to your signature or recovery information that you didn't make."
        ]
      },
      {
        heading: "Hardening Your Account",
        steps: [
          "Update to a strong, unique password (12+ characters, mixed symbols).",
          "Enable App Passwords for older third-party applications.",
          "Review 'Third-party apps with account access' and remove anything suspicious."
        ]
      }
    ]
  },
  "attachment-file": {
    title: "Attachment & File Issues",
    icon: Paperclip,
    color: "text-pink-600",
    bg: "bg-pink-50",
    description: "Troubleshoot problems with uploading, downloading, or opening attachments.",
    sections: [
      {
        heading: "Upload Failures",
        steps: [
          "Check if the file is larger than 25MB (common limit).",
          "Try renaming the file to remove special characters.",
          "Check if the file type (.exe, .bat, etc.) is blocked for security."
        ]
      },
      {
        heading: "Solutions for Large Files",
        content: "Use cloud storage links (like Google Drive, OneDrive, or Dropbox) to share files that exceed attachment limits."
      }
    ]
  },
  "inbox-storage": {
    title: "Inbox & Storage Issues",
    icon: Archive,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    description: "Manage a full mailbox and organize your emails effectively.",
    sections: [
      {
        heading: "Cleaning Your Inbox",
        steps: [
          "Sort by 'Size' to find and delete the largest emails.",
          "Search for 'Unsubscribe' to find and remove newsletters.",
          "Empty your 'Trash' and 'Spam' folders (they still count toward storage)."
        ]
      },
      {
        heading: "Long-term Management",
        steps: [
          "Set up 'Auto-Archive' rules for older emails.",
          "Use 'Folders' or 'Labels' to keep important mail away from the primary inbox.",
          "Download and save important attachments locally, then delete the email."
        ]
      }
    ]
  }
};
