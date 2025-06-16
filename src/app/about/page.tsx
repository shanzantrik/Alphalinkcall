"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import Image from "next/image";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <h1 className="text-5xl font-extrabold text-[#0054ab] mb-8 text-center">About AlphaLink</h1>
      {/* Aussie-based, Globally Fulfilled + What Makes Us Different Combined Section */}
      <section className="mb-16 w-full flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left: Texts stacked */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">Aussie-based, Globally Fulfilled</h2>
            <p className="text-[#0054ab] mb-4">Aussie-based, globally fulfilled model. Built by business owners for business owners. Our team has call centre, trade, health, and ops backgrounds. We know your pain and we&apos;ve built around it.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">What Makes Us Different</h2>
            <ul className="list-disc pl-6 text-[#0054ab] mb-4 space-y-2">
              <li>Aussie-managed, culturally aligned service</li>
              <li>Flexible scale, use us when you need us</li>
              <li>No hiring, no long contracts</li>
              <li>Human, friendly, and fast</li>
              <li>Starting from just $199/month, vs $10K+ DIY</li>
            </ul>
          </div>
        </div>
        {/* Right: Connected Image Grid */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[340px] h-[400px] flex flex-col gap-4" id="outer">
            {/* Top Image Pane */}
            <div className="relative w-full h-1/2 overflow-hidden shadow-lg rounded-t-[20px] rounded-br-[60px] border-4 border-[#f48e1b] animate-gold-glow">
              <Image src="/about2.webp" alt="Australia" fill className="object-cover w-full h-full" style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 60, borderBottomLeftRadius: 0 }} />
            </div>
            {/* Bottom Image Pane */}
            <div className="relative w-full h-1/2 overflow-hidden shadow-lg rounded-b-[20px] rounded-tl-[60px] border-4 border-[#f48e1b] animate-gold-glow">
              <Image src="/about1.webp" alt="Teamwork" fill className="object-cover w-full h-full" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 60, borderTopRightRadius: 0 }} />
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0054ab] mb-6 text-center">Simple, Transparent Pricing</h2>
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-[#f48e1b] animate-gold-glow max-w-md w-full">
            <h3 className="text-xl font-bold text-[#0054ab] mb-2">Fractional Plan</h3>
            <div className="text-4xl font-extrabold text-[#0054ab] mb-2">$199<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-[#0054ab] mb-6 space-y-1 text-center">
              <li>Part-time or on-demand</li>
              <li>24/7 coverage</li>
              <li>No long contracts</li>
              <li>All core features</li>
            </ul>
            <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b]">Start Free Consultation</button>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="mb-24 flex flex-col md:flex-row gap-16 items-center">
        <Image src="/story.webp" alt="Our Story" width={670} height={400} className="rounded-2xl shadow-2xl w-full max-w-xl object-cover flex-1" />
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-[#0054ab] mb-4">Our Story</h2>
          <p className="text-[#0054ab] mb-4 text-lg leading-relaxed">
            Alphalink was built to help small business owners stay focused on what they do best — while we handle the calls, bookings, and admin behind the scenes.<br /><br />
            We’re not a call centre. We’re a partner — giving you the front-desk presence of a much larger operation, without the overhead.<br /><br />
            With trained operators based in South Africa and a focus on clear, reliable communication, we provide tailored client support for trades, health, property, and professional industries across Australia.<br /><br />
            Whether you’re a solo tradie or a national team, we help you sound sharp, stay responsive, and never miss a beat.
          </p>
        </div>
      </section>
      {/* Call to Action */}
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
          <span className="relative z-10">Start Your Free Consultation</span>
        </button>
      </div>
    </div>
  );
}
