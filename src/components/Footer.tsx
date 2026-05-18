'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, Linkedin, MapPin, Copy, Check } from 'lucide-react';
import DiamondOrnament from '@/components/DiamondOrnament';
import CornerBrackets from '@/components/CornerBrackets';
import Button from '@/components/Button';

type Method = {
  Icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  copyValue?: string;
  external?: boolean;
};

export default function Footer() {
  // Detect touch-primary devices so we keep native tel:/mailto: on mobile.
  const [isTouch, setIsTouch] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const methods: Method[] = [
    {
      Icon: Phone,
      label: isTouch ? 'Call' : 'Phone',
      value: '336.682.7447',
      href: 'tel:+13366827447',
      copyValue: '336.682.7447'
    },
    {
      Icon: Mail,
      label: 'Email',
      value: 'saratavery@gmail.com',
      href: 'mailto:saratavery@gmail.com',
      copyValue: 'saratavery@gmail.com'
    },
    {
      Icon: Linkedin,
      label: 'Connect',
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saratavery/',
      external: true
    }
  ];

  const handleCopy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / blocked clipboard permission.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* noop */ }
      document.body.removeChild(ta);
    }
    setCopied(label);
    window.setTimeout(() => {
      setCopied((c) => (c === label ? null : c));
    }, 2000);
  };

  return (
    <footer>
      {/* Contact Section */}
      <section id="contact" className="relative bg-brand-cream border-t border-brand-green/20 py-10 md:py-24 px-4 md:overflow-hidden">
        <CornerBrackets variant="diagonal" />
        {/* Mobile-only corner brackets (top-left + top-right) */}
        <div aria-hidden="true" className="pointer-events-none absolute top-6 left-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40" />
          <div className="w-px h-10 bg-brand-green/40" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-6 right-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40 ml-auto" />
          <div className="w-px h-10 bg-brand-green/40 ml-auto" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-20 items-center">

            {/* Left: heading + intro + CTA */}
            <div className="text-center lg:text-left">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4">
                Get in Touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.05] mb-6">
                Let&rsquo;s start a<br />conversation.
              </h2>
              <DiamondOrnament className="lg:mx-0 mb-6 lg:mb-8 max-w-sm" />
              <p className="hidden lg:block font-serif text-base lg:text-lg text-brand-navy/85 leading-relaxed mb-8 max-w-xl lg:mx-0 mx-auto">
                Whether you&rsquo;re planning a year-end appeal, preparing for a capital campaign, or rethinking your donor communications, I&rsquo;d love to hear about your work. Reach out and I&rsquo;ll be in touch shortly.
              </p>
              <div className="hidden lg:block">
                <Button to="#" className="!py-4 !px-10">
                  Schedule a Consultation
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-4 lg:mt-8 justify-center lg:justify-start text-brand-navy/60">
                <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <p className="font-serif italic text-sm">
                  Winston-Salem, NC — serving nonprofits nationwide.
                </p>
              </div>
            </div>

            {/* Right: contact methods stack */}
            <div className="flex flex-col gap-4">
              {methods.map((method) => {
                const { Icon, label, value, href, copyValue, external } = method;
                const isCopyable = !!copyValue && !isTouch;
                const isCopied = copied === label;

                const sharedClasses = "group relative flex items-center gap-5 bg-white border border-brand-green/30 hover:border-brand-green px-6 py-5 transition-colors duration-300 text-left w-full";

                const inner = (
                  <>
                    <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center border border-brand-navy/30 overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-brand-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                      />
                      <Icon className="relative z-10 w-5 h-5 text-brand-navy group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-green mb-0.5 flex items-center gap-1.5">
                        {label}
                        {isCopyable && (
                          <span
                            aria-hidden="true"
                            className={`inline-flex items-center gap-1 font-sans text-[9px] tracking-[0.15em] normal-case transition-colors duration-300 ${
                              isCopied ? 'text-brand-green' : 'text-brand-navy/40 group-hover:text-brand-navy/70'
                            }`}
                          >
                            <span className="inline-block w-px h-2 bg-current/40" />
                            {isCopied ? (
                              <>
                                <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-2.5 h-2.5" strokeWidth={2} />
                                Click to copy
                              </>
                            )}
                          </span>
                        )}
                      </span>
                      <span className="font-serif text-brand-navy text-lg leading-tight truncate">
                        {value}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="ml-auto font-serif text-brand-navy/40 group-hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 ease-out text-xl"
                    >
                      →
                    </span>
                  </>
                );

                if (isCopyable) {
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleCopy(label, copyValue!)}
                      aria-label={`Copy ${label.toLowerCase()} ${copyValue} to clipboard`}
                      className={sharedClasses}
                    >
                      {inner}
                    </button>
                  );
                }

                return (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={sharedClasses}
                  >
                    {inner}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Strip */}
      <div className="bg-brand-navy text-white py-6 text-center">
        <p className="font-sans text-sm tracking-wider opacity-80 uppercase">
          © 2026 Sara Tavery | Philanthropy Communications. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
