"use client";

export default function CalendlyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative animate-fadeIn border-4 border-[#f48e1b]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Book a Free Consultation</h2>
        {/* Calendly Inline Widget */}
        <div className="w-full h-[600px]">
          <iframe
            src="https://calendly.com/hadleyshapiro/30min?primary_color=1c398e&hide_gdpr_banner=1"
            title="Schedule a call with Google Meet"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl w-full h-full"
            allow="camera; microphone; fullscreen;"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
