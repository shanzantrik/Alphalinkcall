"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import {
  FaWrench,
  FaUserMd,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

const industries = [
  {
    name: "Trades & Field Services",
    icon: <FaWrench className="text-[#0054ab] text-3xl" />, // 🛠️
    emoji: "🛠️",
    tabColor: "text-[#0054ab]",
    contentHeaderColor: "text-[#0054ab]",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-[#0054ab]">Trades & Field Services</h2>
        <p className="mb-4 text-lg text-[#0054ab]">Your business doesn&apos;t stop when the workday ends — and neither do we.</p>
        <p className="mb-4 text-[#222]">Alphalink provides round-the-clock call answering, job scheduling, and emergency dispatch services tailored for home service professionals. Whether you&apos;re in plumbing, electrical, HVAC, or general maintenance, our trained agents become an extension of your team.</p>
        <p className="mb-4 text-[#222]">We don&apos;t just take messages — we book jobs, triage urgent requests, and ensure every caller feels heard, helped, and ready to work with you. With real-time escalation protocols and full scheduling integration, you&apos;ll never miss a lead, a late-night emergency, or a new opportunity.</p>
        <ul className="mb-4 space-y-2 text-[#222]">
          <li>✅ 24/7 Live Answering</li>
          <li>✅ Job Booking & Dispatch</li>
          <li>✅ Emergency Escalation</li>
          <li>✅ Custom Scripts for Your Services</li>
          <li>✅ Seamless Integration with Your CRM or Scheduling Tools</li>
        </ul>
        <p className="font-semibold text-[#f48e1b]">Focus on the work. We&apos;ll handle the calls.</p>
      </>
    ),
  },
  {
    name: "Professional Services & Allied Health",
    icon: <FaUserMd className="text-[#f48e1b] text-3xl" />, // 🩺
    emoji: "🩺",
    tabColor: "text-[#f48e1b]",
    contentHeaderColor: "text-[#f48e1b]",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-[#f48e1b]">Professional Services & Allied Health</h2>
        <p className="mb-4 text-lg text-[#0054ab]">Caring communication, always on call.</p>
        <p className="mb-4 text-[#222]">Alphalink supports clinics, practices, and allied health providers with HIPAA-compliant call answering, appointment scheduling, and after-hours triage — so your patients are always met with a calm, professional voice, no matter when they call.</p>
        <p className="mb-4 text-[#222]">We act as an extension of your front desk, ensuring continuity of care, reduced no-shows, and responsive patient support after hours, on weekends, and during high-volume periods.</p>
        <p className="mb-4 text-[#222]">Whether you&apos;re a solo practitioner or a growing clinic, we help you stay connected — with compassion, consistency, and complete compliance.</p>
        <ul className="mb-4 space-y-2 text-[#222]">
          <li>✅ HIPAA-Compliant Patient Handling</li>
          <li>✅ After-Hours & Overflow Support</li>
          <li>✅ Appointment Booking & Cancellations</li>
          <li>✅ Escalation Protocols for Urgent Cases</li>
          <li>✅ Scripted Responses for Each Provider or Clinic</li>
        </ul>
        <p className="font-semibold text-[#f48e1b]">Focus on patient care. We&apos;ll handle the rest.</p>
      </>
    ),
  },
  {
    name: "Health & Wellness",
    icon: <GiLotus className="text-[#0054ab] text-3xl" />, // 🧘‍♀️
    emoji: "🧘‍♀️",
    tabColor: "text-[#00b894]",
    contentHeaderColor: "text-[#00b894]",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-[#00b894]">Health & Wellness</h2>
        <p className="mb-4 text-lg text-[#0054ab]">Compassionate connection for care-focused businesses.</p>
        <p className="mb-4 text-[#222]">Alphalink helps health and wellness providers stay responsive and professional — even outside regular hours. Whether you run a physiotherapy practice, counselling clinic, or holistic studio, we provide friendly, confidential call answering, appointment scheduling, and client support tailored to your brand.</p>
        <p className="mb-4 text-[#222]">Our trained agents become a seamless extension of your practice, handling intake, rescheduling, cancellations, and general enquiries with care and discretion — so you can stay focused on your clients&apos; wellbeing.</p>
        <ul className="mb-4 space-y-2 text-[#222]">
          <li>✅ Discreet Client Communication</li>
          <li>✅ Appointment Scheduling & Rescheduling</li>
          <li>✅ After-Hours & Overflow Support</li>
          <li>✅ Custom Scripts for Each Modality or Practice</li>
          <li>✅ Compassionate Tone That Reflects Your Brand</li>
        </ul>
        <p className="font-semibold text-[#f48e1b]">Let your clients feel heard — even before they walk in.</p>
      </>
    ),
  },
  {
    name: "Property & Real Estate",
    icon: <FaHome className="text-[#f48e1b] text-3xl" />, // 🏡
    emoji: "🏡",
    tabColor: "text-[#f48e1b]",
    contentHeaderColor: "text-[#f48e1b]",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-[#f48e1b]">Property & Real Estate</h2>
        <p className="mb-4 text-lg text-[#0054ab]">Never miss a buyer. Never lose a lead.</p>
        <p className="mb-4 text-[#222]">Alphalink provides real estate professionals with dedicated call answering, lead capture, and appointment setting — so every enquiry is handled quickly, professionally, and with care.</p>
        <p className="mb-4 text-[#222]">Whether it&apos;s a rental enquiry, a property inspection booking, or a vendor looking to list, our team ensures every call is answered and every opportunity is captured. We work seamlessly with your existing team and systems to help you stay responsive, even during peak periods or after hours.</p>
        <ul className="mb-4 space-y-2 text-[#222]">
          <li>✅ 24/7 Lead Capture & Qualification</li>
          <li>✅ Rental & Buyer Enquiry Handling</li>
          <li>✅ Property Inspection Booking</li>
          <li>✅ Call Overflow & After-Hours Support</li>
          <li>✅ CRM-Ready Notes & Escalation</li>
        </ul>
        <p className="font-semibold text-[#f48e1b]">Keep your listings active, your pipeline full, and your brand polished — even when you&apos;re out closing deals.</p>
      </>
    ),
  },
  {
    name: "Specialist Operators & Online Brands",
    icon: <FaShoppingCart className="text-[#0054ab] text-3xl" />, // 🛍️
    emoji: "🛍️",
    tabColor: "text-[#0054ab]",
    contentHeaderColor: "text-[#0054ab]",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 text-[#0054ab]">Specialist Operators & Online Brands</h2>
        <p className="mb-4 text-lg text-[#0054ab]">Turn first-time buyers into loyal customers.</p>
        <p className="mb-4 text-[#222]">Alphalink provides fast, friendly, and knowledgeable order support, customer care, and returns management for online retailers and specialist operators. Whether you&apos;re a growing eCommerce brand, a subscription service, or a niche product supplier — we help you deliver seamless, human support at every step of the customer journey.</p>
        <p className="mb-4 text-[#222]">From tracking updates and payment queries to returns, exchanges, and product questions, our agents are trained in your brand voice and ready to exceed expectations.</p>
        <ul className="mb-4 space-y-2 text-[#222]">
          <li>✅ Order Support & Live Updates</li>
          <li>✅ Product & FAQ Assistance</li>
          <li>✅ Returns & Exchange Management</li>
          <li>✅ Subscription & Payment Queries</li>
          <li>✅ Brand-Tailored Scripting & Tone</li>
        </ul>
        <p className="font-semibold text-[#f48e1b]">Build trust with every interaction — and keep your customers coming back.</p>
      </>
    ),
  },
];

