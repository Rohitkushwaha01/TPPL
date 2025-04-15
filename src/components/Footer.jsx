import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Contact */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="text-2xl font-bold text-orange-500">Talegaonkar Profiles Pvt Ltd</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">Steel Fabrication and Manufacturing</p>
          <p className="text-sm text-gray-300">
            Gat No.79, Bhalekar Chowk, 80, Kadolkar Colony, Jyotiba Nagar, Talwade, Pune, Pimpri-Chinchwad, Maharashtra 412114
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Mail: <span className="text-orange-500">support@tpplpune.com</span>
          </p>
          <p className="text-sm font-bold mt-2">(002) 010612457410</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition">Our Services</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>©2025 Talegaonkar Profiles Pvt Ltd</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#terms" className="hover:text-orange-500 transition">Terms</Link>
          <Link to="#privacy" className="hover:text-orange-500 transition">Privacy</Link>
          <Link to="#sitemap" className="hover:text-orange-500 transition">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
