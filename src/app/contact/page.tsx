"use client";
import { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

const countries = [
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+91", name: "India", flag: "🇮🇳" },
];

const servicesList = [
  "24/7 Call Answering",
  "After-Hours Support",
  "Overflow Call Handling",
  "CRM Integration",
  "Appointment Booking",
  "Emergency Dispatch",
  "Others",
];

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "243133331",
          formId: "7d8cacf1-2204-4991-b30a-0917de21e6d8",
          region: "na2",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <h1 className="text-5xl font-extrabold text-[#0054ab] mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-[#0054ab] mb-8 text-center">Ready to chat? Call, email, or use the form below for a free consultation. No hard sell, just honest advice from real people who get your business.</p>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* HubSpot Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 mb-8 border-2 border-[#eaf4fb]">
          <div id="hubspotForm" className="w-full max-w-xl" />
        </div>
        {/* Map & Address */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow mb-6">
            <iframe
              title="AlphaLink Location"
              src="https://www.google.com/maps?q=1+York+St,+Sydney+NSW+2000,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-[#f5faff] rounded-xl p-6 w-full text-center shadow border-2 border-[#eaf4fb]">
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">Empowering Your Business, One Call at a Time</h2>
            <p className="text-[#0054ab] mb-1">1 York St, Sydney NSW 2000, Australia</p>
            <p className="text-[#0054ab] mb-1">Email: <a href="mailto:info@alphalinkcall.com.au" className="text-[#f48e1b] underline">info@alphalinkcall.com.au</a></p>
            <p className="text-[#0054ab]">Phone: <a href="tel:+61414626109" className="text-[#f48e1b] underline">+61 414 626 109</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
