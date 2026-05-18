'use client';

import { useEffect, useState } from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import DiamondOrnament from './DiamondOrnament';

const BOOKING_EMBED_URL = process.env.NEXT_PUBLIC_BOOKING_EMBED_URL ?? '';

export const BOOKING_MODAL_EVENT = 'open-booking-modal';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsEntering(true)));
    };
    window.addEventListener(BOOKING_MODAL_EVENT, open);
    return () => window.removeEventListener(BOOKING_MODAL_EVENT, open);
  }, []);

  const close = () => {
    setIsEntering(false);
    window.setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a consultation"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close booking dialog"
        onClick={close}
        className={`absolute inset-0 bg-brand-navy/70 backdrop-blur-md transition-opacity duration-300 ease-out ${
          isEntering ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] bg-brand-cream border border-brand-navy/10 shadow-[0_30px_80px_-20px_rgba(15,46,57,0.55),0_8px_24px_rgba(15,46,57,0.25)] flex flex-col transition-all duration-300 ease-out ${
          isEntering ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'
        }`}
      >
        {/* Corner brackets */}
        <div aria-hidden="true" className="pointer-events-none absolute top-4 left-4">
          <div className="w-8 h-px bg-brand-green/50" />
          <div className="w-px h-8 bg-brand-green/50" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-4 right-4">
          <div className="w-8 h-px bg-brand-green/50 ml-auto" />
          <div className="w-px h-8 bg-brand-green/50 ml-auto" />
        </div>

        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center text-brand-navy/50 hover:text-brand-navy bg-brand-cream/80 hover:bg-white border border-transparent hover:border-brand-navy/10 transition-all duration-200"
        >
          <X className="w-4 h-4" strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="px-6 md:px-10 pt-10 pb-6 text-center border-b border-brand-navy/10">
          <p className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-brand-green mb-3">
            Schedule a Consultation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight tracking-[-0.01em] mb-4">
            Let&rsquo;s find a time.
          </h2>
          <DiamondOrnament className="w-[55%] max-w-[12rem] mx-auto mb-4" />
          <p className="font-serif text-sm md:text-base text-brand-navy/75 leading-relaxed italic max-w-md mx-auto">
            Pick a time that works for you. We&rsquo;ll talk about what you&rsquo;re working on and whether we&rsquo;re the right fit.
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-hidden bg-white">
          {BOOKING_EMBED_URL ? (
            <iframe
              src={BOOKING_EMBED_URL}
              title="Schedule a consultation"
              className="block w-full h-full min-h-[480px] border-0"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 min-h-[320px]">
              <div className="w-14 h-14 flex items-center justify-center border border-brand-green/40 mb-5">
                <Calendar className="w-6 h-6 text-brand-green" strokeWidth={1.5} />
              </div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-green/80 mb-3">
                Booking Calendar
              </p>
              <p className="font-serif text-lg md:text-xl text-brand-navy leading-snug max-w-sm mb-2">
                The scheduling widget will appear here.
              </p>
              <p className="font-serif text-sm text-brand-navy/55 leading-relaxed max-w-sm">
                You&rsquo;ll be able to pick a day and time directly from this window.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 md:px-10 py-4 bg-brand-cream border-t border-brand-navy/10 flex items-center justify-center gap-2 text-brand-navy/55">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
          <p className="font-serif italic text-xs md:text-sm">
            Winston-Salem, NC &mdash; serving nonprofits nationwide.
          </p>
        </div>
      </div>
    </div>
  );
}
