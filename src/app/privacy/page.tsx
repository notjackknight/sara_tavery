import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import DiamondOrnament from '@/components/DiamondOrnament';

export const metadata = {
  title: 'Privacy Policy | Sara Tavery Philanthropy Communications',
  description:
    'How Sara Tavery Philanthropy Communications collects, uses, and protects the information you share through this website.',
};

const LAST_UPDATED = 'May 19, 2026';

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="px-6 pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* Back to home */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-navy/70 hover:text-brand-green transition-colors mb-10"
          >
            <ArrowLeft
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
              strokeWidth={1.75}
            />
            Back to Home
          </Link>

          {/* Heading */}
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-green mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy leading-tight mb-6">
            Privacy Policy
          </h1>
          <DiamondOrnament className="w-full max-w-sm mb-6" />
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-navy/55 mb-12">
            Last updated: {LAST_UPDATED}
          </p>

          {/* Body */}
          <div className="space-y-10 font-serif text-base md:text-lg text-brand-navy/85 leading-[1.7]">
            <p>
              Sara Tavery Philanthropy Communications (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;Sara&rdquo;) respects your privacy. This policy explains what information we
              collect when you visit this website or get in touch, why we collect it, and how it
              is handled.
            </p>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Information we collect
              </h2>
              <p className="mb-4">
                We collect only the information you choose to share with us, plus a small amount
                of basic analytics about how the site is used.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-brand-navy font-semibold">Contact details</span> &mdash;
                  your name, email address, and (optionally) phone number when you reach out by
                  email or phone.
                </li>
                <li>
                  <span className="text-brand-navy font-semibold">Analytics</span> &mdash;
                  aggregated, anonymized information about site traffic, collected through
                  Cloudflare Web Analytics. This is used to understand which pages are useful and
                  does not identify you personally.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                How we use it
              </h2>
              <p className="mb-4">Your information is used to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to your inquiry and follow up about your work.</li>
                <li>Send follow-up communications related to work you&rsquo;ve asked about.</li>
                <li>Understand how the site is being used so it can be improved.</li>
              </ul>
              <p className="mt-4">
                We do not sell your information. We do not use it for advertising. We do not
                share it with anyone except the service providers listed below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Service providers we rely on
              </h2>
              <p className="mb-4">
                A few trusted third-party services help operate this site and the work behind it.
                When you use them, their own privacy policies also apply.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-brand-navy font-semibold">Cloudflare</span> hosts the
                  site and provides anonymized traffic analytics.
                </li>
                <li>
                  <span className="text-brand-navy font-semibold">Google</span> provides the
                  email service used to correspond with clients.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Cookies
              </h2>
              <p>
                This site does not use tracking cookies. Cloudflare may set a small number of
                technical cookies needed to keep the site running.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Your choices
              </h2>
              <p>
                You can ask, at any time, what information we have about you, request a copy of
                it, or ask that it be deleted. Email{' '}
                <a
                  href="mailto:saratavery@gmail.com"
                  className="text-brand-green hover:text-brand-navy underline underline-offset-4 transition-colors"
                >
                  saratavery@gmail.com
                </a>{' '}
                and we&rsquo;ll respond promptly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Children
              </h2>
              <p>
                This site is intended for an adult, professional audience. We do not knowingly
                collect information from anyone under 13.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Changes
              </h2>
              <p>
                If this policy changes, the &ldquo;last updated&rdquo; date above will be
                revised. Material changes will be noted on this page.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Contact
              </h2>
              <p>
                Questions about this policy? Email{' '}
                <a
                  href="mailto:saratavery@gmail.com"
                  className="text-brand-green hover:text-brand-navy underline underline-offset-4 transition-colors"
                >
                  saratavery@gmail.com
                </a>
                .
              </p>
            </section>
          </div>

          {/* Back to home (bottom) */}
          <div className="mt-16 pt-8 border-t border-brand-navy/15">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-brand-navy/70 hover:text-brand-green transition-colors"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
                strokeWidth={1.75}
              />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
