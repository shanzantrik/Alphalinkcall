"use client";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CalendlyModal from "../../components/CalendlyModal";
import Image from "next/image";

const team = [
  {
    name: "Hadley Shapiro",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80",
    bio: "Hadley is the visionary behind AlphaLinkCall, blending years of business leadership with a passion for customer experience and operational excellence.",
  },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center">About AlphaLinkCall</h1>
      {/* Aussie-based, Globally Fulfilled */}
      <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
        <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80" alt="Australia" width={500} height={333} className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Aussie-based, Globally Fulfilled</h2>
          <p className="text-gray-700 mb-4">Aussie-based, globally fulfilled model. Built by business owners for business owners. Our team has call centre, trade, health, and ops backgrounds. We know your pain and we&apos;ve built around it.</p>
        </div>
      </section>
      {/* What Makes Us Different */}
      <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">What Makes Us Different</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Aussie-managed, culturally aligned service</li>
            <li>Flexible scale, use us when you need us</li>
            <li>No hiring, no long contracts</li>
            <li>Human, friendly, and fast</li>
            <li>Starting from just $499/month, vs $10K+ DIY</li>
          </ul>
        </div>
        <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80" alt="Teamwork" width={500} height={333} className="rounded-xl shadow-lg w-full max-w-xs object-cover flex-1" />
      </section>
      {/* Pricing Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Simple, Transparent Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Fractional Plan</h3>
            <div className="text-4xl font-extrabold text-blue-700 mb-2">$499<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-1 text-center">
              <li>Part-time or on-demand</li>
              <li>24/7 coverage</li>
              <li>No long contracts</li>
              <li>All core features</li>
            </ul>
            <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-blue-700 text-white rounded-full font-bold shadow hover:bg-blue-800 transition">Start Free Consultation</button>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center border-2 border-blue-400 scale-105">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Full Service</h3>
            <div className="text-4xl font-extrabold text-blue-700 mb-2">$999<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-1 text-center">
              <li>Dedicated team</li>
              <li>Custom integrations</li>
              <li>Priority support</li>
              <li>All features included</li>
            </ul>
            <button onClick={() => setModalOpen(true)} className="px-6 py-3 bg-blue-700 text-white rounded-full font-bold shadow hover:bg-blue-800 transition">Book a Demo</button>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
        <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80" alt="Our Story" width={500} height={333} className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Story</h2>
          <p className="text-gray-700 mb-4">Founded by customer service professionals, AlphaLinkCall was created to bridge the gap between technology and the human touch. We believe every call is an opportunity to build trust and loyalty.</p>
        </div>
      </section>
      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <Image src={member.img} alt={member.name} width={112} height={112} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h3 className="text-lg font-bold text-blue-800 mb-1">{member.name}</h3>
              <span className="text-blue-600 font-semibold mb-2">{member.role}</span>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action */}
      <div className="text-center mt-10">
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block px-8 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition"
        >
          Start Your Free Consultation
        </button>
      </div>
    </div>
  );
}
