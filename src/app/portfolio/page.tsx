import DiamondOrnament from '@/components/DiamondOrnament';
import CornerBrackets from '@/components/CornerBrackets';
import Button from '@/components/Button';
import { portfolioItems, PortfolioItem } from './data';

export const metadata = {
  title: 'Portfolio | Sara Tavery',
  description: 'Selected newsletter, direct mail, and grant proposal writing samples for nonprofit clients.'
};

export default function Portfolio() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 md:pt-20 pb-10 md:pb-14 px-6 md:overflow-hidden">
        <CornerBrackets />
        {/* Mobile-only corner brackets (top-left + top-right) */}
        <div aria-hidden="true" className="pointer-events-none absolute top-6 left-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40" />
          <div className="w-px h-10 bg-brand-green/40" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-6 right-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40 ml-auto" />
          <div className="w-px h-10 bg-brand-green/40 ml-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-brand-green mb-3 md:mb-5">
                Selected Work
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-navy leading-[1.02] tracking-[-0.015em] mb-6 lg:mb-0">
                Portfolio
              </h1>
              <DiamondOrnament className="lg:hidden w-[60%] max-w-[14rem] mx-auto" />
            </div>
            <div className="lg:col-span-5">
              <p className="font-serif text-lg md:text-xl text-brand-navy/80 leading-relaxed italic text-center lg:text-left">
                A newsletter, a direct mail appeal, and two grant proposals, with the thinking behind each piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <div className="pb-16 md:pb-20">
        {portfolioItems.map((item, index) => (
          <CaseStudy key={item.slug} item={item} index={index} />
        ))}
      </div>

      {/* Closing Band */}
      <section className="bg-brand-navy py-8 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-5">
            A Final Thought
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Strategy first. Story next.<br /> Generosity grows.
          </h2>
        </div>
      </section>
    </div>
  );
}

function CaseStudy({ item, index }: { item: PortfolioItem; index: number }) {
  const imageOnLeft = index % 2 === 0;

  return (
    <section className="px-6 py-10 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Mobile-only title block (eyebrow + title above the image) */}
        <div className="lg:hidden mb-8">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-green mb-4">
            {item.category} &nbsp;/&nbsp; {item.clientDescriptor} &nbsp;/&nbsp; {item.year}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-[1.1] tracking-[-0.01em] whitespace-pre-line">
            {item.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Cover */}
          <div className={`lg:col-span-6 lg:h-full ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="lg:sticky lg:top-28">
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Open ${item.title} PDF in a new tab`}
              >
                <div className="relative w-full bg-brand-cream border border-brand-green/15 shadow-[0_8px_30px_rgba(15,46,57,0.12)] group-hover:shadow-[0_12px_40px_rgba(15,46,57,0.18)] transition-shadow overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={`${item.title.replace(/\n/g, ' ')} — first page preview`}
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Narrative */}
          <div className={`lg:col-span-6 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Desktop-only title block */}
            <div className="hidden lg:block">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-green mb-4">
                {item.category} &nbsp;/&nbsp; {item.clientDescriptor} &nbsp;/&nbsp; {item.year}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-brand-navy leading-[1.1] tracking-[-0.01em] mb-8 whitespace-pre-line">
                {item.title}
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <Section label="Context" body={item.context} />
              <Section label="Challenge" body={item.challenge} />
              <Section label="Approach" body={item.approach} />
              {item.outcome && <Section label="Outcome" body={item.outcome} />}
            </div>

            <div className="flex justify-end lg:justify-start">
              <Button to={item.pdf}>
                View PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Divider between case studies (not after the last one) */}
        {index < portfolioItems.length - 1 && (
          <div className="mt-16 md:mt-20">
            <DiamondOrnament className="mx-auto max-w-md" />
          </div>
        )}
      </div>
    </section>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-navy/60 mb-2">
        {label}
      </p>
      <p className="font-serif text-base md:text-lg text-brand-navy/85 leading-relaxed">
        {body}
      </p>
    </div>
  );
}
