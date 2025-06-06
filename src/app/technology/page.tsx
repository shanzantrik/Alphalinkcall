"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import { FaRobot, FaCloud, FaChartBar, FaHeadset, FaLock, FaSyncAlt } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Customer Service",
    desc: "We leverage smart technology to support our agents, enabling faster response times and more accurate information delivery—without losing the personal touch.",
    icon: <FaRobot className="text-blue-600 text-4xl mb-3" />,
  },
  {
    title: "Virtual Customer Support",
    desc: "Our virtual support solutions allow your business to scale efficiently, providing seamless service to your customers wherever they are.",
    icon: <FaCloud className="text-teal-500 text-4xl mb-3" />,
  },
  {
    title: "Call Center Metrics & Reporting",
    desc: "Gain insights into your customer interactions with detailed analytics and reporting. Track key metrics to continuously improve your service quality.",
    icon: <FaChartBar className="text-indigo-600 text-4xl mb-3" />,
  },
  {
    title: "Omnichannel Support",
    desc: "Phone, email, chat, and SMS—your customers reach you their way, and we keep it all seamless.",
    icon: <FaHeadset className="text-pink-500 text-4xl mb-3" />,
  },
  {
    title: "Secure & Confidential",
    desc: "Your data and your customers' privacy are protected with enterprise-grade security.",
    icon: <FaLock className="text-green-600 text-4xl mb-3" />,
  },
  {
    title: "Easy Integrations",
    desc: "We work inside your systems—CRMs, job schedulers, booking platforms, and more.",
    icon: <FaSyncAlt className="text-yellow-500 text-4xl mb-3" />,
  },
];

export default function Technology() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Technology" }]} />
      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center mb-12">
        <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80" alt="Technology" width={900} height={400} className="rounded-2xl shadow-lg w-full max-w-3xl object-cover mb-6" />
        <h1 className="text-5xl font-extrabold text-blue-900 mb-2 text-center">Our Technology</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-2">Cutting-edge tools, AI, and seamless integrations—built to empower your business and delight your customers, 24/7.</p>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl">
            {feature.icon}
            <h2 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h2>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-bold text-xl shadow hover:from-blue-800 hover:to-blue-600 transition"
        >
          See Our Technology in Action
        </button>
      </div>
    </div>
  );
}
