import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use React Router's Link
import Logo from "../assets/logo.png"; // Adjust the path to your logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 bg-white z-50 shadow-md text-black">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
          <span className="flex items-center space-x-2">
          <img src={Logo} alt="TPPL Logo" className="w-[80px] h-[55px] object-contain" />
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden text-xl lg:flex gap-6">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/services" className="hover:text-orange-500">Services</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
          <Link to="/testimonials" className="hover:text-orange-500">Testimonials</Link>
        </nav>

        {/* Contact Info + CTA */}
        <div className="hidden lg:flex gap-4 items-center">
          <span>📞 +91-8047631402</span>
          <Link
            to="/quote"
            className="bg-orange-500 px-4 py-2 rounded text-white font-bold"
          >
            Request A Quote →
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white bg-opacity-90 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-lg">
            <Link to="/" onClick={toggleMenu} className="hover:text-orange-500">Home</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-orange-500">Services</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-orange-500">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-500">Contact</Link>
            <Link to="/testimonials" onClick={toggleMenu} className="hover:text-orange-500">Testimonials</Link>
            <span className="mt-2 text-sm text-gray-300">📞+91-8047631402</span>
            <Link
              to="/quote"
              onClick={toggleMenu}
              className="bg-orange-500 px-4 py-2 rounded text-white font-bold w-fit"
            >
              Request A Quote →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
