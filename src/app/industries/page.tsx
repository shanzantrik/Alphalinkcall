"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import { FaUserMd, FaGavel, FaHome, FaShoppingCart, FaBriefcase, FaTools } from "react-icons/fa";

const industries = [
  {
    name: "Home Services",
    desc: "Comprehensive 24/7 call answering, emergency dispatch, seamless job scheduling, and real-time escalation for all home service businesses—including plumbing, electrical, HVAC, and more. Never miss a lead or urgent call again. Our agents are trained to handle service requests, book jobs, and provide friendly, knowledgeable support for your customers, day or night.",
    icon: <FaTools className="text-[#0054ab] text-4xl mb-3" />,
  },
  {
    name: "Healthcare",
    desc: "HIPAA-compliant patient communication, appointment scheduling, and after-hours support for clinics, practices, and allied health. We ensure your patients always reach a caring, professional voice.",
    icon: <FaUserMd className="text-[#f48e1b] text-3xl mb-3" />,
  },
  {
    name: "Legal",
    desc: "Confidential client intake, case updates, and appointment booking for law firms and legal professionals. Protect your clients' privacy while delivering prompt, reliable service.",
    icon: <FaGavel className="text-[#0054ab] text-3xl mb-3" />,
  },
  {
    name: "Real Estate",
    desc: "Lead capture, property inquiry management, and appointment setting for real estate agencies. Never miss a potential buyer or tenant, and keep your pipeline full.",
    icon: <FaHome className="text-[#f48e1b] text-3xl mb-3" />,
  },
  {
    name: "E-commerce",
    desc: "Order support, customer care, and returns management for online stores. Delight your customers with fast, friendly, and knowledgeable service that drives loyalty and repeat business.",
    icon: <FaShoppingCart className="text-[#0054ab] text-3xl mb-3" />,
  },
  {
    name: "Professional Services",
    desc: "Appointment booking, client support, and overflow call handling for consultants, agencies, and business professionals. Focus on your work while we handle your calls.",
    icon: <FaBriefcase className="text-[#f48e1b] text-3xl mb-3" />,
  },
];

export default function Industries() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
      <h1 className="text-5xl font-extrabold text-[#0054ab] mb-8 text-center">Industries We Serve</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 text-center transition hover:-translate-y-1 hover:shadow-2xl border-2 border-[#eaf4fb]"
          >
            {ind.icon}
            <h2 className="text-xl font-bold text-[#0054ab] mb-2">{ind.name}</h2>
            <p className="text-[#0054ab] mb-2">{ind.desc}</p>
          </div>
        ))}
      </div>
      {/* Logo Scroller */}
      <div className="w-full flex items-center justify-center overflow-x-auto py-6 mb-12">
        <div className="flex gap-12 animate-scroll-logos items-center justify-center" style={{ minWidth: 700 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
        </div>
      </div>
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
          <span className="relative z-10">Request an Industry Case Study</span>
        </button>
      </div>
    </div>
  );
}
