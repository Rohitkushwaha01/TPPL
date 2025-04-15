import React, { useState } from 'react';
import VMC from '../assets/ServicesPhoto/vmcmachine.webp';
import Fabrication from '../assets/ServicesPhoto/Fabrication.webp';
import Plano from "../assets/ServicesPhoto/Plano.webp";
import lasercutting from "../assets/ServicesPhoto/lasercutting.webp";
import steelpurlin from "../assets/ServicesPhoto/steelpurlin.webp";
import cncbending from "../assets/ServicesPhoto/CNCBending.webp";
import plasma from "../assets/ServicesPhoto/Plasmacutting.jpg";
import FabricatedCuttingPart from "../assets/ServicesPhoto/FabricatedCuttingParts.webp";
import MetalFabrication from "../assets/ServicesPhoto/MetalFabrication.webp";
import { vmcTypes } from '../Data/VMCData'; // import VMC types here
import { FabricationTypes } from '../Data/FabricationData'; // import Fabrication types here
import { PlanoMillingTypes } from '../Data/PlanoData';
import Footer from '../components/Footer';
import {motion} from "framer-motion"

const services = [
    {
        title: "VMC Machining Services",
        description: "High-precision VMC machining on Stainless Steel (SS) and Mild Steel (MS), ideal for custom parts and prototypes.",
        img: VMC,
    },
    {
        title: "Fabrication Services",
        description: "Heavy-duty fabrication services including MS Heavy, Steel, and Mild Steel components with robust welding and structural precision.",
        img: Fabrication,
    },
    {
        title: "Plano Milling Job Work",
        description: "Accurate and efficient Plano milling, vertical milling, and CNC milling for large metal components.",
        img: Plano,
    },
    {
        title: "Laser Cutting Services",
        description: "Aluminum, MS, and Stainless Steel laser cutting services with perfect edge quality and minimal distortion.",
        img: lasercutting,
    },
    {
        title: "Steel & Metal Purlins",
        description: "We manufacture high-quality Z and C purlins for roofing, cladding, and structural support in construction.",
        img: steelpurlin,
    },
    {
        title: "CNC Bending Services",
        description: "Precision CNC sheet and plate bending for metal fabrication, tailored to customer requirements.",
        img: cncbending,
    },
    {
        title: "Plasma Cutting Services",
        description: "Quick and clean plasma cutting for intricate designs and fast turnaround times on thick metal sheets.",
        img: plasma,
    },
    {
        title: "Fabricated Metal Parts",
        description: "Custom fabricated metal parts designed and built with high dimensional accuracy and durability.",
        img: FabricatedCuttingPart,
    },
    {
        title: "Sheet Metal Fabrication",
        description: "Industrial sheet metal fabrication for enclosures, cabinets, ducts, and more using advanced techniques.",
        img: MetalFabrication,
    },
];

export default function Services() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    return (
        <>
        <div className=" bg-white text-gray-800 px-6 md:px-20 py-16">
            <h2 className="text-4xl font-bold text-center text-blue-800 drop-shadow-sm my-20">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-blue-100 border border-blue-200"
                        onClick={() => handleServiceClick(service)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-900">{service.title}</h3>
                            <p className="text-blue-800 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
    
            {showModal && selectedService && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full relative border border-blue-200 max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>
    
                        <h2 className="text-3xl font-bold mb-4 text-blue-900">{selectedService.title}</h2>
                        <p className="mb-6 text-blue-800 text-sm leading-relaxed">{selectedService.description}</p>
    
                        {selectedService.title === 'VMC Machining Services' && vmcTypes.map((materialBlock, matIndex) => (
                            <div key={matIndex} className="border border-blue-200 p-5 rounded-xl bg-blue-50 mb-6">
                                <h3 className="font-semibold text-blue-700 mb-3">{materialBlock.type}</h3>
    
                                {materialBlock.details.map((detail, idx) => (
                                    <div key={idx} className="mb-4">
                                        <ul className="text-sm text-blue-800 list-disc ml-5 space-y-1">
                                            <li><strong>Machining Axis:</strong> {detail.axis}</li>
                                            <li><strong>Material:</strong> {detail.material}</li>
                                            <li><strong>Experience:</strong> {detail.experience}</li>
                                            <li><strong>Certification:</strong> {detail.certification}</li>
                                            <li><strong>Job Work:</strong> {detail.dimensions}</li>
                                            {detail.maxWeight && <li><strong>Max Weight:</strong> {detail.maxWeight}</li>}
                                            <li><strong>Machine:</strong> {detail.machine}</li>
                                            {detail.components && <li><strong>Components:</strong> {detail.components}</li>}
                                            <li><strong>Services:</strong> {detail.services}</li>
                                            <li><strong>Transport:</strong> {detail.transport}</li>
                                        </ul>
    
                                        {detail.highlights && (
                                            <div className="mt-2 ml-5">
                                                <strong>Highlights:</strong>
                                                <ul className="list-disc ml-5 text-blue-600">
                                                    {detail.highlights.map((point, hIdx) => (
                                                        <li key={hIdx}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
    
                        {selectedService.title === 'Fabrication Services' && FabricationTypes.map((fab, index) => (
                            <div key={index} className="border border-blue-200 p-5 rounded-xl bg-blue-50 mb-6">
                                <h3 className="font-semibold text-lg text-blue-700 mb-3">
                                    Material: {fab.material}
                                </h3>
                                <ul className="text-sm text-blue-800 list-disc ml-5 space-y-1">
                                    <li><strong>Experience:</strong> {fab.experience}</li>
                                    <li><strong>Certification:</strong> {fab.certification}</li>
                                    <li><strong>Fabrication Capacity:</strong> {fab.capacity}</li>
                                    <li><strong>Job Size:</strong> {fab.jobSize}</li>
                                    {fab.thickness && <li><strong>Thickness:</strong> {fab.thickness}</li>}
                                    <li><strong>Welding Methods:</strong> {fab.welding}</li>
                                    <li><strong>Surface Finishing:</strong> {fab.surfaceFinish}</li>
                                    <li><strong>Transport Facility:</strong> {fab.transport}</li>
                                </ul>
                                <div className="mt-3">
                                    <strong className="block mb-1">Highlights:</strong>
                                    <ul className="list-disc list-inside text-blue-600">
                                        {fab.highlights.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </div>
        <Footer/>
        </>
    );
    
}

