"use client";
import { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

const countries = [
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
];

const servicesList = [
  "24/7 Call Answering",
  "After-Hours Support",
  "Overflow Call Handling",
  "CRM Integration",
  "Appointment Booking",
  "Emergency Dispatch",
  "Others",
];

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState(countries[0].code);
  const [services, setServices] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: "" });
  const [captchaValid, setCaptchaValid] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Generate a simple math captcha
  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, answer: "" });
  }, [showThankYou]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setEmailError("");
    setPhoneError("");

    // Validate captcha
    if (parseInt(captcha.answer) !== captcha.a + captcha.b) {
      setCaptchaValid(false);
      return;
    }
    setCaptchaValid(true);

    // Validate email and phone
    const formData = new FormData(form.current!);
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (!validatePhone(phone)) {
      setPhoneError("Please enter a 10-digit phone number.");
      valid = false;
    }
    if (!valid) {
      return;
    }

    // Prepare data for QContact API
    const payload = {
      name: formData.get("name"),
      email: email,
      phone: `${country}${phone}`,
      services: services.join(", "),
      message: formData.get("message"),
      country: country,
      timestamp: new Date().toISOString(),
      source: "Alphalink Call Website"
    };

    try {
      const response = await fetch('https://mediresponse.qcontact.com/api/v2/webhooks/dynamic/n4q4pox9qw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setShowThankYou(true);
        if (form.current) form.current.reset();
        setServices([]);
        setAgreed(false);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb]">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-lg w-full text-center border-2 border-[#eaf4fb]">
          <h2 className="text-3xl font-extrabold text-[#0054ab] mb-4">Thank You!</h2>
          <p className="text-lg text-[#0054ab] mb-4">Your message has been received. We&apos;ll be in touch soon.</p>
          <button onClick={() => setShowThankYou(false)} className="mt-6 px-8 py-3 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold text-lg shadow hover:scale-105 transition">Back to Contact</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f5faff] to-[#eaf4fb] w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <h1 className="text-5xl font-extrabold text-[#0054ab] mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-[#0054ab] mb-8 text-center">Ready to chat? Call, email, or use the form below for a free consultation. No hard sell, just honest advice from real people who get your business.</p>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 mb-8 border-2 border-[#eaf4fb]">
          <div>
            <label htmlFor="name" className="block text-[#0054ab] font-semibold mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full border border-[#eaf4fb] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#0054ab] font-semibold mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-[#eaf4fb] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b]"
              onBlur={e => setEmailError(validateEmail(e.target.value) ? "" : "Please enter a valid email address.")}
            />
            {emailError && <span className="text-red-600 text-sm">{emailError}</span>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-[#0054ab] font-semibold mb-1">Phone</label>
            <div className="flex w-full">
              <select
                id="country"
                name="country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="min-w-[120px] max-w-[160px] border border-[#eaf4fb] rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b] bg-[#f5faff] text-[#0054ab]"
                style={{ borderRight: 0 }}
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-[#eaf4fb] rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b]"
                style={{ borderLeft: 0 }}
                onBlur={e => setPhoneError(validatePhone(e.target.value) ? "" : "Please enter a 10-digit phone number.")}
              />
            </div>
            {phoneError && <span className="text-red-600 text-sm">{phoneError}</span>}
          </div>
          <div>
            <label className="block text-[#0054ab] font-semibold mb-1">Services Interested In</label>
            <div className="flex flex-wrap gap-3">
              {servicesList.map(service => (
                <label key={service} className="flex items-center gap-2 text-[#0054ab]">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={services.includes(service)}
                    onChange={e => {
                      if (e.target.checked) setServices([...services, service]);
                      else setServices(services.filter(s => s !== service));
                    }}
                    className="accent-[#f48e1b]"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[#0054ab] font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full border border-[#eaf4fb] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b] text-black" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              required
              className="accent-[#f48e1b]"
            />
            <label htmlFor="agree" className="text-[#0054ab]">I agree to the <a href="/terms" className="underline text-[#f48e1b]">terms and conditions</a></label>
          </div>
          <div>
            <label className="block text-[#0054ab] font-semibold mb-1">Captcha: What is {captcha.a} + {captcha.b}?</label>
            <input
              type="text"
              value={captcha.answer}
              onChange={e => setCaptcha({ ...captcha, answer: e.target.value })}
              required
              className="w-32 border border-[#eaf4fb] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f48e1b]"
            />
            {!captchaValid && <span className="text-red-600 ml-2">Incorrect answer</span>}
          </div>
          <button
            type="submit"
            className="relative w-full inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold text-lg shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b] overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(244, 142, 27, 0.18)' }}
          >
            {/* Animated Shine Overlay */}
            <span className="absolute inset-0 pointer-events-none">
              <span className="block w-full h-full animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" style={{ backgroundSize: '200% 100%' }}></span>
            </span>
            {/* Calendar Icon SVG (blue, 24x24) */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="relative z-10">
              <rect x="3" y="5" width="18" height="16" rx="3" fill="#fff"/>
              <rect x="3" y="5" width="18" height="16" rx="3" stroke="#f48e1b" strokeWidth="1.5"/>
              <rect x="7" y="2" width="2" height="4" rx="1" fill="#0054ab"/>
              <rect x="15" y="2" width="2" height="4" rx="1" fill="#0054ab"/>
              <rect x="7" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
              <rect x="11" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
              <rect x="15" y="10" width="2" height="2" rx="1" fill="#0054ab"/>
              <rect x="7" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
              <rect x="11" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
              <rect x="15" y="14" width="2" height="2" rx="1" fill="#0054ab"/>
            </svg>
            <span className="relative z-10">Send Message</span>
          </button>
          {status !== "" && <div className="text-center text-green-600 font-semibold mt-2">{status}</div>}
        </form>
        {/* Map & Address */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow mb-6">
            <iframe
              title="AlphaLink Location"
              src="https://www.google.com/maps?q=1+York+St,+Sydney+NSW+2000,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-[#f5faff] rounded-xl p-6 w-full text-center shadow border-2 border-[#eaf4fb]">
            <h2 className="text-2xl font-bold text-[#0054ab] mb-2">Empowering Your Business, One Call at a Time</h2>
            <p className="text-[#0054ab] mb-1">1 York St, Sydney NSW 2000, Australia</p>
            <p className="text-[#0054ab] mb-1">Email: <a href="mailto:info@alphalinkcall.com.au" className="text-[#f48e1b] underline">info@alphalinkcall.com.au</a></p>
            <p className="text-[#0054ab]">Phone: <a href="tel:+61489262774" className="text-[#f48e1b] underline">+61-489262774</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
