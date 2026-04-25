import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + href);
      }
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "All Issues", href: "#issues" },
    { label: "Solutions", href: "#solutions" },
    { label: "Guides", href: "/guides" },
    { label: "Contact Us", href: "/contact" }
  ];
  const popularIssues = [
    { label: "Can’t Send Emails", href: "#issues" },
    { label: "Login Problems", href: "#issues" },
    { label: "Sync Issues", href: "#issues" },
    { label: "Spam Problems", href: "#issues" },
    { label: "Storage Issues", href: "#issues" },
  ];
  const helpCenter = [
    { label: "FAQ", href: "#faq" },
    { label: "Email Settings", href: "#solutions" },
    { label: "Account Security", href: "#solutions" },
    { label: "Troubleshooting", href: "#solutions" },
    { label: "Guides", href: "/guides" },
  ];

  return (
    <footer className="bg-[#0E2347] text-white px-6 pt-12 pb-7 mt-5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <div className=" h-18 py-1 px-3 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <img src="/logo/logo.png" alt="Mail Yaga Logo" className="w-full h-full object-contain" />
              </div>
            </Link>

            <p className="text-[13px] leading-6 text-white/60 font-medium">
              Helping users understand and resolve email problems with simple
              and effective solutions.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" items={quickLinks} onLinkClick={handleLinkClick} />

          {/* Popular Issues */}
          <FooterColumn title="Popular Issues" items={popularIssues} onLinkClick={handleLinkClick} />

          {/* Help Center */}
          <FooterColumn title="Help Center" items={helpCenter} onLinkClick={handleLinkClick} />

          {/* Contact */}
          <div>
            <h5 className="text-[14px] font-extrabold mb-5">Contact Us</h5>

            <div className="space-y-3 text-[13px] text-white/60 font-medium leading-6">
              <p>Email: info@mailyaga.shop</p>

            </div>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center h-[42px] px-5 rounded-md bg-white text-[#4F46E5] text-[13px] font-extrabold hover:shadow-lg transition-all"
            >
              Get Help
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/45 font-medium">
          <p>© 2024 Mail Yaga. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  items,
  onLinkClick
}: {
  title: string;
  items: { label: string; href: string }[];
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  return (
    <div>
      <h5 className="text-[14px] font-extrabold mb-5">{title}</h5>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            {item.href.startsWith("#") ? (
              <a
                href={item.href}
                onClick={(e) => onLinkClick(e, item.href)}
                className="text-[13px] text-white/60 font-medium hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className="text-[13px] text-white/60 font-medium hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
