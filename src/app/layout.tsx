"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt } from "react-icons/fa";
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
              <span className="inline-block align-middle" style={{ width: 32, height: 32 }}>
                <svg viewBox="-3.84 -3.84 71.68 71.68" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#1c398e" stroke="#1c398e" strokeWidth="0.704">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs><style>{`.cls-1{fill:#1c398e;}`}</style></defs>
                    <title></title>
                    <path className="cls-1" d="M32,0A32,32,0,1,0,43.35,61.93a1,1,0,0,0,.58-1.29,1,1,0,0,0-1.28-.58A30,30,0,0,1,4,42.86C9.29,50.15,19.13,54.77,31.14,55A4,4,0,0,0,35,58h2a4,4,0,0,0,0-8H35a4,4,0,0,0-3.85,3C16.93,52.73,6,46,2.83,36.05A23.81,23.81,0,0,0,11.19,40a42.85,42.85,0,0,0,1.26,5.2.51.51,0,0,0,.48.35l.15,0a.51.51,0,0,0,.33-.63,39,39,0,0,1-1.15-4.62A67.75,67.75,0,0,0,22,42H22c.23,2.14.53,4.2.91,6.14a.51.51,0,0,0,.49.4h.1a.49.49,0,0,0,.39-.59,84,84,0,0,1-1.41-15.4H26a.5.5,0,0,0,0-1H22.5c0-3,.17-5.83.45-8.55,2.72-.28,5.59-.43,8.55-.45V30a.5.5,0,0,0,1,0V22.5c3,0,5.84.17,8.56.45.16,1.64.29,3.33.36,5.07a.5.5,0,0,0,.52.48.51.51,0,0,0,.48-.52c-.07-1.7-.19-3.34-.34-4.92a65.28,65.28,0,0,1,9.85,1.82,44.44,44.44,0,0,1,.56,6.62H51a.5.5,0,0,0,0,1H62a30,30,0,0,1-1.93,10.15,1,1,0,0,0,.58,1.29,1,1,0,0,0,1.29-.59A32,32,0,0,0,32,0Zm3,52h2a2,2,0,0,1,0,4H35a2,2,0,0,1,0-4ZM60.64,23.07a26.4,26.4,0,0,0-10.89-8.82A26.4,26.4,0,0,0,40.93,3.36,30.14,30.14,0,0,1,60.64,23.07Zm1.15,5.46c-1.79-1.76-4.91-3.29-9-4.47a40.31,40.31,0,0,0-2.44-8.41c5.45,2.77,9.48,6.75,11.2,11.33C61.66,27.49,61.73,28,61.79,28.53ZM2,31.5c0-.42,0-.84.05-1.26,1.22-1.95,4.45-3.71,9-5.06a44.8,44.8,0,0,0-.5,6.32Zm.2-3c.06-.52.13-1,.22-1.55,1.72-4.58,5.75-8.56,11.2-11.33a40.31,40.31,0,0,0-2.44,8.41C7.12,25.24,4,26.77,2.21,28.53ZM15,15a38.57,38.57,0,0,1,8.77-2.72A66.56,66.56,0,0,0,22,22a66.56,66.56,0,0,0-9.75,1.74A38.57,38.57,0,0,1,15,15Zm.66-1.36C18.42,8.18,22.4,4.15,27,2.43c.51-.09,1-.16,1.55-.22-1.76,1.79-3.29,4.91-4.47,9A40.31,40.31,0,0,0,15.65,13.63ZM30.24,2.06c.42,0,.84,0,1.26-.05v8.5a44.8,44.8,0,0,0-6.32.5C26.53,6.51,28.29,3.28,30.24,2.06ZM32.5,2c.42,0,.84,0,1.25.05,2,1.23,3.72,4.44,5.07,9a44.8,44.8,0,0,0-6.32-.5Zm3,.2c.52.06,1,.13,1.55.22,4.58,1.72,8.56,5.75,11.33,11.2a40.93,40.93,0,0,0-8.41-2.44C38.76,7.1,37.22,4,35.47,2.21ZM23.07,3.36a26.4,26.4,0,0,0-8.82,10.89A26.4,26.4,0,0,0,3.36,23.07,30.14,30.14,0,0,1,23.07,3.36ZM2.33,34.13c-.11-.54-.2-1.08-.26-1.63h8.44A45.29,45.29,0,0,0,11,38.82C6.77,37.54,3.7,35.91,2.33,34.13ZM21.93,41a64.2,64.2,0,0,1-9.86-1.83,43.71,43.71,0,0,1-.56-6.63h10C21.52,35.38,21.66,38.22,21.93,41ZM21.5,31.5h-10a44.44,44.44,0,0,1,.56-6.62,65.28,65.28,0,0,1,9.85-1.82C21.66,25.73,21.52,28.56,21.5,31.5Zm1.56-9.58a65.28,65.28,0,0,1,1.82-9.85,44.44,44.44,0,0,1,6.62-.56v10C28.56,21.52,25.73,21.66,23.06,21.92Zm9.44-.42v-10a44.68,44.68,0,0,1,6.63.56A66.31,66.31,0,0,1,41,21.92C38.27,21.66,35.44,21.52,32.5,21.5ZM42,22a65.84,65.84,0,0,0-1.74-9.75A38.57,38.57,0,0,1,49,15a38.57,38.57,0,0,1,2.72,8.77A66.56,66.56,0,0,0,42,22Zm11,3.16c4.5,1.35,7.73,3.11,8.95,5.06,0,.42,0,.84.05,1.26h-8.5A44.8,44.8,0,0,0,53,25.18Z"></path>
                    <path className="cls-1" d="M32.19,42.41A11.09,11.09,0,0,1,47.88,58.09a1,1,0,0,0,.71,1.7,1,1,0,0,0,.71-.3A13.09,13.09,0,0,0,30.79,41a1,1,0,0,0,0,1.41A1,1,0,0,0,32.19,42.41Z"></path>
                    <path className="cls-1" d="M52,38.25a17.15,17.15,0,0,1,.09,24.08,1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0,19.1,19.1,0,0,0-27-27A1,1,0,1,0,28,38.16,17.15,17.15,0,0,1,52,38.25Z"></path>
                    <path className="cls-1" d="M43.65,55.27a1,1,0,0,0,1.42,0,7.09,7.09,0,0,0-10-10,1,1,0,1,0,1.39,1.45,5.09,5.09,0,0,1,7.19,7.19A1,1,0,0,0,43.65,55.27Z"></path>
                  </g>
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
              <span className="text-2xl font-bold text-white mb-2 flex items-center gap-2"><FaPhoneAlt className="text-blue-500" /> AlphaLinkCall</span>
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
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 border-t border-gray-800 pt-4 gap-2">
            <span>&copy; {new Date().getFullYear()} AlphaLinkCall. All rights reserved.</span>
            <span>Designed & built with Next.js & Tailwind CSS</span>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
