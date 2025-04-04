import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for Mobile Menu
import indianlogo from "../assets/indianlogo.png";

export default function Navbar(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto h-full">
        <nav className="flex items-center justify-between py-4 h-full" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          {/* Left Side: Logo & Brand Name */}
          <div className="flex items-center gap-2 group">
        <Link to={"/"}>    <div className="relative">
              {/* Hover Gradient Border Effect */}
              <div
                className="absolute inset-x-[-12px] top-[-12px] h-16 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                  filter: "blur(8px)",
                }}
              ></div>
              {/* Logo */}
              <img src={indianlogo} alt="Logo" className="h-10 w-10 relative z-10" />
            </div>
            </Link>
            <div className="flex flex-col">
              <h1
                className="text-xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IndianDeveloper
              </h1>
              <span className="text-xs text-[#95A1B7]">Unlimited Tools Power</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/tools">Tools</NavLink>
            <NavLink to="/pricing">Price</NavLink>
            <NavLink to="/documentation">Documentation</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            {/* Login or Profile Button */}
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" className="text-gray-300 border-white">
                  User Profile
                </Button>
              </Link>
            ) : (
              <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
                style={{
                  background: isHovered
                    ? "linear-gradient(90deg, #a770ef 0%, #cf8bf3 50%, #fdb99b 100%)"
                    : "linear-gradient(90deg, #7f00ff 0%, #e100ff 100%)",
                  minWidth: "100px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-800 p-4 rounded-md">
            <NavLink to="/tools" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </NavLink>
            <NavLink to="/models" onClick={() => setIsMenuOpen(false)}>
              Models
            </NavLink>
            <NavLink to="/documentation" onClick={() => setIsMenuOpen(false)}>
              Documentation
            </NavLink>
            <NavLink to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              Content Hub
            </NavLink>

            {/* Mobile Login Button */}
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" className="text-gray-300 border-white mt-2">
                  User Profile
                </Button>
              </Link>
            ) : (
              <Button
                className="text-white font-semibold px-6 py-3 rounded-lg mt-2 transition-all duration-300 shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg, #7f00ff 0%, #e100ff 100%)",
                  minWidth: "100px",
                }}
              >
                Login
              </Button>
            )}
          </div>
        )}
      </div>
      <div>
        <hr />
      </div>
    </header>
  );
}

// Reusable NavLink Component
type NavLinkProps = {
  to: string;
  children: string;
  onClick?: () => void;
};

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-300 font-serif hover:text-blue-600 transition-all text-lg"
  >
    {children}
  </Link>
);
