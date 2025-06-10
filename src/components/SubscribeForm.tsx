"use client";
import React, { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your subscribe logic here
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="text-green-400">Thank you for subscribing!</div>;
  }

  return (
    <form
      className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md mt-6"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-r from-[#0054ab] to-[#0074d9] text-white rounded-full font-bold shadow hover:from-[#003366] hover:to-[#0054ab] transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b]"
      >
        Subscribe
      </button>
    </form>
  );
}
