import { motion } from "framer-motion";
import { FaIndustry, FaUsers, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import Footer from "../components/Footer";

const features = [
  {
    icon: <FaIndustry />,
    title: "Advanced Infrastructure",
    description: "35,000 sq. ft. facility with EOT cranes and modern machinery."
  },
  {
    icon: <MdPrecisionManufacturing />,
    title: "Precision Manufacturing",
    description: "High-quality steel products with ISO 9001:2015 certification."
  },
  {
    icon: <FaUsers />,
    title: "Skilled Workforce",
    description: "100+ trained professionals working with precision and dedication."
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Commitment",
    description: "Strict quality checks to ensure international standards."
  },
  {
    icon: <FaShippingFast />,
    title: "Reliable Delivery",
    description: "Pan-India logistics network with timely project execution."
  },
  {
    icon: <FaIndustry />,
    title: "Versatile Services",
    description: "From CNC Bending to Laser Cutting — all under one roof."
  }
];

const management = [
  {
    name: "Mr. Mahendra Balwant Talegaonkar",
    role: "Managing Director",
    description: "19+ years of entrepreneurial experience in steel trading and manufacturing."
  },
  {
    name: "Mr. Vinayak Madhukar Korde",
    role: "Director - Operations",
    description: "Mechanical Engineer with 19+ years in fabrication and machining industry."
  },
  {
    name: "Mrs. Ashwini Mahendra Talegaonkar",
    role: "Director - Administration & HR",
    description: "4+ years of experience managing company HR and administration."
  }
];

const certifications = [
  "ISO 9001:2015 Quality Certification",
  "In-house quality assurance procedures",
  "Consistent compliance with industry norms"
];

const clients = [
  "Kirloskar Brothers Ltd.",
  "Atlas Copco (India) Ltd.",
  "TATA Toyo Radiators Ltd.",
  "Emerson Climate Technologies",
  "Blue Star",
  "Hyosung",
  "Rane Group",
  "Sanden Vikas",
  "Sterling and Wilson",
  "Trane Technologies",
  "Jain Irrigation",
  "Mahindra",
  "JCB"
];

const whyChooseUs = [
  "Decades of industry experience",
  "Comprehensive service range from one source",
  "Customer-centric approach",
  "End-to-end quality control",
  "Modern infrastructure and equipment",
  "Skilled and experienced workforce",
  "Proven track record with reputed clients"
];

export default function About() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto my-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-900 mb-10"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-lg max-w-3xl mx-auto mb-10"
          >
            Talegaonkar Profiles Private Limited (TPPL), established in 1997 in Pune, is a leading manufacturer of Colour Coated Roofing Sheets, Steel Purlins, Fabricated Metal Parts, and more. With modern infrastructure and a customer-first approach, we provide high-quality products and precision services across India.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-blue-700 text-4xl mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-blue-900 text-center mb-6"
            >
              Our Leadership
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {management.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl"
                >
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">{person.name}</h4>
                  <p className="text-sm text-gray-700 italic mb-2">{person.role}</p>
                  <p className="text-sm text-gray-600">{person.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications as Cards */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-blue-900 text-center mb-6"
            >
              Certifications
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white w-72 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="text-blue-700 text-xl p-4 font-bold">
                    {cert}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Clients */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Trusted By</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
              {clients.map((client, i) => (
                <div key={i} className="bg-white p-4 rounded shadow text-center hover:bg-blue-50">
                  {client}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}