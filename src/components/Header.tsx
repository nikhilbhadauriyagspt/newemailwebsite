import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("#") && !isHomePage) {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "All Issues", href: "#issues" },
    { label: "Solutions", href: "#solutions" },
    { label: "Guides", href: "/guides" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[#EEF0FA]">
      <div className="max-w-[1600px] mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className=" h-14  flex items-center justify-center">
            <img src="/logo/logo.png" alt="Mail Yaga Logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  handleNavClick(e as any, item.href);
                }
              }}
              className={`relative text-[14px] font-semibold transition-colors ${(item.href === "/" && isHomePage) || (item.href === location.pathname)
                ? "text-[#4F46E5]"
                : "text-[#0F1B3D] hover:text-[#4F46E5]"
                }`}
            >
              {item.label}

              {((item.href === "/" && isHomePage) || (item.href === location.pathname)) && (
                <span className="absolute -bottom-[24px] left-1/2 -translate-x-1/2 w-9 h-[3px] bg-[#4F46E5] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <Link
          to="/contact"
          className="hidden sm:flex items-center gap-2 bg-[#4F46E5] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold shadow-sm hover:bg-[#4338CA] transition-all"
        >
          <Headphones className="w-4 h-4" />
          Contact us
        </Link>
      </div>
    </header>
  );
};

export default Header;
