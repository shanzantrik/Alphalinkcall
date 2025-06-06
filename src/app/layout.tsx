"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import CookieConsent from "@/components/CookieConsent";
import SubscribeForm from "../components/SubscribeForm";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full bg-gradient-to-b from-blue-50 to-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
          <div className="w-full flex justify-between items-center py-6 px-4 md:px-10">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-800">
              <span className="inline-block align-middle" style={{ width: 40, height: 40 }}>
                <svg viewBox="0 0 120 120" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="40">
                  <ellipse fill="#FFB562" cx="20.1" cy="65" rx="6.4" ry="6.4"></ellipse>
                  <ellipse fill="#FFB562" cx="99.9" cy="65" rx="6.4" ry="6.4"></ellipse>
                  <path fill="#FFB562" d="M94.1,53.1C93.6,34.8,78.5,20,60,20c-18.5,0-33.5,14.7-34.1,33.1h-4C22.5,32.6,39.3,16,60,16c20.7,0,37.5,16.5,38.1,37.1H94.1z"></path>
                  <path fill="#3F3F3F" d="M69.4,101.8c-2.4,0-4-0.1-4.2-0.1l0.2-2.2c0.2,0,23,1.7,25.8-7.7c3-10.5,1.5-21.5,1.5-21.6l2.2-0.3c0.1,0.4,1.6,11.6-1.6,22.5C90.7,100.7,76.6,101.8,69.4,101.8z"></path>
                  <path fill="#FFB562" d="M70.4,104H60.2c-0.9,0-1.6-0.7-1.6-1.6v-4c0-0.9,0.7-1.6,1.6-1.6h10.2c0.9,0,1.6,0.7,1.6,1.6v4C72,103.3,71.3,104,70.4,104z"></path>
                  <path fill="#438DFF" d="M28.5,51h-7.1c-2.2,0-4,2-4,4.5v17.9c0,2.5,1.8,4.5,4,4.5h7.1c1.5,0,2.8-1.4,2.8-3.1V54C31.2,52.3,30,51,28.5,51z"></path>
                  <path fill="#438DFF" d="M98.7,51h-7.1c-1.5,0-2.8,1.4-2.8,3.1v20.6c0,1.7,1.2,3.1,2.8,3.1h7.1c2.2,0,4-2,4-4.5v-18C102.6,52.9,100.8,51,98.7,51z"></path>
                  <path fill="#438DFF" d="M68.4,70.8l-1.7,1.7c-2.6,2.6-5.2,4.3-7.3,2.2L47.2,62.5c-2.2-2.2-0.5-4.7,2.2-7.3l1.7-1.7l-8.3-8.3l-2.4,2.4c-4.3,4.3-4.3,11.1,0,15.3L59,81.5c4.3,4.3,11.1,4.3,15.3,0l2.4-2.4L68.4,70.8z"></path>
                  <path fill="#3D81E2" d="M52.5,52.7l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C53.3,54.9,53.3,53.6,52.5,52.7z"></path>
                  <path fill="#3D81E2" d="M78,78.2l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C78.8,80.3,78.8,79,78,78.2z"></path>
                  <path fill="#438DFF" d="M58.9,54.3c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c3-0.7,6,0.2,8.1,2.3s3,5.2,2.3,8.1c-0.2,0.9-1,1.3-1.9,1.2c-0.9-0.2-1.3-1-1.2-1.9c0.4-1.9-0.1-3.9-1.5-5.3c-1.4-1.4-3.3-2-5.3-1.5C59.8,54.8,59.3,54.6,58.9,54.3z"></path>
                  <path fill="#438DFF" d="M57.6,48.2c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c5.1-1.2,10.3,0.3,13.9,4c3.7,3.7,5.2,8.8,4,13.9c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c0.9-4-0.3-8.1-3.1-11s-7-4.1-11-3.1C58.5,48.7,58,48.6,57.6,48.2z"></path>
                  <path fill="#438DFF" d="M56.3,42.1c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c7.1-1.6,14.5,0.5,19.7,5.6c5.2,5.2,7.3,12.5,5.6,19.7c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c1.4-6.1-0.4-12.4-4.8-16.7c-4.4-4.4-10.7-6.2-16.7-4.8C57.2,42.7,56.6,42.5,56.3,42.1z"></path>
                </svg>
              </span>
              AlphaLinkCall
            </Link>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 group"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`block w-7 h-1 rounded-full bg-blue-800 mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-1 rounded-full bg-blue-800 mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-1 rounded-full bg-blue-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            <nav className="hidden md:flex items-center gap-8 text-base font-bold">
              <Link href="/services" className="hover:text-blue-600 text-black transition">Services</Link>
              <Link href="/technology" className="hover:text-blue-600 text-black transition">Technology</Link>
              <Link href="/industries" className="hover:text-blue-600 text-black transition">Industries</Link>
              <Link href="/about" className="hover:text-blue-600 text-black transition">About</Link>
              <Link href="/blog" className="hover:text-blue-600 text-black transition">Blog</Link>
              <Link href="/contact" className="ml-4 flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-bold shadow hover:from-blue-800 hover:to-blue-600 transition">
                <FaPhoneAlt className="text-white text-base" /> Contact
              </Link>
            </nav>
            <div className="hidden md:flex gap-4 ml-6 text-xl">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaFacebook /></a>
            </div>
          </div>
          <div
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden={!menuOpen}
          ></div>
          <aside
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
            style={{ WebkitOverflowScrolling: 'touch' }}
            aria-hidden={!menuOpen}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 focus:outline-none z-50"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-blue-800 rotate-45 absolute"></span>
              <span className="block w-6 h-0.5 bg-blue-800 -rotate-45 absolute"></span>
            </button>
            <nav className="flex flex-col gap-6 mt-24 px-8 text-lg font-bold">
              <Link href="/services" className="hover:text-blue-600 text-black transition" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/technology" className="hover:text-blue-600 text-black transition" onClick={() => setMenuOpen(false)}>Technology</Link>
              <Link href="/industries" className="hover:text-blue-600 text-black transition" onClick={() => setMenuOpen(false)}>Industries</Link>
              <Link href="/about" className="hover:text-blue-600 text-black transition" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/blog" className="hover:text-blue-600 text-black transition" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-bold shadow hover:from-blue-800 hover:to-blue-600 transition mt-2" onClick={() => setMenuOpen(false)}>
                <FaPhoneAlt className="text-white text-base" /> Contact
              </Link>
            </nav>
            <div className="flex justify-center gap-6 text-2xl mt-10 mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900"><FaFacebook /></a>
            </div>
          </aside>
        </header>
        <main className="pt-28 bg-gradient-to-b from-blue-100 via-white to-blue-50 w-full">
          <div className="w-full px-4 md:px-10">{children}</div>
        </main>
        <footer className="w-full bg-gray-900 border-t border-gray-800 mt-16 py-10 px-4 flex flex-col items-center gap-8 text-gray-200 relative">
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="inline-block align-middle" style={{ width: 32, height: 32 }}>
                  <svg viewBox="0 0 120 120" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32">
                    <ellipse fill="#FFB562" cx="20.1" cy="65" rx="6.4" ry="6.4"></ellipse>
                    <ellipse fill="#FFB562" cx="99.9" cy="65" rx="6.4" ry="6.4"></ellipse>
                    <path fill="#FFB562" d="M94.1,53.1C93.6,34.8,78.5,20,60,20c-18.5,0-33.5,14.7-34.1,33.1h-4C22.5,32.6,39.3,16,60,16c20.7,0,37.5,16.5,38.1,37.1H94.1z"></path>
                    <path fill="#3F3F3F" d="M69.4,101.8c-2.4,0-4-0.1-4.2-0.1l0.2-2.2c0.2,0,23,1.7,25.8-7.7c3-10.5,1.5-21.5,1.5-21.6l2.2-0.3c0.1,0.4,1.6,11.6-1.6,22.5C90.7,100.7,76.6,101.8,69.4,101.8z"></path>
                    <path fill="#FFB562" d="M70.4,104H60.2c-0.9,0-1.6-0.7-1.6-1.6v-4c0-0.9,0.7-1.6,1.6-1.6h10.2c0.9,0,1.6,0.7,1.6,1.6v4C72,103.3,71.3,104,70.4,104z"></path>
                    <path fill="#438DFF" d="M28.5,51h-7.1c-2.2,0-4,2-4,4.5v17.9c0,2.5,1.8,4.5,4,4.5h7.1c1.5,0,2.8-1.4,2.8-3.1V54C31.2,52.3,30,51,28.5,51z"></path>
                    <path fill="#438DFF" d="M98.7,51h-7.1c-1.5,0-2.8,1.4-2.8,3.1v20.6c0,1.7,1.2,3.1,2.8,3.1h7.1c2.2,0,4-2,4-4.5v-18C102.6,52.9,100.8,51,98.7,51z"></path>
                    <path fill="#438DFF" d="M68.4,70.8l-1.7,1.7c-2.6,2.6-5.2,4.3-7.3,2.2L47.2,62.5c-2.2-2.2-0.5-4.7,2.2-7.3l1.7-1.7l-8.3-8.3l-2.4,2.4c-4.3,4.3-4.3,11.1,0,15.3L59,81.5c4.3,4.3,11.1,4.3,15.3,0l2.4-2.4L68.4,70.8z"></path>
                    <path fill="#3D81E2" d="M52.5,52.7l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C53.3,54.9,53.3,53.6,52.5,52.7z"></path>
                    <path fill="#3D81E2" d="M78,78.2l-8.8-8.8c-0.8-0.8-2.1-0.8-2.9,0l-1.5,1.5c-0.8,0.8-0.8,2.1,0,2.9l8.8,8.8c0.8,0.8,2.1,0.8,2.9,0l1.5-1.5C78.8,80.3,78.8,79,78,78.2z"></path>
                    <path fill="#438DFF" d="M58.9,54.3c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c3-0.7,6,0.2,8.1,2.3s3,5.2,2.3,8.1c-0.2,0.9-1,1.3-1.9,1.2c-0.9-0.2-1.3-1-1.2-1.9c0.4-1.9-0.1-3.9-1.5-5.3c-1.4-1.4-3.3-2-5.3-1.5C59.8,54.8,59.3,54.6,58.9,54.3z"></path>
                    <path fill="#438DFF" d="M57.6,48.2c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c5.1-1.2,10.3,0.3,13.9,4c3.7,3.7,5.2,8.8,4,13.9c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c0.9-4-0.3-8.1-3.1-11s-7-4.1-11-3.1C58.5,48.7,58,48.6,57.6,48.2z"></path>
                    <path fill="#438DFF" d="M56.3,42.1c-0.2-0.2-0.4-0.5-0.4-0.7c-0.2-0.9,0.3-1.6,1.2-1.9c7.1-1.6,14.5,0.5,19.7,5.6c5.2,5.2,7.3,12.5,5.6,19.7c-0.2,0.9-1,1.4-1.9,1.2c-0.9-0.2-1.4-1-1.2-1.9c1.4-6.1-0.4-12.4-4.8-16.7c-4.4-4.4-10.7-6.2-16.7-4.8C57.2,42.7,56.6,42.5,56.3,42.1z"></path>
                  </svg>
                </span>
                AlphaLinkCall
              </span>
              <span className="text-gray-400 text-sm mb-2">Empowering Your Business, One Call at a Time</span>
              <span className="text-gray-400 text-sm mb-2">123 Main St, Suite 100, Your City, ST 12345</span>
              <span className="text-gray-400 text-sm mb-2">Email: <a href="mailto:info@AlphaLinkCall.com" className="hover:text-blue-400">info@AlphaLinkCall.com</a></span>
              <span className="text-gray-400 text-sm mb-2">Phone: <a href="tel:+1234567890" className="hover:text-blue-400">(123) 456-7890</a></span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex justify-center gap-6 text-2xl mb-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <SubscribeForm />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-8">
            <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link href="/technology" className="hover:text-blue-400 transition">Technology</Link>
            <Link href="/industries" className="hover:text-blue-400 transition">Industries</Link>
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-full w-12 h-12 shadow-lg transition mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Scroll to top"
            style={{ position: 'relative', top: 0 }}
          >
            <FaArrowUp className="text-2xl" />
          </button>
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 border-t border-gray-800 pt-4 gap-2">
            <span>&copy; {new Date().getFullYear()} AlphaLinkCall. All rights reserved.</span>
            <span>Designed with ❤️ by <a href="https://www.linkedin.com/in/hadley-shapiro/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Hadley Shapiro</a></span>
          </div>
        </footer>
        <div className="fixed bottom-6 left-6 z-50 max-w-xs w-full">
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
