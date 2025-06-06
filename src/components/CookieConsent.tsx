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
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 items-start border border-gray-200">
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-gray-800">We use cookies</span>
          <button onClick={handleAccept} className="ml-4 text-sm text-blue-700 hover:underline font-bold">Accept</button>
        </div>
        <p className="text-gray-600 text-sm">This website uses cookies to ensure you get the best experience on our website. <a href="/privacy" className="text-blue-700 underline">Learn more</a></p>
      </div>
    )
  );
}
