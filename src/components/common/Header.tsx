import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`h-14 fixed w-full top-0 z-50  transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <img
            src="https://mlosrx4qi7ys.i.optimole.com/cb:kUnT.1c293/w:auto/h:auto/q:mauto/ig:avif/https://noblecitizenfoundation.org/wp-content/uploads/2024/04/cropped-ncf-new-icon.png"
            alt="NCF Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "text-primary-900"
                  : "text-gray-700 hover:text-primary-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="bg-primary-900 hover:bg-primary-800 text-white px-6 py-2 rounded-md font-semibold text-sm transition-colors duration-300"
          >
            Donate Now
          </Link>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] transition-transform duration-300 ease-in-out lg:hidden">
          {/* Close button inside the menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 z-[10000] text-gray-800"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    isActive(link.path) ? "text-primary-900" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/get-involved"
                className="bg-primary-900 hover:bg-primary-800 text-white text-center py-3 rounded-md font-semibold text-lg transition-colors mt-6"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
