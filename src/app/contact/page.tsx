"use client";
import { useRef, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    emailjs
      .sendForm(
        "service_xxx", // Replace with your EmailJS service ID
        "template_xxx", // Replace with your EmailJS template ID
        form.current!,
        "user_xxx" // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          if (form.current) form.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">Ready to chat? Call, email, or use the form below for a free consultation. No hard sell, just honest advice from real people who get your business.</p>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 mb-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black" />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition">Send Message</button>
          {status !== "" && <div className="text-center text-green-600 font-semibold mt-2">{status}</div>}
        </form>
        {/* Map & Address */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow mb-6">
            <iframe
              title="AlphaLinkCall Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363159047!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6e0b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 w-full text-center shadow">
            <h2 className="text-xl font-bold text-blue-800 mb-2">AlphaLinkCall HQ</h2>
            <p className="text-gray-700 mb-1">123 Main St, Suite 100</p>
            <p className="text-gray-700 mb-1">Melbourne, VIC 3000, Australia</p>
            <p className="text-gray-700 mb-1">Email: <a href="mailto:info@innocall.com" className="text-blue-700 underline">info@innocall.com</a></p>
            <p className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-blue-700 underline">(123) 456-7890</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
