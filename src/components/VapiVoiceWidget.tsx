import React, { useRef } from 'react';
import { FaAmbulance } from 'react-icons/fa';
// @ts-expect-error: Vapi types may not be available if package lacks types
import Vapi from '@vapi-ai/web';

interface VapiVoiceWidgetProps {
  apiKey: string;
  assistantId: string;
}

const VapiVoiceWidget: React.FC<VapiVoiceWidgetProps> = ({ apiKey, assistantId }) => {
  // Use unknown and cast to any if Vapi type is not available
  const vapiRef = useRef<unknown>(null);

  const handleCall = () => {
    // Cast to any once for all usages below (due to missing types)
    const vapi = vapiRef.current as any;
    if (!vapi) {
      vapiRef.current = new (Vapi as any)(apiKey);
      const vapiInstance = vapiRef.current as any;
      vapiInstance.on('call-start', () => {
        // You can show a toast or loading indicator
      });
      vapiInstance.on('call-end', () => {
        // Hide loading indicator
      });
      vapiInstance.on('error', () => {
        // Show error message
      });
      (vapiRef.current as any).start(assistantId);
    } else {
      vapi.start(assistantId);
    }
  };

  return (
    <button
      onClick={handleCall}
      className="flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg shadow-lg bg-gradient-to-r from-[#0054ab] to-[#0074d9] text-white hover:from-[#003366] hover:to-[#0054ab] transition focus:outline-none focus:ring-4 focus:ring-[#f48e1b]"
      style={{ boxShadow: '0 4px 16px 0 rgba(0, 84, 171, 0.18)' }}
      aria-label="Call AlphaLink Ambulance Assistance"
      type="button"
    >
      <FaAmbulance className="text-[#f48e1b] text-2xl drop-shadow" />
      <span className="relative z-10">Call AlphaLink Ambulance Assistance</span>
    </button>
  );
};

export default VapiVoiceWidget;
