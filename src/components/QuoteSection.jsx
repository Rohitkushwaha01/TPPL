import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function QuoteSection() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
  
    // Collect form data
    const formData = new FormData(form.current);
    const customerEmail = formData.get("user_email");
    const customerName = formData.get("user_name");
    const customerPhone = formData.get("user_phone");
    const serviceType = formData.get("user_service");
    const message = formData.get("message");
  
    // Pass the form data dynamically to the emailjs.sendForm method
    emailjs.sendForm(
      'service_1dwe1ld', // Your service ID
      'template_jt59ds9', // Your template ID
      form.current,  // Form data reference
      'KU544GpjxCgm-uy_Z' // Your user ID
    )
      .then((result) => {
        // Provide feedback to user
        setSuccessMessage("Quote submitted successfully!");
        setErrorMessage('');
      }, (error) => {
        setErrorMessage("There was an error, please try again.");
        setSuccessMessage('');
      });
  
    // Reset form fields (if desired)
    form.current.reset();
  };
  

  return (
    <section id="quote" className="w-full bg-gray-200 py-20 px-4 md:px-12 lg:px-24">
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
            <h3 className="text-2xl font-bold">Precision Steel Fabrication & Laser Cutting Services</h3>
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

          {/* Success/Error Messages */}
          {successMessage && (
            <div className="text-green-500 font-semibold mb-4">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 font-semibold mb-4">{errorMessage}</div>
          )}

          <motion.form
            ref={form}
            onSubmit={sendEmail}  // Bind form submission to sendEmail function
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
              <motion.input
                name="user_name"
                type="text"
                placeholder="Name"
                className="border px-4 py-3 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              />,
              <motion.input
                name="user_email"
                type="email"
                placeholder="Email"
                className="border px-4 py-3 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              />,
              <motion.input
                name="user_phone"
                type="tel"
                placeholder="Phone"
                className="border px-4 py-3 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              />,
              <motion.select
                name="user_service"
                className="border px-4 py-3 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <option>Steel Fabrication</option>
                <option>Laser Cutting</option>
                <option>Welding Services</option>
                <option>Other</option>
              </motion.select>,
              <motion.textarea
                key="details"
                name="message"
                placeholder="Additional Details (Project Scope, Requirements, etc.)"
                className="border px-4 py-3 w-full md:col-span-2"
                rows={4}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              />,
              <motion.div
                key="submit"
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 font-semibold hover:scale-105 transform transition duration-300"
                >
                  Submit Request
                </button>
              </motion.div>
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
