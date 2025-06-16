import Breadcrumbs from "../../components/Breadcrumbs";

export default function Privacy() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Privacy Policy</h1>
      <div className="max-w-2xl mx-auto text-gray-700 space-y-6">
        <p>Alphalink respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and disclose your information in accordance with the Australian Privacy Principles.</p>
        <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">What We Collect</h2>
        <p>We may collect your name, contact details, business information, and service preferences when you engage with us or submit a form on our website.</p>
        <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">How We Use It</h2>
        <p>Your information is used to provide our services, improve our offerings, and communicate with you. We may send updates, respond to enquiries, or provide service notifications.</p>
        <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">Data Storage</h2>
        <p>All data is stored securely, and access is limited to authorised personnel. We do not sell or share your information with third parties unless required by law or as part of our service delivery.</p>
        <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">Cookies</h2>
        <p>Our website uses basic cookies for performance and analytics. You can control cookie preferences in your browser settings.</p>
        <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-2">Access & Corrections</h2>
        <p>You may request access to the personal information we hold about you or ask for corrections at any time by contacting us at <a href="mailto:info@alphalinkcall.com.au" className="text-blue-700 underline">info@alphalinkcall.com.au</a>.</p>
      </div>
    </div>
  );
}
