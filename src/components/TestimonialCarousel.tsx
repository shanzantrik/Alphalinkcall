"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah P.",
    image: "/client1.webp",
    review:
      "AlphaLink has transformed our business. We never miss a call, and our customers always mention how friendly the agents are!",
    stars: 5,
    company: "PlumbRight Solutions",
  },
  {
    name: "James L.",
    image: "/client2.webp",
    review:
      "The technology and reporting are top-notch. We get urgent jobs routed instantly. Highly recommend for any trade business!",
    stars: 5,
    company: "ElectroFix Pros",
  },
  {
    name: "Lee S.",
    image: "/client3.webp",
    review:
      "Professional, reliable, and always available. Our clients love the personal touch. The best call service we've used!",
    stars: 5,
    company: "HVAC Heroes",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative flex items-center justify-center">
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="absolute left-0 z-10 bg-white rounded-full shadow p-2 text-blue-700 hover:bg-blue-50 transition -translate-y-1/2 top-1/2"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 ${
                i === index ? "scale-100" : "scale-95"
              } ${i === index ? "z-10" : "z-0"}`}
              style={{ display: i === index || (i === (index + 1) % testimonials.length) || (i === (index + testimonials.length - 1) % testimonials.length) ? "block" : "none" }}
            >
              <div className="mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-blue-100 shadow"
                />
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(t.stars)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-center mb-3">“{t.review}”</p>
              <div className="font-bold text-blue-900">{t.name}</div>
              <div className="text-sm text-blue-500">{t.company}</div>
            </div>
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="absolute right-0 z-10 bg-white rounded-full shadow p-2 text-blue-700 hover:bg-blue-50 transition -translate-y-1/2 top-1/2"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              i === index ? "bg-blue-600 border-blue-600 scale-125" : "bg-white border-blue-300"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
