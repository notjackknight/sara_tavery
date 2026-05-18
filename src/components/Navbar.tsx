"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone } from 'lucide-react';
import { BOOKING_MODAL_EVENT } from './BookingModal';

type NavLink = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    {
      to: '/#services',
      label: 'SERVICES',
      children: [
        { to: '/services/writing', label: 'Writing Services' },
        { to: '/services/fractional-fundraising', label: 'Fractional Fundraising' }
      ]
    },
    { to: '/portfolio', label: 'PORTFOLIO' },
    { to: '/#about', label: 'ABOUT' }
  ];

  const ctaClasses = "group relative inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.15em] text-xs py-2.5 md:py-[0.7rem] px-5 md:px-6 border overflow-hidden isolate bg-brand-green text-white border-brand-green transition-colors duration-300 ease-out hover:text-brand-navy hover:border-white before:pointer-events-none before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100";

  return (
    <header className="bg-brand-navy w-full sticky top-0 z-50">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group"
              onClick={(e) => {
                setIsOpen(false);
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0 });
                }
              }}
            >
              <h1 className="font-serif text-base sm:text-lg md:text-xl text-white tracking-[0.15em] uppercase flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 group-hover:opacity-90 transition-opacity">
                <span>SARA TAVERY</span>
                <span className="hidden md:block w-px h-6 bg-brand-green"></span>
                <span className="text-xs sm:text-sm md:text-xl md:font-normal opacity-90 md:opacity-100">PHILANTHROPY COMMUNICATIONS</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.to || (link.children && link.children.some(c => pathname === c.to));

              if (link.children) {
                return (
                  <div key={link.to} className="flex items-center space-x-6 relative group">
                    <Link
                      href={link.to}
                      className={`text-white font-sans text-sm tracking-[0.15em] hover:text-brand-cream/80 transition-colors py-2 border-b-2 flex items-center gap-1.5 ${
                        isActive ? 'border-brand-green' : 'border-transparent'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" strokeWidth={2} />
                    </Link>

                    {/* Dropdown Panel */}
                    <div className="absolute top-full left-0 pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                      <div className="bg-brand-cream border border-brand-green/40 shadow-xl w-max overflow-hidden border-t-2 border-t-brand-green">
                        {link.children.map((child, idx) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className={`block font-serif text-brand-navy text-base px-6 py-3.5 hover:bg-brand-green hover:text-white transition-colors duration-200 ${
                              idx !== link.children!.length - 1 ? 'border-b border-brand-green/15' : ''
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <span className="w-px h-4 bg-brand-green"></span>
                  </div>
                );
              }

              return (
                <div key={link.to} className="flex items-center space-x-6">
                  <Link
                    href={link.to}
                    className={`text-white font-sans text-sm tracking-[0.15em] hover:text-brand-cream/80 transition-colors py-2 border-b-2 ${
                      isActive ? 'border-brand-green' : 'border-transparent'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <span className="w-px h-4 bg-brand-green"></span>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent(BOOKING_MODAL_EVENT))}
              className={ctaClasses}
            >
              <span className="relative z-10">LET&rsquo;S TALK</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:text-brand-cream focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="relative block w-6 h-5">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 w-[70%] bg-brand-navy border-t border-l border-white/10 shadow-xl">
          <div className="px-6 pt-4 pb-8 flex flex-col items-start">
            {navLinks.map((link) => {
              const isActive = pathname === link.to || (link.children && link.children.some(c => pathname === c.to));

              if (link.children) {
                return (
                  <div key={link.to} className="w-full border-b border-white/20">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between gap-2 w-full text-left text-white font-sans text-lg tracking-[0.15em] py-4 ${
                        isActive ? 'border-l-2 border-brand-green pl-3 -ml-3' : ''
                      } hover:bg-white/5`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="flex flex-col items-start bg-white/[0.06] divide-y divide-white/10">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className="group relative block w-full text-left text-white/90 font-serif text-base py-3 pl-5 pr-3 border-l-2 border-brand-green overflow-hidden isolate transition-colors duration-300 ease-out hover:text-white before:pointer-events-none before:absolute before:inset-0 before:bg-brand-green before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
                            onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                          >
                            <span className="relative z-10">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`block w-full text-left text-white font-sans text-lg tracking-[0.15em] py-4 border-b border-white/20 ${
                    isActive ? 'border-l-2 border-l-brand-green pl-3 -ml-3' : ''
                  } hover:bg-white/5`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent(BOOKING_MODAL_EVENT));
                }}
                className="group relative inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.15em] text-sm h-14 px-6 border overflow-hidden isolate bg-brand-green text-white border-brand-green transition-colors duration-300 ease-out hover:text-brand-navy hover:border-white before:pointer-events-none before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
              >
                <span className="relative z-10">BOOK A CALL</span>
              </button>
              <a
                href="tel:+13366827447"
                onClick={() => setIsOpen(false)}
                aria-label="Call Sara"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-navy transition-colors duration-300 ease-out"
              >
                <Phone className="w-5 h-5" strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
