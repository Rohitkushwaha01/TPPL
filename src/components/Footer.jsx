export default function Footer() {
    return (
      <footer className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="text-2xl font-bold">Talegoakar Profil Pvt Ltd</h2>
            </div>
            <p className="text-sm text-gray-400">Steel Fabrication and Manufacturing</p>
            <p className="mt-4 text-sm text-gray-300">
            Gat No.79, Bhalekar Chowk, 80, Kadolkar Colony, Jyotiba Nagar, Talwade, Pune, Pimpri-Chinchwad, Maharashtra 412114
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Mail: <span className="text-orange-500">support@tpplpune.com</span>
            </p>
            <p className="text-sm font-bold mt-2">(002) 010612457410</p>
          </div>
  
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Leadership</li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Industrial Design</li>
              <li>Engineering</li>
              <li>Manufacturing</li>
            </ul>
          </div>
  
          {/* Testimonials */}
          <div>
            <h3 className="font-bold mb-4">Testimonials</h3>
            <p className="text-sm text-gray-300 mb-4">
              “The team is extremely professional and dedicated. Great results and quality!” 
            </p>
            <p className="text-sm text-gray-400">— A Satisfied Client</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>©2025 TPPL</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500">Terms</a>
            <a href="#" className="hover:text-orange-500">Privacy</a>
            <a href="#" className="hover:text-orange-500">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  }
  