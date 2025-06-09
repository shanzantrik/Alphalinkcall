"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import Image from "next/image";

const services = [
  {
    title: "Fractional Call Centre Services",
    desc: "Use our team part-time or on-demand. No full-time hires or managing rosters.",
    img: "/pexels-jep-gambardella-7689734.webp",
  },
  {
    title: "After-Hours Call Handling",
    desc: "Night, weekend, and public holiday coverage. Escalation protocols, no voicemail.",
    img: "/pexels-mart-production-7709271.webp",
  },
  {
    title: "Daytime Overflow Support",
    desc: "Backup when you're flat out. Seamless call forwarding, info capture.",
    img: "/pexels-mart-production-7709251.webp",
  },
  {
    title: "Platform Integration",
    desc: "We work inside your systems. Familiar with CRMs, job schedulers, booking platforms. Tailored setup and onboarding.",
    img: "/alphaplatform2.webp",
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">Our Services</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Discover how AlphaLinkCall can transform your business with flexible, reliable, and cost-effective call centre solutions. Whether you need after-hours support, overflow handling, or seamless integration with your systems, our Aussie-managed team is here to help you never miss a call again.</p>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {services.map((service, idx) => (
          <button
            key={service.title}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition border-2 ${activeTab === idx ? "bg-blue-700 text-white border-blue-700 shadow" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"}`}
          >
            {service.title}
          </button>
        ))}
      </div>
      {/* Sliding Content */}
      <div className="relative w-full flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-8 transition-all duration-500">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={activeService.img}
            alt={activeService.title}
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full max-w-md object-cover transition-all duration-500"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{activeService.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{activeService.desc}</p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-bold text-lg shadow hover:from-gray-900 hover:to-gray-700 transition"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