const tabVariants = {
  initial: { x: 80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 0.7
    }
  },
  exit: { x: -80, opacity: 0, transition: { duration: 0.4 } },
};

export default function Industries() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4 flex flex-col">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
      <h1 className="text-5xl font-extrabold text-[#0054ab] mb-8 text-center">Industries We Support</h1>
      <p className="text-center text-lg text-[#222] mb-8">Whether you’re out on the tools, running a growing practice, or managing client calls after hours — Alphalink helps you stay connected and in control.</p>
      <div className="flex-1 w-full max-w-6xl mx-auto animate-fadeIn flex flex-col md:flex-row gap-8">
        {/* Tabs: Responsive - horizontal scroll on mobile, vertical on desktop */}
        <div
          className="flex md:flex-col gap-2 w-full md:w-72 md:min-w-[240px] md:max-w-xs py-2 md:py-6 pr-0 md:pr-2 border-b md:border-b-0 md:border-r border-[#eaf4fb] overflow-x-auto md:overflow-x-visible bg-white/0 scrollbar-thin scrollbar-thumb-[#eaf4fb] scrollbar-track-transparent snap-x md:snap-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {industries.map((ind, idx) => (
            <button
              key={ind.name}
              onClick={() => setSelected(idx)}
              className={`
                group flex flex-col items-center justify-center
                min-w-[160px] md:w-full
                px-4 py-3 md:px-6 md:py-4
                rounded-xl font-bold text-base md:text-lg
                transition-all duration-300 border-2
                whitespace-nowrap
                ${selected === idx ? "bg-gradient-to-r from-[#f48e1b]/20 to-[#ffd580]/40 border-[#f48e1b] scale-105 shadow-xl" : "bg-white border-transparent hover:bg-[#f5faff] hover:scale-105"}
                ${ind.tabColor}
                snap-center
              `}
              style={{ outline: selected === idx ? "3px solid #f48e1b" : undefined }}
            >
              <span className="text-2xl md:text-2xl lg:text-3xl animate-wiggle-slow mb-1" style={{ color: '#f4b400', filter: 'drop-shadow(0 1px 0 #fff)' }}>{ind.emoji}</span>
              <span className="w-full text-center truncate">{ind.name}</span>
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="flex-1 flex items-center justify-center relative min-h-[500px] w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected}
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full bg-white rounded-3xl shadow-2xl border-4 border-[#eaf4fb] p-6 md:p-10 flex flex-col justify-center animate-fadeIn"
              style={{ minHeight: 400 }}
            >
              {industries[selected].content}
            </motion.div>
          </AnimatePresence>
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
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes wiggle-slow {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        .animate-wiggle-slow {
          animation: wiggle-slow 2.5s infinite ease-in-out;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          animation: shine 2.5s linear infinite;
        }
        @media (max-width: 768px) {
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #eaf4fb;
            border-radius: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      `}</style>
    </div>
  );
}
