import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import DiamondOrnament from '@/components/DiamondOrnament';

export const metadata = {
  title: 'Terms of Use | Sara Tavery Philanthropy Communications',
  description:
    'The terms that apply when you visit and use the Sara Tavery Philanthropy Communications website.',
};

const LAST_UPDATED = 'May 19, 2026';

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <DiamondOrnament className="w-full max-w-sm mb-6" />
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-navy/55 mb-12">
            Last updated: {LAST_UPDATED}
          </p>

          {/* Body */}
          <div className="space-y-10 font-serif text-base md:text-lg text-brand-navy/85 leading-[1.7]">
            <p>
              These terms apply when you visit and use saratavery.com (the
              &ldquo;site&rdquo;), operated by Sara Tavery, an independent philanthropy
              communications consultant based in Winston-Salem, North Carolina (referred to
              below as &ldquo;Sara,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By using the
              site, you agree to these terms.
            </p>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                What this site is for
              </h2>
              <p>
                The site is provided for general informational purposes &mdash; to share Sara&rsquo;s
                background, the services she offers, and ways to get in touch. Nothing on the
                site is intended as legal, financial, tax, or fundraising compliance advice for
                your specific situation. Any engagement is governed by a separate written
                agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Content and intellectual property
              </h2>
              <p>
                The text, images, design, and other content on this site are owned by Sara
                Tavery (or used with permission) and are protected by copyright and other
                intellectual-property laws. You&rsquo;re welcome to view, share links to, and
                reference this material with attribution. Please do not copy, republish, or
                reuse it for your own commercial purposes without permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                How you may use the site
              </h2>
              <p className="mb-4">When using the site, please don&rsquo;t:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use it in a way that violates any law or regulation.</li>
                <li>
                  Attempt to disrupt, probe, or gain unauthorized access to the site or its
                  underlying systems.
                </li>
                <li>
                  Scrape, harvest, or otherwise extract content at scale without written
                  permission.
                </li>
                <li>
                  Impersonate anyone, or submit information through the site that is false,
                  misleading, or not yours to share.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Third-party links and tools
              </h2>
              <p>
                The site may link to or embed third-party tools &mdash; for example, the Google
                scheduling tool used to book consultations, or external profiles like LinkedIn.
                Those tools are operated by other companies and have their own terms and
                privacy policies. We&rsquo;re not responsible for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                No warranty
              </h2>
              <p>
                The site is provided &ldquo;as is.&rdquo; We do our best to keep it accurate
                and available, but we don&rsquo;t guarantee that it will be free of errors,
                uninterrupted, or fit for any particular purpose. Your use of the site is at
                your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Limitation of liability
              </h2>
              <p>
                To the fullest extent permitted by law, Sara Tavery is not liable for any
                indirect, incidental, or consequential damages arising from your use of the
                site or any information found on it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Governing law
              </h2>
              <p>
                These terms are governed by the laws of the State of North Carolina, without
                regard to its conflict-of-laws principles. Any dispute arising from your use of
                the site will be handled in the state or federal courts located in
                Forsyth County, North Carolina.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Changes
              </h2>
              <p>
                These terms may be updated from time to time. The &ldquo;last updated&rdquo;
                date above will reflect the most recent revision. Continued use of the site
                after a change means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 leading-snug">
                Contact
              </h2>
              <p>
                Questions about these terms? Email{' '}
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
