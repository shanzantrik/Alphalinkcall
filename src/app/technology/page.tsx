"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import { FaRobot, FaCloud, FaChartBar, FaHeadset, FaLock, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Technology" }]} />
      {/* Hero Banner + Workflow Animation */}
      <div className="w-full flex flex-col items-center mb-12">
        <div className="w-full flex flex-col items-center justify-center mb-6">
          {/* Animated AI Workflow - Horizontal Flow */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-4xl py-8">
            {/* Inbound: Customer Call → AI Voice Bot → Agent → CRM */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full relative">
              {/* Customer Call */}
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-blue-100 rounded-full p-4 mb-2 shadow">
                  <FaHeadset className="text-[#0054ab] text-4xl" />
                </div>
                <span className="text-xs font-bold text-[#0054ab]">Customer Call</span>
                <span className="text-xs text-[#0054ab]/60">Inbound</span>
              </div>
              {/* Animated Arrow + Marker to AI Bot */}
              <div className="flex flex-col items-center justify-center relative">
                <motion.svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="mb-2" initial={false}>
                  <path d="M4 12h48" stroke="#0054ab" strokeWidth="2" strokeLinecap="round" />
                  <motion.circle
                    cx="4"
                    cy="12"
                    r="5"
                    fill="#0054ab"
                    animate={{ cx: [4, 52] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <polygon points="56,12 48,8 48,16" fill="#0054ab" />
                </motion.svg>
              </div>
              {/* AI Voice Bot */}
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-[#fff7e6] rounded-full p-4 mb-2 shadow animate-bounce-slow">
                  <FaRobot className="text-[#f48e1b] text-4xl" />
                </div>
                <span className="text-xs font-bold text-[#f48e1b]">AI Voice Bot</span>
                <span className="text-xs text-[#f48e1b]/80">AI Routing</span>
              </div>
              {/* Animated Arrow + Marker to Agent (Plumbing) */}
              <div className="flex flex-col items-center justify-center relative">
                <motion.svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="mb-2" initial={false}>
                  <path d="M4 12h48" stroke="#0054ab" strokeWidth="2" strokeLinecap="round" />
                  <motion.circle
                    cx="4"
                    cy="12"
                    r="5"
                    fill="#0054ab"
                    animate={{ cx: [4, 52] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                  <polygon points="56,12 48,8 48,16" fill="#0054ab" />
                </motion.svg>
              </div>
              {/* Service Agent */}
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-[#eaf4fb] rounded-full p-4 mb-2 shadow">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#0054ab" /><path d="M10 22l6-6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="14" y="10" width="4" height="6" rx="2" fill="#fff"/></svg>
                </div>
                <span className="text-xs font-bold text-[#0054ab]">Service Agent</span>
              </div>
              {/* Animated Arrow + Marker to CRM */}
              <div className="flex flex-col items-center justify-center relative">
                <motion.svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="mb-2" initial={false}>
                  <path d="M4 12h48" stroke="#f48e1b" strokeWidth="2" strokeLinecap="round" />
                  <motion.circle
                    cx="4"
                    cy="12"
                    r="5"
                    fill="#f48e1b"
                    animate={{ cx: [4, 52] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <polygon points="56,12 48,8 48,16" fill="#f48e1b" />
                </motion.svg>
              </div>
              {/* CRM/Job Scheduler */}
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-[#fff7e6] rounded-full p-4 mb-2 shadow">
                  <FaSyncAlt className="text-[#f48e1b] text-3xl" />
                </div>
                <span className="text-xs font-bold text-[#f48e1b]">CRM / Job Scheduler</span>
              </div>
            </div>
            {/* Outbound: AI Voice Bot → Customer */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full mt-8">
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-[#fff7e6] rounded-full p-4 mb-2 shadow animate-bounce-slow">
                  <FaRobot className="text-[#f48e1b] text-4xl" />
                </div>
                <span className="text-xs font-bold text-[#f48e1b]">AI Voice Bot</span>
                <span className="text-xs text-[#f48e1b]/80">Outbound</span>
              </div>
              <div className="flex flex-col items-center justify-center relative">
                <motion.svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="mb-2" initial={false}>
                  <path d="M4 12h48" stroke="#0054ab" strokeWidth="2" strokeLinecap="round" />
                  <motion.circle
                    cx="4"
                    cy="12"
                    r="5"
                    fill="#0054ab"
                    animate={{ cx: [4, 52] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <polygon points="56,12 48,8 48,16" fill="#0054ab" />
                </motion.svg>
              </div>
              <div className="flex flex-col items-center min-w-[90px]">
                <div className="bg-blue-100 rounded-full p-4 mb-2 shadow">
                  <FaHeadset className="text-[#0054ab] text-4xl" />
                </div>
                <span className="text-xs font-bold text-[#0054ab]">Customer</span>
                <span className="text-xs text-[#0054ab]/60">Outbound</span>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold text-[#0054ab] mb-2 text-center mt-8">Our Technology</h1>
            <p className="text-lg text-[#0054ab] text-center max-w-2xl mb-2">Cutting-edge tools, AI, and seamless integrations—built to empower your business and delight your customers, 24/7.</p>
          </div>
        </div>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-2xl border-2 border-[#eaf4fb]">
            {/* Icon color logic: AI/Tech = blue/gold, Security = gold, Integrations = blue */}
            <span className="mb-3">
              {feature.title.includes("AI") ? (
                <FaRobot className="text-[#0054ab] text-4xl" />
              ) : feature.title.includes("Virtual") ? (
                <FaCloud className="text-[#f48e1b] text-4xl" />
              ) : feature.title.includes("Metrics") ? (
                <FaChartBar className="text-[#0054ab] text-4xl" />
              ) : feature.title.includes("Omnichannel") ? (
                <FaHeadset className="text-[#f48e1b] text-4xl" />
              ) : feature.title.includes("Secure") ? (
                <FaLock className="text-[#f48e1b] text-4xl" />
              ) : feature.title.includes("Integrations") ? (
                <FaSyncAlt className="text-[#0054ab] text-4xl" />
              ) : (
                feature.icon
              )}
            </span>
            <h2 className="text-xl font-bold text-[#0054ab] mb-2">{feature.title}</h2>
            <p className="text-[#0054ab]">{feature.desc}</p>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => setModalOpen(true)}
          className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold text-lg shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b] overflow-hidden"
          style={{ boxShadow: '0 8px 32px 0 rgba(244, 142, 27, 0.18)' }}
        >
          {/* Animated Shine Overlay */}
          <span className="absolute inset-0 pointer-events-none">
            <span className="block w-full h-full animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" style={{ backgroundSize: '200% 100%' }}></span>
          </span>
          {/* Calendar Icon SVG (blue, 24x24) */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="relative z-10">
            <rect x="3" y="5" width="18" height="16" rx="3" fill="#fff"/>
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#f48e1b" strokeWidth="1.5"/>
            <rect x="7" y="2" width="2" height="4" rx="1" fill="#0054ab"/>
            <rect x="15" y="2" width="2" height="4" rx="1" fill="#0054ab"/>
            <rect x="7" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
            <rect x="11" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
            <rect x="15" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
            <rect x="7" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
            <rect x="11" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
            <rect x="15" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
          </svg>
          <span className="hidden md:inline relative z-10">See Our Technology in Action</span>
        </button>
      </div>
    </div>
  );
}
