'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { BOOKING_MODAL_EVENT } from './BookingModal';

interface ButtonProps {
  to?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ to, children, variant = 'primary', className = '', onClick, type = 'button' }: ButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.15em] text-sm py-4 px-8 border overflow-hidden isolate transition-colors duration-300 ease-out before:pointer-events-none before:absolute before:inset-0 before:bg-brand-green before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 hover:text-white hover:border-brand-green";

  const variants = {
    primary: "bg-brand-navy text-white border-brand-navy",
    secondary: "bg-brand-cream text-brand-navy border-brand-navy/20",
    outline: "bg-brand-cream text-brand-navy border-brand-navy"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to === '#book') {
    return (
      <button
        type="button"
        onClick={() => window.dispatchEvent(new CustomEvent(BOOKING_MODAL_EVENT))}
        className={classes}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  if (to) {
    return (
      <Link href={to} className={classes}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
