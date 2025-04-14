import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full absolute z-20 text-white">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-3xl font-bold">
          <span>🔧</span> TPPL
        </div>

        {/* Desktop Menu */}
        <nav className="hidden text-xl lg:flex gap-6">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
          <a href="#testimonials" className="hover:text-orange-500">Testimonials</a>
        </nav>

        {/* Contact Info + CTA */}
        <div className="hidden lg:flex gap-4 items-center">
          <span>📞 +91 98900 56943</span>
          <button className="bg-orange-500 px-4 py-2 rounded text-white font-bold">
            Request A Quote →
          </button>
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
        <div className="lg:hidden bg-black bg-opacity-90 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
            <a href="#testimonials" className="hover:text-orange-500">Testimonials</a>
            <span className="mt-2 text-sm text-gray-300">📞 +91 98900 56943</span>
            <button className="bg-orange-500 px-4 py-2 rounded text-white font-bold w-fit">
              Request A Quote →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
