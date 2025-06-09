"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import { FaUserMd, FaGavel, FaHome, FaShoppingCart, FaBriefcase, FaTools, FaBolt, FaToilet } from "react-icons/fa";

const industries = [
  {
    name: "Plumbing",
    desc: "24/7 call answering, emergency dispatch, and seamless job scheduling for plumbers. Never miss a lead or urgent call again.",
    icon: <FaToilet className="text-blue-600 text-4xl mb-3" />,
    highlight: true,
  },
  {
    name: "Electricians",
    desc: "Professional call handling, after-hours support, and real-time escalation for electrical businesses. Keep your jobs and customers safe.",
    icon: <FaBolt className="text-yellow-500 text-4xl mb-3" />,
    highlight: true,
  },
  {
    name: "Healthcare",
    desc: "HIPAA-compliant patient communication and appointment scheduling.",
    icon: <FaUserMd className="text-green-600 text-3xl mb-3" />,
  },
  {
    name: "Legal",
    desc: "Confidential client intake and case updates.",
    icon: <FaGavel className="text-purple-600 text-3xl mb-3" />,
  },
  {
    name: "Real Estate",
    desc: "Lead capture and property inquiry management.",
    icon: <FaHome className="text-pink-600 text-3xl mb-3" />,
  },
  {
    name: "E-commerce",
    desc: "Order support and customer care.",
    icon: <FaShoppingCart className="text-indigo-600 text-3xl mb-3" />,
  },
  {
    name: "Professional Services",
    desc: "Appointment booking and client support.",
    icon: <FaBriefcase className="text-gray-700 text-3xl mb-3" />,
  },
  {
    name: "Home Services",
    desc: "Service requests and emergency response.",
    icon: <FaTools className="text-blue-400 text-3xl mb-3" />,
  },
];

export default function Industries() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Industries We Serve</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className={`flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 text-center transition transform hover:-translate-y-1 hover:shadow-2xl ${ind.highlight ? "border-4 border-blue-500 scale-105" : "border border-gray-100"}`}
          >
            {ind.icon}
            <h2 className={`text-xl font-bold mb-2 ${ind.highlight ? "text-blue-700" : "text-gray-800"}`}>{ind.name}</h2>
            <p className="text-gray-700 mb-2">{ind.desc}</p>
            {ind.highlight && (
              <span className="inline-block mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Most Popular</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-semibold text-lg shadow hover:from-gray-900 hover:to-gray-700 transition"
        >
          Request an Industry Case Study
        </button>
      </div>
    </div>
  );
}
