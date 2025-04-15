import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import tdps from "../assets/Clients/tdps.jpg";
import mhi from "../assets/Clients/mhi.png";
import suzlon from "../assets/Clients/suzlon.png";
import tal from "../assets/Clients/tal.jpg";
import bobst from "../assets/Clients/bobst.png";
import consarc from "../assets/Clients/consarc.png";
import thyssenkrupp from "../assets/Clients/thysen.png";
import forbes from "../assets/Clients/forbes.png";  
import mahindra from "../assets/Clients/mahindra.jpg";
import kabra from "../assets/Clients/kabra.png";

const clients = [
  {
    name: "TD Power Systems",
    logo: tdps,
  },
  {
    name: "Mitsubishi Heavy Industries",
    logo: mhi,
  },
  {
    name: "Suzlon Energy",
    logo: suzlon,
  },
  {
    name: "Consarc Corporation",
    logo: consarc,
  },
  {
    name: "Forbes Marshall",
    logo: forbes,
  },
  {
    name: "Thyssenkrupp",
    logo: thyssenkrupp,
  },
  {
    name: "TAL Manufacturing Solutions",
    logo: tal,
  },
  {
    name: "Mahindra",
    logo: mahindra,
  },
  {
    name: "Bobst",
    logo: bobst,
  },
  {
    name: "Kabra Extrusiontechnik",
    logo: kabra,
  },
];

export default function Client() {
  return (
    <div>
        {/* Clients Logo */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 grayscale opacity-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >

          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <img src={client.logo} alt={client.name} className="h-12 mb-2" />
              <span className="text-sm text-gray-600">{client.name}</span>
            </motion.div>
          ))}

        </motion.div>

    </div>
  )
}
