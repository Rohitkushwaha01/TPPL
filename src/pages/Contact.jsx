import React from 'react'
import QuoteSection from "../components/QuoteSection";
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <section className="bg-white text-gray-800 my-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-orange-500 mb-20 text-center">Reach Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">Office Address</h4>
              <p>Gat No. 79 & 80, Jyotiba Nagar,</p>
              <p>Bhalekar Chowk, Talwade, Pune-412114</p>
              <p>Maharashtra, India</p>
              <a
                href="https://www.google.com/maps/place/Gat+No.+79+%26+80,+Jyotiba+Nagar,+Bhalekar+Chowk,+Talwade,+Pune-412114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block mt-2"
              >
                Get Directions
              </a>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Contact Person</h4>
              <p>Vinayak M. Korde</p>
              <p>Operation Director</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5281180957727!2d73.88208407512817!3d18.551128882554604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9379d8f6e55%3A0x8aa6e7c6f0386bb4!2sJyotiba%20Nagar%2C%20Talwade%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20412114!5e0!3m2!1sen!2sin!4v1713162375651!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <QuoteSection />

      {/* Footer */}
    </section>
      <Footer />
    </>
  );
}
