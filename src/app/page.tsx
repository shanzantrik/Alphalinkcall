"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaComments, FaHeadset, FaUserCircle, FaEnvelope, FaRegSmile, FaRegClock, FaRegCheckCircle, FaRegListAlt } from "react-icons/fa";
import { useState } from "react";
import CalendlyModal from "../components/CalendlyModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-10 py-20 md:py-32">
        <motion.div
          className="flex-1 flex flex-col items-start justify-center text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm shadow">
            <FaPhoneAlt className="text-blue-600" /> AlphaLinkCall
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-sm">
            Empowering Your Business, <span className="text-blue-600">One Call at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
            At AlphaLinkCall, every call is a chance to strengthen your customer relationships. We extend your brand&apos;s commitment to exceptional service, ensuring each caller receives the attention they deserve.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-bold text-lg shadow hover:from-blue-800 hover:to-blue-600 transition"
          >
            <FaPhoneAlt className="text-white text-base" /> Request a Free Consultation
          </button>
        </motion.div>
        {/* Animated Hero Visual */}
        <motion.div className="flex-1 flex flex-col justify-center items-center relative min-h-[400px]">
          {/* Concentric Circles as background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
              <circle cx="170" cy="170" r="160" stroke="#60A5FA" strokeWidth="2" opacity="0.2" />
              <circle cx="170" cy="170" r="120" stroke="#3B82F6" strokeWidth="2" opacity="0.3" />
              <circle cx="170" cy="170" r="80" stroke="#2563EB" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
          {/* Telephony Icons overlayed at top, right, bottom, left of the main circle */}
          <>
            {/* Top */}
            <motion.div
              className="absolute z-10"
              style={{ left: 170 - 24, top: 170 - 120 - 24 }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
            >
              <FaPhoneAlt className="text-blue-600 text-3xl drop-shadow" />
            </motion.div>
            {/* Right */}
            <motion.div
              className="absolute z-10"
              style={{ left: 170 + 120 - 24, top: 170 - 24 }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
            >
              <FaComments className="text-blue-400 text-3xl drop-shadow" />
            </motion.div>
            {/* Bottom */}
            <motion.div
              className="absolute z-10"
              style={{ left: 170 - 24, top: 170 + 120 - 24 }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
            >
              <FaHeadset className="text-blue-800 text-3xl drop-shadow" />
            </motion.div>
            {/* Left */}
            <motion.div
              className="absolute z-10"
              style={{ left: 170 - 120 - 24, top: 170 - 24 }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.6 }}
            >
              <FaEnvelope className="text-blue-400 text-3xl drop-shadow" />
            </motion.div>
          </>
          {/* Human Figure in Center */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: [0.9, 1, 0.98, 1], opacity: [0.8, 1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <FaUserCircle className="text-blue-700 text-[120px] drop-shadow-lg" />
          </motion.div>
          {/* Animated Marquee Text */}
          <motion.div className="w-full absolute left-0 -bottom-12 md:-bottom-16 overflow-hidden" initial={false} animate={{}}>
            <motion.div
              className="flex gap-16 text-blue-800 font-bold text-lg md:text-xl whitespace-nowrap"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              <span>24/7 Call Answering</span>
              <span>Omnichannel Support</span>
              <span>AI-Powered Service</span>
              <span>Seamless Customer Experience</span>
              <span>Secure & Confidential</span>
              <span>Scalable Solutions</span>
              <span>Trusted by Businesses</span>
              <span>Prompt Information Gathering</span>
              <span>Overflow Support</span>
              <span>Personalized Greetings</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Subpages Showcase */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {/* Services */}
        <Link href="/services" className="group bg-gradient-to-br from-blue-100 to-blue-400 border-0 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Services" className="h-48 w-full object-cover group-hover:scale-105 transition" />
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Call Answering Services</h2>
            <p className="text-gray-800 mb-4 flex-1">Never miss a customer call. 24/7 professional call answering for plumbers, electricians, and trades.</p>
            <span className="text-blue-900 font-semibold group-hover:underline">Learn more →</span>
          </div>
        </Link>
        {/* Technology */}
        <Link href="/technology" className="group bg-gradient-to-br from-green-100 to-green-400 border-0 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Smart Call Routing" className="h-48 w-full object-cover group-hover:scale-105 transition" />
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Smart Call Routing</h2>
            <p className="text-gray-800 mb-4 flex-1">AI-powered call routing and message delivery. Get urgent jobs to the right team, fast.</p>
            <span className="text-green-900 font-semibold group-hover:underline">Learn more →</span>
          </div>
        </Link>
        {/* Industries */}
        <Link href="/industries" className="group bg-gradient-to-br from-orange-100 to-orange-400 border-0 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Industries" className="h-48 w-full object-cover group-hover:scale-105 transition" />
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-orange-900 mb-2">For Trades & Services</h2>
            <p className="text-gray-800 mb-4 flex-1">Specialized support for plumbers, electricians, HVAC, and home service pros. Industry-focused solutions.</p>
            <span className="text-orange-900 font-semibold group-hover:underline">See how it works →</span>
          </div>
        </Link>
      </section>

      {/* Value Props Section */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-blue-50">
        {/* Top Wavy SVG */}
        <div className="absolute top-0 left-0 w-full -z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path fill="#3B82F6" fillOpacity="0.18" d="M0,80L60,74.7C120,69,240,59,360,64C480,69,600,91,720,101.3C840,112,960,112,1080,101.3C1200,91,1320,69,1380,58.7L1440,48L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        {/* Animated Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose AlphaLinkCall for Your Business?
        </motion.h2>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4">
            <FaRegSmile className="text-blue-500 text-4xl mb-2" />
            <h2 className="text-xl font-bold text-blue-800">Personalized Service</h2>
            <p className="text-gray-700">Agents briefed on your business, products, and values. Every call handled with care, following your guidelines.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4">
            <FaRegClock className="text-green-500 text-4xl mb-2" />
            <h2 className="text-xl font-bold text-green-800">Reliable Support</h2>
            <p className="text-gray-700">Extended availability beyond regular hours. Efficient call handling and overflow support during peak periods.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4">
            <FaRegListAlt className="text-orange-500 text-4xl mb-2" />
            <h2 className="text-xl font-bold text-orange-800">Accurate Information</h2>
            <p className="text-gray-700">Agents trained to collect essential information efficiently. Detailed message taking and quick escalation of urgent matters.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4">
            <FaRegCheckCircle className="text-teal-500 text-4xl mb-2" />
            <h2 className="text-xl font-bold text-teal-800">Technology Enhanced</h2>
            <p className="text-gray-700">Efficient call routing, secure message delivery, and user-friendly interfaces for easy management of your account.</p>
          </div>
        </div>
        {/* Bottom Wavy SVG */}
        <div className="absolute bottom-0 left-0 w-full -z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path fill="#3B82F6" fillOpacity="0.18" d="M0,40L60,58.7C120,77,240,115,360,117.3C480,120,600,96,720,80C840,64,960,56,1080,64C1200,72,1320,96,1380,108L1440,120L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </section>
      {/* Flexible Solutions Section */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center overflow-visible">
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden" style={{ borderRadius: 20, background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 60%, #2dd4bf 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center pt-10">Flexible Solutions for Your Evolving Needs</h2>
          <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center pb-10">
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaRegCheckCircle className="text-green-300 text-3xl" />
              Scalable services that grow with your business
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <FaRegListAlt className="text-yellow-200 text-3xl" />
              Transparent pricing with no hidden fees
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, -8, 0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FaRegClock className="text-blue-200 text-3xl" />
              Start with basic services and add features as needed
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, 8, 0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            >
              <FaRegSmile className="text-pink-200 text-3xl" />
              Friendly support for every stage of your business
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <FaHeadset className="text-teal-200 text-3xl" />
              24/7 availability for urgent calls
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full"
              animate={{ y: [0, 6, 0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            >
              <FaPhoneAlt className="text-indigo-200 text-3xl" />
              Seamless integration with your workflow
            </motion.div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col md:flex-row items-center justify-center gap-12 rounded-2xl my-12 overflow-hidden">
        {/* Text/values column - now first */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg order-1 md:order-none pl-4 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Your Trust, Our Priority</h2>
          <ul className="grid grid-cols-1 gap-4 mb-8 w-full">
            <li className="flex items-center gap-3 text-lg text-blue-800 font-semibold bg-white/80 rounded-xl px-5 py-3 shadow">
              <FaRegCheckCircle className="text-teal-500 text-2xl" /> Strict confidentiality protocols
            </li>
            <li className="flex items-center gap-3 text-lg text-blue-800 font-semibold bg-white/80 rounded-xl px-5 py-3 shadow">
              <FaRegSmile className="text-blue-400 text-2xl" /> Regular quality assessments
            </li>
            <li className="flex items-center gap-3 text-lg text-blue-800 font-semibold bg-white/80 rounded-xl px-5 py-3 shadow">
              <FaRegListAlt className="text-orange-400 text-2xl" /> Clear, concise reporting
            </li>
          </ul>
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); setModalOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-bold text-lg shadow hover:from-blue-800 hover:to-blue-600 transition mt-4"
            whileHover={{ scale: 1.08 }}
            animate={{ scale: [1, 1.05, 1], boxShadow: [
              '0 0 0px #3B82F6',
              '0 0 16px #3B82F6',
              '0 0 0px #3B82F6'
            ] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaPhoneAlt className="text-white text-base" /> Experience the AlphaLinkCall Difference
          </motion.a>
        </div>
        {/* Image column - now second */}
        <div className="flex-1 flex justify-center items-center order-2 md:order-none">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Trust and Partnership"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover border-4 border-blue-100"
          />
        </div>
      </section>
      </div>
    </div>
  );
}
