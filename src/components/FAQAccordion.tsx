"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Alphalink offer?",
    answer:
      "We provide outsourced call answering, message-taking, smart call routing, and client engagement services tailored for small businesses, trades, and service industries.",
  },
  {
    question: "Is Alphalink a call centre?",
    answer:
      "We’re a little different. We’re a smart, modern answering service designed to sound like part of your business — not a traditional call centre.",
  },
  {
    question: "Can I forward my mobile or landline to Alphalink?",
    answer:
      "Yes! Most clients forward their existing number to us. We’ll give you clear instructions and set-up support.",
  },
  {
    question: "Will my callers know it’s not me answering?",
    answer:
      "No — we answer in your business name with scripts you approve. It feels seamless for your clients.",
  },
  {
    question: "How quickly do you answer calls?",
    answer:
      "On average, within 3 rings. Fast, professional, and reliable — every time.",
  },
  {
    question: "Can you handle bookings or just take messages?",
    answer:
      "We can do both. Need us to log a job, book an appointment, or escalate urgent issues? Just let us know — we’ll build it into your workflow.",
  },
  {
    question: "Is it month-to-month or locked-in contracts?",
    answer:
      "Month-to-month. No long-term tie-ins. Scale up or down as you need.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We support a wide range — trades, medical, legal, consulting, real estate, and more. If your phone rings, we can help.",
  },
  {
    question: "Where are your operators based?",
    answer:
      "All our team are trained and based in South Africa, providing high-quality support for Australian businesses at affordable rates.",
  },
  {
    question: "How do I get started?",
    answer:
      "Easy — hit “Get in Touch”, and we’ll book a short call to understand your needs and set you up in no time.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="divide-y divide-blue-100 rounded-2xl bg-white shadow-lg">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <button
              className="w-full text-left px-6 py-5 focus:outline-none focus:bg-blue-50 flex items-center justify-between group transition"
              aria-expanded={open === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className="font-semibold text-blue-800 group-hover:text-blue-600 text-lg">{faq.question}</span>
              <span className="ml-4">
                {open === idx ? (
                  <FaChevronUp className="text-[#f48e1b]" />
                ) : (
                  <FaChevronDown className="text-[#0054ab]" />
                )}
              </span>
            </button>
            {open === idx && (
              <div
                id={`faq-panel-${idx}`}
                className="px-6 pb-5 text-gray-700 text-base transition-all duration-300 ease-in-out"
                aria-hidden={open !== idx}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
