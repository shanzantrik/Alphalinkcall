"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaComments, FaHeadset, FaEnvelope, FaRegSmile, FaRegClock, FaRegCheckCircle, FaRegListAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import CalendlyModal from "../components/CalendlyModal";
import Image from "next/image";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FAQAccordion from "../components/FAQAccordion";
import VapiAgentModal from "../components/VapiAgentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] flex flex-col items-center justify-center px-4 pt-10 w-full">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/15551730423?text=Hello%20AlphaLink%20Support"
            target="_blank"
            rel="noopener noreferrer"
        className="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 bg-[#f48e1b] hover:bg-[#FFD580] text-[#0054ab] rounded-full shadow-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-all group"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />
        <span className="absolute bottom-20 right-0 bg-[#0054ab] text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">Chat with us on WhatsApp</span>
      </a>
      {/* Floating Book a Free Consultation Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed z-50 top-1/3 right-4 md:right-10 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full shadow-lg flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 font-bold text-lg animate-bounce hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-[#f48e1b] overflow-hidden"
        style={{ boxShadow: '0 8px 32px 0 rgba(244, 142, 27, 0.18)' }}
        aria-label="Book a Free Consultation"
      >
        {/* Animated Shine Overlay */}
        <span className="absolute inset-0 pointer-events-none">
          <span className="block w-full h-full animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" style={{ backgroundSize: '200% 100%' }}></span>
        </span>
        <span className="inline-flex items-center justify-center text-2xl relative z-10">
          {/* Calendar Icon SVG */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="16" rx="3" fill="#fff"/>
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#f48e1b" strokeWidth="1.5"/>
            <rect x="7" y="2" width="2" height="4" rx="1" fill="#f48e1b"/>
            <rect x="15" y="2" width="2" height="4" rx="1" fill="#f48e1b"/>
            <rect x="7" y="10" width="2" height="2" rx="1" fill="#f48e1b"/>
            <rect x="11" y="10" width="2" height="2" rx="1" fill="#f48e1b"/>
            <rect x="15" y="10" width="2" height="2" rx="1" fill="#f48e1b"/>
            <rect x="7" y="14" width="2" height="2" rx="1" fill="#f48e1b"/>
            <rect x="11" y="14" width="2" height="2" rx="1" fill="#f48e1b"/>
            <rect x="15" y="14" width="2" height="2" rx="1" fill="#f48e1b"/>
          </svg>
        </span>
        <span className="hidden md:inline relative z-10">Book a Free Consultation</span>
      </button>
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <VapiAgentModal open={agentModalOpen} onClose={() => setAgentModalOpen(false)} />
      <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-10 py-20 md:py-32">
        <motion.div
          className="flex-1 flex flex-col items-start justify-center text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#f48e1b] text-[#0054ab] rounded-full font-semibold text-sm shadow">
            <FaPhoneAlt className="text-[#0054ab]" /> AlphaLink
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0054ab] mb-6 leading-tight drop-shadow-sm">
            Empowering Your Business, <span className="text-[#f48e1b]">One Call at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0054ab] mb-8 max-w-xl">
            At AlphaLink, every call is a chance to strengthen your customer relationships. We extend your brand&apos;s commitment to exceptional service, ensuring each caller receives the attention they deserve.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0054ab] to-[#0074d9] text-white rounded-full font-bold text-lg shadow hover:from-[#003366] hover:to-[#0054ab] transition"
          >
            <FaPhoneAlt className="text-[#f48e1b] text-base" /> Get in Touch
          </button>
          {/* Divider for spacing */}
          <div className="my-6" />
        </motion.div>
        {/* Animated Hero Visual - Responsive */}
        <motion.div className="flex-1 flex flex-col justify-center items-center relative min-h-[300px] md:min-h-[400px] w-full max-w-xs md:max-w-none mx-auto">
          {/* Chat bubble with text and animated dotted arrow above the concentric circle */}
          <div className="w-full flex flex-col items-center relative z-20" style={{ marginBottom: '0', marginTop: '-2.5rem', position: 'absolute', left: 0, right: 0, top: '-70px' }}>
            {/* Chat bubble */}
            <div className="bg-white border-2 border-[#f48e1b] rounded-2xl px-4 sm:px-6 py-3 shadow-lg flex items-center max-w-xs sm:max-w-md mx-auto mb-0 relative" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
              <div className="flex flex-col sm:flex-row w-full text-center sm:text-left gap-1">
                <div className="flex-1 text-[#0054ab]">Click below to talk to our</div>
                <div className="flex-1 text-[#f48e1b] sm:text-right font-bold">24/7 AlphaLink Assistant</div>
              </div>
            </div>
            {/* Raindrop arrows animation */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center" style={{ zIndex: 10, pointerEvents: 'none' }}>
              {[0, 1, 2, 3, 4].map(i => (
                <motion.svg
                  key={i}
                  width="18" height="18" viewBox="0 0 18 18" fill="none"
                  style={{ position: 'absolute', left: `${i * 18 - 36}px`, top: 0 }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 90, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <polygon points="9,14 3,6 15,6" fill="#0054ab" />
                </motion.svg>
              ))}
            </div>
            {/* Animated audio graph below the falling arrows */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[110px] flex flex-row items-end gap-1" style={{ zIndex: 10, pointerEvents: 'none' }}>
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <motion.div
                  key={i}
                  className="w-2 rounded bg-[#f48e1b]"
                  initial={{ height: 10 + i * 4 }}
                  animate={{ height: [20, 40, 15, 35, 25, 45, 20][i % 7] }}
                  transition={{
                    duration: 0.7 + i * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: i * 0.1,
                  }}
                  style={{ minHeight: 10, maxHeight: 50 }}
                />
              ))}
            </div>
          </div>
          {/* Concentric Circles as background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[220px] h-[220px] md:w-[340px] md:h-[340px]">
            <svg width="100%" height="100%" viewBox="0 0 340 340" fill="none">
              <circle cx="170" cy="170" r="160" stroke="#60A5FA" strokeWidth="2" opacity="0.2" />
              <circle cx="170" cy="170" r="120" stroke="#3B82F6" strokeWidth="2" opacity="0.3" />
              <circle cx="170" cy="170" r="80" stroke="#2563EB" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
          {/* Telephony Icons overlayed at top, right, bottom, left of the main circle - Responsive positions */}
          <>
            {/* Top */}
            <motion.div
              className="absolute z-10"
              style={{ left: '50%', top: '10%', transform: 'translate(-50%, 0)' }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
            >
              <FaPhoneAlt className="text-[#0054ab] text-2xl md:text-3xl drop-shadow" />
            </motion.div>
            {/* Right */}
            <motion.div
              className="absolute z-10"
              style={{ right: '10%', top: '50%', transform: 'translate(0, -50%)' }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
            >
              <FaComments className="text-[#f48e1b] text-2xl md:text-3xl drop-shadow" />
            </motion.div>
            {/* Bottom */}
            <motion.div
              className="absolute z-10"
              style={{ left: '50%', bottom: '10%', transform: 'translate(-50%, 0)' }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
            >
              <FaHeadset className="text-[#0054ab] text-2xl md:text-3xl drop-shadow" />
            </motion.div>
            {/* Left */}
            <motion.div
              className="absolute z-10"
              style={{ left: '10%', top: '50%', transform: 'translate(0, -50%)' }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.6 }}
            >
              <FaEnvelope className="text-[#f48e1b] text-2xl md:text-3xl drop-shadow" />
            </motion.div>
          </>
          {/* Human Figure in Center - now clickable to open modal */}
          <motion.button
            type="button"
            onClick={() => setAgentModalOpen(true)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f3f4f6] rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#f48e1b] cursor-pointer"
            style={{ width: 120, height: 120 }}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: [0.9, 1, 0.98, 1], opacity: [0.8, 1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            aria-label="Try AlphaLink AI Assistant"
          >
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none" width="80" height="80">
              <ellipse fill="#f48e1b" cx="20.1" cy="65" rx="6.4" ry="6.4"></ellipse>
              <ellipse fill="#f48e1b" cx="99.9" cy="65" rx="6.4" ry="6.4"></ellipse>
              <path fill="#f48e1b" d="M94.1,53.1C93.6,34.8,78.5,20,60,20c-18.5,0-33.5,14.7-34.1,33.1h-4C22.5,32.6,39.3,16,60,16c20.7,0,37.5,16.5,38.1,37.1H94.1z"></path>
              <path fill="#3F3F3F" d="M69.4,101.8c-2.4,0-4-0.1-4.2-0.1l0.2-2.2c0.2,0,23,1.7,25.8-7.7c3-10.5,1.5-21.5,1.5-21.6l2.2-0.3c0.1,0.4,1.6,11.6-1.6,22.5C90.7,100.7,76.6,101.8,69.4,101.8z"></path>
              <path fill="#f48e1b" d="M70.4,104H60.2c-0.9,0-1.6-0.7-1.6-1.6v-4c0-0.9,0.7-1.6,1.6-1.6h10.2c0.9,0,1.6,0.7,1.6,1.6v4C72,103.3,71.3,104,70.4,104z"></path>
              <path fill="#438DFF" d="M28.5,51h-7.1c-2.2,0-4,2-4,4.5v17.9c0,2.5,1.8,4.5,4,4.5h7.1c1.5,0,2.8-1.4,2.8-3.1V54C31.2,52.3,30,51,28.5,51z"></path>
              <path fill="#438DFF" d="M98.7,51h-7.1c-1.5,0-2.8,1.4-2.8,3.1v20.6c0,1.7,1.2,3.1,2.8,3.1h7.1c2.2,0,4-2,4-4.5v-18C102.6,52.9,100.8,51,98.7,51z"></path>
              <path fill="#438DFF" d="M68.4,70.8l-1.7,1.7c-2.6,2.6-5.2,4.3-7.3,2.2L47.2,62.5c-2.2-2.2-0.5-4.7,2.2-7.3l1.7-1.7l-8.3-8.3l-2.4,2.4c-4.3,4.3-4.3,11.1,0,15.3L59,81.5c4.3,4.3,11.1,4.3,15.3,0l2.4-2.4L68.4,70.8z"></path>
              <path fill="#3D81E2" d="M52.5,52.7l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C53.3,54.9,53.3,53.6,52.5,52.7z"></path>
              <path fill="#3D81E2" d="M78,78.2l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C78.8,80.3,78.8,79,78,78.2z"></path>
              <path fill="#438DFF" d="M58.9,54.3c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c3-0.7,6,0.2,8.1,2.3s3,5.2,2.3,8.1c-0.2,0.9-1,1.3-1.9,1.2c-0.9-0.2-1.3-1-1.2-1.9c0.4-1.9-0.1-3.9-1.5-5.3c-1.4-1.4-3.3-2-5.3-1.5C59.8,54.8,59.3,54.6,58.9,54.3z"></path>
              <path fill="#438DFF" d="M57.6,48.2c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c5.1-1.2,10.3,0.3,13.9,4c3.7,3.7,5.2,8.8,4,13.9c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c0.9-4-0.3-8.1-3.1-11s-7-4.1-11-3.1C58.5,48.7,58,48.6,57.6,48.2z"></path>
              <path fill="#438DFF" d="M56.3,42.1c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c7.1-1.6,14.5,0.5,19.7,5.6c5.2,5.2,7.3,12.5,5.6,19.7c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c1.4-6.1-0.4-12.4-4.8-16.7c-4.4-4.4-10.7-6.2-16.7-4.8C57.2,42.7,56.6,42.5,56.3,42.1z"></path>
            </svg>
          </motion.button>

          {/* Animated Marquee Text */}
          <motion.div className="w-full absolute left-0 -bottom-12 md:-bottom-16 overflow-hidden" initial={false} animate={{}}>
            <motion.div
              className="flex gap-8 md:gap-16 text-[#0054ab] font-bold text-base md:text-lg whitespace-nowrap"
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
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
        {/* Services */}
        <Link href="/services" className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border-2 border-[#eaf4fb]">
          <div className="relative w-full h-56">
            <Image src="/alpha4.webp" alt="Services" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
          </div>
          <div className="p-6 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">Call Answering Services</h2>
            <p className="text-[#0054ab] mb-4 flex-1">Never miss a customer call. 24/7 professional call answering for plumbers, electricians, and trades.</p>
            <span className="text-[#0054ab] font-semibold group-hover:text-[#f48e1b] group-hover:underline">Learn more →</span>
          </div>
        </Link>
        {/* Technology */}
        <Link href="/technology" className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border-2 border-[#eaf4fb]">
          <div className="relative w-full h-56">
            <Image src="/alpha5.webp" alt="Smart Call Routing" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
          </div>
          <div className="p-6 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">Smart Call Routing</h2>
            <p className="text-[#0054ab] mb-4 flex-1">AI-powered call routing and message delivery. Get urgent jobs to the right team, fast.</p>
            <span className="text-[#0054ab] font-semibold group-hover:text-[#f48e1b] group-hover:underline">Learn more →</span>
          </div>
        </Link>
        {/* Industries */}
        <Link href="/industries" className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border-2 border-[#eaf4fb]">
          <div className="relative w-full h-56">
            <Image src="/alpha6.webp" alt="Industries" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
          </div>
          <div className="p-6 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">For Trades & Services</h2>
            <p className="text-[#0054ab] mb-4 flex-1">Specialized support for plumbers, electricians, HVAC, and home service pros. Industry-focused solutions.</p>
            <span className="text-[#0054ab] font-semibold group-hover:text-[#f48e1b] group-hover:underline">See how it works →</span>
          </div>
        </Link>
      </section>

      {/* Value Props Section */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-white rounded-[20px] border-2 border-[#eaf4fb]" style={{ borderRadius: 20 }}>
        {/* Top Wavy SVG */}
        <div className="absolute top-0 left-0 w-full -z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path fill="#3B82F6" fillOpacity="0.18" d="M0,80L60,74.7C120,69,240,59,360,64C480,69,600,91,720,101.3C840,112,960,112,1080,101.3C1200,91,1320,69,1380,58.7L1440,48L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        {/* Animated Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-[#0054ab] mb-12 text-center z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose AlphaLink for Your Business?
        </motion.h2>
        {/* Testimonial Carousel */}
        <TestimonialCarousel />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10 px-4 md:px-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 border-2 border-[#0054ab]">
            <FaRegSmile className="text-[#f48e1b] text-4xl mb-2" />
            <h2 className="text-xl font-bold text-[#0054ab]">Personalized Service</h2>
            <p className="text-[#0054ab]">Agents briefed on your business, products, and values. Every call handled with care, following your guidelines.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 border-2 border-[#0054ab]">
            <FaRegClock className="text-[#f48e1b] text-4xl mb-2" />
            <h2 className="text-xl font-bold text-[#0054ab]">Reliable Support</h2>
            <p className="text-[#0054ab]">Extended availability beyond regular hours. Efficient call handling and overflow support during peak periods.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 border-2 border-[#0054ab]">
            <FaRegListAlt className="text-[#f48e1b] text-4xl mb-2" />
            <h2 className="text-xl font-bold text-[#0054ab]">Accurate Information</h2>
            <p className="text-[#0054ab]">Agents trained to collect essential information efficiently. Detailed message taking and quick escalation of urgent matters.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 border-2 border-[#0054ab]">
            <FaRegCheckCircle className="text-[#f48e1b] text-4xl mb-2" />
            <h2 className="text-xl font-bold text-[#0054ab]">Technology Enhanced</h2>
            <p className="text-[#0054ab]">Efficient call routing, secure message delivery, and user-friendly interfaces for easy management of your account.</p>
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
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ borderRadius: 20, background: 'linear-gradient(135deg, #003366 0%, #0054ab 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center pt-10">Flexible Solutions for Your Evolving Needs</h2>
          <div className="w-full flex flex-col gap-8 items-center pb-10 px-4 md:px-16">
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, -10, 0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaRegCheckCircle className="text-[#f48e1b] text-3xl" />
              Scalable services that grow with your business
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <FaRegListAlt className="text-[#f48e1b] text-3xl" />
              Transparent pricing with no hidden fees
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, -8, 0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FaRegClock className="text-[#f48e1b] text-3xl" />
              Start with basic services and add features as needed
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, 8, 0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            >
              <FaRegSmile className="text-[#f48e1b] text-3xl" />
              Friendly support for every stage of your business
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <FaHeadset className="text-[#f48e1b] text-3xl" />
              24/7 availability for urgent calls
            </motion.div>
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-xl shadow text-white text-lg font-semibold w-full border border-[#f48e1b]"
              animate={{ y: [0, 6, 0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            >
              <FaPhoneAlt className="text-[#f48e1b] text-3xl" />
              Seamless integration with your workflow
            </motion.div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-white to-[#f5faff] flex flex-col md:flex-row items-center justify-center gap-12 rounded-2xl my-12 overflow-hidden">
        {/* Text/values column - now first */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg order-1 md:order-none pl-4 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0054ab] mb-6">Your Trust, Our Priority</h2>
          <ul className="grid grid-cols-1 gap-4 mb-8 w-full">
            <li className="flex items-center gap-3 text-lg text-white font-semibold bg-[#0054ab]/80 rounded-xl px-5 py-3 shadow border border-[#f48e1b]">
              <FaRegCheckCircle className="text-[#f48e1b] text-2xl" /> Strict confidentiality protocols
            </li>
            <li className="flex items-center gap-3 text-lg text-white font-semibold bg-[#0054ab]/80 rounded-xl px-5 py-3 shadow border border-[#f48e1b]">
              <FaRegSmile className="text-[#f48e1b] text-2xl" /> Regular quality assessments
            </li>
            <li className="flex items-center gap-3 text-lg text-white font-semibold bg-[#0054ab]/80 rounded-xl px-5 py-3 shadow border border-[#f48e1b]">
              <FaRegListAlt className="text-[#f48e1b] text-2xl" /> Clear, concise reporting
            </li>
          </ul>
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); setModalOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0054ab] to-[#0074d9] text-white rounded-full font-bold text-lg shadow hover:from-[#003366] hover:to-[#0054ab] transition mt-4 focus:ring-4 focus:ring-[#f48e1b]"
            whileHover={{ scale: 1.08 }}
            animate={{ scale: [1, 1.05, 1], boxShadow: [
              '0 0 0px #f48e1b',
              '0 0 16px #f48e1b',
              '0 0 0px #f48e1b'
            ] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaPhoneAlt className="text-[#f48e1b] text-base" /> Experience the AlphaLink Difference
          </motion.a>
        </div>
        {/* Image column - now second */}
        <div className="flex-1 flex justify-center items-center order-2 md:order-none">
          <Image
            src="/alpha1.webp"
            alt="Trust and Partnership"
            width={600}
            height={256}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover border-4 border-[#f48e1b]"
          />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full max-w-3xl mx-auto my-16 px-4">

        <FAQAccordion />
      </section>
      </div>
    </div>
  );
}
