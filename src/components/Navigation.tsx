
import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#projets", label: "Projets" },
    { href: "#competences", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("#accueil")}
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors duration-200">
              <Code size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Zakaria
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-slate-50"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 animate-fade-in shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200 rounded-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
