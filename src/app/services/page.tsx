"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import Image from "next/image";
import { FaHeadset, FaRegClock, FaPhoneAlt, FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";

const services = [
  {
    title: "Fractional Call Centre Services",
    desc: "Use our team part-time or on-demand. No full-time hires or managing rosters.",
    img: "/service1.webp",
    icon: <FaHeadset className="text-[#f48e1b] mr-2" />,
  },
  {
    title: "After-Hours Call Handling",
    desc: "Night, weekend, and public holiday coverage. Escalation protocols, no voicemail.",
    img: "/services2.webp",
    icon: <FaRegClock className="text-[#f48e1b] mr-2" />,
  },
  {
    title: "Daytime Overflow Support",
    desc: "Backup when you're flat out. Seamless call forwarding, info capture.",
    img: "/services3.webp",
    icon: <FaPhoneAlt className="text-[#f48e1b] mr-2" />,
  },
  {
    title: "Platform Integration",
    desc: "We work inside your systems. Familiar with CRMs, job schedulers, booking platforms. Tailored setup and onboarding.",
    img: "/services4.webp",
    icon: <FaRegListAlt className="text-[#f48e1b] mr-2" />,
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <h1 className="text-4xl font-bold text-[#0054ab] mb-4 text-center">Our Services</h1>
      <p className="text-lg text-[#0054ab] mb-8 text-center max-w-2xl mx-auto">Discover how AlphaLink can transform your business with flexible, reliable, and cost-effective call centre solutions. Whether you need after-hours support, overflow handling, or seamless integration with your systems, our Aussie-managed team is here to help you never miss a call again.</p>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {services.map((service, idx) => (
          <button
            key={service.title}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition border-2 flex items-center ${activeTab === idx ? "bg-[#0054ab] text-white border-[#0054ab] shadow" : "bg-white text-[#0054ab] border-[#eaf4fb] hover:bg-[#f5faff]"}`}
          >
            {service.icon}
            {service.title}
          </button>
        ))}
      </div>
      {/* Sliding Content */}
      <div className="relative w-full flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 border-2 border-[#eaf4fb]">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={activeService.img}
            alt={activeService.title}
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full max-w-md object-cover transition-all duration-500"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold text-[#0054ab] mb-4">{activeService.title}</h2>
          <p className="text-lg text-[#0054ab] mb-8">{activeService.desc}</p>
          <button
            onClick={() => setModalOpen(true)}
            className="relative px-8 py-4 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold text-lg shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b] overflow-hidden flex items-center gap-2"
            style={{ boxShadow: '0 8px 32px 0 rgba(244, 142, 27, 0.18)' }}
          >
            {/* Animated Shine Overlay */}
            <span className="absolute inset-0 pointer-events-none">
              <span className="block w-full h-full animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" style={{ backgroundSize: '200% 100%' }}></span>
            </span>
            <FaRegCalendarAlt className="text-[#0054ab] text-xl relative z-10" />
            <span className="relative z-10">Book a Free Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
