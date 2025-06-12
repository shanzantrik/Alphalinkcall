/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaAmbulance, FaPhoneSlash } from 'react-icons/fa';
import Vapi from '@vapi-ai/web';

interface VapiAgentModalProps {
  open: boolean;
  onClose: () => void;
}

interface TranscriptMessage {
  role: 'user' | 'assistant';
  content: string;
}

const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY as string;
const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID as string;

export default function VapiAgentModal({ open, onClose }: VapiAgentModalProps) {
  const vapiRef = useRef<unknown>(null);
  const [callActive, setCallActive] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  // Start/stop call on modal open/close
  useEffect(() => {
    // Vapi types are not available, so we cast to any for all usages below
    const vapi = vapiRef.current as any;
    if (open) {
      if (!vapi) {
        vapiRef.current = new (Vapi as any)(apiKey);
        const vapiInstance = vapiRef.current as any;
        vapiInstance.on('call-start', () => setCallActive(true));
        vapiInstance.on('call-end', () => {
          setCallActive(false);
          setTranscript([]);
        });
        vapiInstance.on('message', (message: { type: string; role: 'user' | 'assistant'; transcript: string }) => {
          if (message.type === 'transcript') {
            setTranscript((prev) => [...prev, { role: message.role, content: message.transcript }]);
          }
        });
        vapiInstance.on('error', () => setCallActive(false));
        vapiInstance.start(assistantId);
      } else {
        vapi.start(assistantId);
      }
    } else {
      if (vapi) vapi.stop();
      setCallActive(false);
      setTranscript([]);
    }
  }, [open]);

  const handleDisconnect = () => {
    // Vapi types are not available, so we cast to any
    const vapi = vapiRef.current as any;
    if (vapi) vapi.stop();
    setCallActive(false);
    setTranscript([]);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleDisconnect}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all border-2 border-[#0054ab]">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0054ab] to-[#0074d9]">
                  <FaAmbulance className="text-[#f48e1b] text-2xl" />
                  <Dialog.Title as="h3" className="text-lg font-bold text-white">
                    AlphaLink Ambulance Assistance
                  </Dialog.Title>
                </div>
                {/* Transcript/chat area */}
                <div className="px-6 py-4 h-64 overflow-y-auto bg-[#f5faff]">
                  {transcript.length === 0 && (
                    <div className="text-center text-[#0054ab] opacity-60 mt-16">Waiting for conversation...</div>
                  )}
                  {transcript.map((msg, idx) => (
                    <div key={idx} className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-[#f48e1b] text-[#0054ab]' : 'bg-white text-[#0054ab] border border-[#0054ab]'}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  <div ref={transcriptEndRef} />
                </div>
                {/* Controls */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#eaf4fb] border-t border-[#0054ab]">
                  <span className={`font-semibold ${callActive ? 'text-green-600' : 'text-red-600'}`}>
                    {callActive ? 'Call Active' : 'Call Ended'}
                  </span>
                  <button
                    onClick={handleDisconnect}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f48e1b] to-[#ffd580] text-[#0054ab] rounded-full font-bold shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#f48e1b]"
                  >
                    <FaPhoneSlash className="text-[#0054ab]" /> Disconnect
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
