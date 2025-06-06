"use client";
import { useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-100 px-4 py-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <span className="mb-2 md:mb-0">
        This website uses cookies to enhance the user experience.{' '}
        <Link href="/privacy" className="underline text-blue-300">Learn more</Link>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="mt-2 md:mt-0 px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold shadow hover:from-blue-800 hover:to-blue-600 transition"
      >
        Accept
      </button>
    </div>
  );
}
