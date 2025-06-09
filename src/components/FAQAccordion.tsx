"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We specialize in supporting trades and home services, including plumbers, electricians, HVAC, and other service professionals. Our solutions are tailored for small businesses and growing teams.",
  },
  {
    question: "How quickly are calls answered?",
    answer:
      "Our agents answer calls promptly, typically within a few rings. We ensure your customers never wait long and always receive a professional, friendly response.",
  },
  {
    question: "Is your service available 24/7?",
    answer:
      "Yes! We offer true 24/7 call answering, including after-hours, weekends, and holidays, so you never miss an important call.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy—just book a free consultation or contact us. We'll discuss your needs, set up your account, and have you up and running quickly.",
  },
  {
    question: "Can you handle urgent or emergency calls?",
    answer:
      "Absolutely. Our team is trained to identify urgent calls and escalate them according to your instructions, ensuring critical jobs are never missed.",
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
              <span className="ml-4 text-blue-400">
                {open === idx ? <FaChevronUp /> : <FaChevronDown />}
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
