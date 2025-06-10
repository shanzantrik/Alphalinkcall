"use client";
import { useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    setShow(false);
  };

  if (!visible) return null;
  return (
    show && (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 items-start border-2 border-[#0054ab]">
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-[#0054ab]">We use cookies</span>
          <button onClick={handleAccept} className="ml-4 text-sm bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] px-4 py-2 rounded-full font-bold shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#f48e1b]">Accept</button>
        </div>
        <p className="text-[#0054ab] text-sm">This website uses cookies to ensure you get the best experience on our website. <a href="/privacy" className="text-[#f48e1b] underline font-semibold hover:text-[#0054ab]">Learn more</a></p>
      </div>
    )
  );
}
