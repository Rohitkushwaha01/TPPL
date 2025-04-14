import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="w-full bg-gray-200 py-20 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row shadow-lg overflow-hidden rounded-lg">
        {/* Left Side - Orange Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-orange-500 text-white flex-1 p-10 relative"
        >
          <div className="absolute inset-0 bg-orange-600 opacity-70 z-0" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold">
              Precision Steel Fabrication & Laser Cutting Services
            </h3>
            <p className="text-white text-sm">
              With advanced laser cutting technology and a commitment to precision, we deliver top-quality steel fabrication services for a variety of industries. Our solutions meet the highest standards for durability and efficiency.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white flex-1 p-10"
        >
          <h3 className="text-2xl font-bold mb-4">Request A Quote</h3>
          <p className="text-gray-600 text-sm mb-8">
            Our steel fabrication and laser cutting services are designed to provide you with the highest level of accuracy and precision for your projects. We work closely with you to ensure your specifications are met with exacting standards.
          </p>

          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              <input key="name" type="text" placeholder="Name" className="border px-4 py-3 w-full" />,
              <input key="email" type="email" placeholder="Email" className="border px-4 py-3 w-full" />,
              <input key="phone" type="tel" placeholder="Phone" className="border px-4 py-3 w-full" />,
              <select key="service" className="border px-4 py-3 w-full">
                <option>Steel Fabrication</option>
                <option>Laser Cutting</option>
                <option>Welding Services</option>
                <option>Other</option>
              </select>,
              <textarea
                key="details"
                placeholder="Additional Details (Project Scope, Requirements, etc.)"
                className="border px-4 py-3 w-full md:col-span-2"
                rows={4}
              />,
              <div key="submit" className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 font-semibold"
                >
                  Submit Request
                </button>
              </div>
            ].map((field, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {field}
              </motion.div>
            ))}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
