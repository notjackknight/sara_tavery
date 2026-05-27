import DiamondOrnament from '@/components/DiamondOrnament';
import DiamondIcon from '@/components/DiamondIcon';
import CornerBrackets from '@/components/CornerBrackets';
import SectionDivider from '@/components/SectionDivider';
import Button from '@/components/Button';
import CountUp from '@/components/CountUp';
import MobileFixedBgImage from '@/components/MobileFixedBgImage';
import Link from 'next/link';
import { Award, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { TrophyIcon, CheckBadgeIcon, AdjustmentsHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero Section - Mobile (sticky image + navy block scrolls over) */}
      <section className="md:hidden relative w-full bg-brand-navy">
        {/* Sticky photo: occupies the top half of the viewport, pins below the 5rem navbar.
            Uses svh (small viewport height) so the height is locked to Safari's
            smallest-chrome state — prevents iOS Safari's URL bar animation from
            re-flowing/zooming the image during scroll. */}
        <div className="sticky top-20 w-full h-[calc(50svh-2.5rem)] overflow-hidden">
          <img
            src="/Hero.jpg"
            alt="Sara Tavery Portrait"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        {/* Navy block: scrolls up over the sticky image */}
        <div className="relative w-full bg-brand-navy z-10">
          <div className="w-full min-h-[calc(50svh-2.5rem)] flex flex-col items-center justify-between gap-8 px-6 py-8 text-center">
            {/* Text group */}
            <div className="w-full flex flex-col items-center">
              <h3 className="font-serif text-[30px] text-white leading-[1.15] whitespace-nowrap tracking-[-0.01em] mb-5">
                A collaborative process.<br />
                Meaningful results.
              </h3>

              <p className="font-serif text-base text-white/90 leading-relaxed max-w-sm">
                I help nonprofits bring clarity to complex ideas, elevate their stories, and inspire action.
              </p>
            </div>

            {/* CTAs */}
            <div className="w-full flex flex-col gap-3 [&>a]:w-full">
              <Button to="/#services" className="!bg-white !text-brand-navy !border-white hover:!bg-brand-green hover:!text-white hover:!border-brand-green">
                VIEW SERVICES
              </Button>
              <Button variant="outline" to="#contact" className="!bg-transparent !text-white !border-white hover:!bg-brand-green hover:!text-white hover:!border-brand-green">
                START A CONVERSATION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Desktop (image background with overlay) */}
      <section className="hidden md:flex relative w-full flex-col md:h-[calc(100dvh-6rem)] overflow-hidden">
        <img
          src="/Hero.jpg"
          alt="Sara Tavery Portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/40" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-10 md:py-8 flex flex-col flex-1">
          <div className="flex flex-1 md:min-h-0 items-center md:pl-12 lg:pl-20 xl:pl-28">
            <div className="w-full md:w-[58%] lg:w-[55%] text-left flex flex-col justify-center">
              <h3 className="font-serif md:text-[34px] lg:text-[46px] xl:text-[58px] text-white mb-6 leading-[1.05] whitespace-nowrap [text-shadow:0_2px_10px_rgba(15,46,57,0.5)]">
                A collaborative process.<br />
                Meaningful results.
              </h3>

              <DiamondOrnament className="mb-6 max-w-md [&_*]:!stroke-white [&_*]:!fill-white" />

              <p className="font-serif text-lg lg:text-xl text-white mb-8 leading-relaxed max-w-md [text-shadow:0_1px_6px_rgba(15,46,57,0.5)]">
                I help nonprofits bring clarity to complex ideas, elevate their stories, and inspire action.
              </p>

              <div className="flex flex-nowrap gap-3">
                <Button to="/#services" className="!bg-white !text-brand-navy !border-white hover:!bg-brand-green hover:!text-white hover:!border-brand-green">
                  VIEW SERVICES
                </Button>
                <Button variant="outline" to="#contact" className="!bg-transparent !text-white !border-white hover:!bg-brand-green hover:!text-white hover:!border-brand-green">
                  START A CONVERSATION
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70">Explore</span>
            <svg className="w-4 h-4 text-white/70 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Results / By the Numbers - Mobile
          Section is 2 viewports tall to give the sticky image room to pin.
          Visually still feels like 1 viewport: image stays put while text scrolls up over it,
          and the next section (#why-us, with -mt below) scrolls up from below to cover the image —
          no blue strip, no dead space. */}
      <section id="results" className="md:hidden relative w-full h-[140svh]">
        <MobileFixedBgImage />
        {/* Text overlay: matches the sticky image's height and sits on top of it.
            The image is a position:sticky child of this section, so it pins
            below the navbar while the section is in view and unpins automatically
            when the section scrolls past. */}
        <div className="relative z-10 w-full h-[70svh] flex flex-col items-center justify-between px-6 pt-6 pb-6 text-center">
          {/* Title */}
          <div className="w-full flex flex-col items-center">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/90 mb-3 [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
              By the Numbers
            </p>
            <h2 className="font-serif text-4xl text-white leading-tight mb-4 [text-shadow:0_2px_10px_rgba(15,46,57,0.6)]">
              Results you can measure
            </h2>
            <DiamondOrnament className="w-[70%] max-w-xs [&_*]:!stroke-white [&_*]:!fill-white" />
          </div>

          {/* Hero stat */}
          <div className="w-full">
            <div className="font-serif font-bold text-white text-6xl leading-none mb-2 [text-shadow:0_2px_14px_rgba(15,46,57,0.7)]">
              <CountUp end={18} prefix="$" suffix="M+" />
            </div>
            <p className="font-serif text-white/90 text-sm max-w-xs mx-auto [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
              Raised through nonprofit fundraising roles and client work
            </p>
          </div>

          {/* Four secondary stats — 2x2 grid */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 w-full max-w-xs">
            <div>
              <div className="font-serif font-bold text-white text-3xl leading-none mb-1 [text-shadow:0_2px_10px_rgba(15,46,57,0.7)]">
                CFRE
              </div>
              <p className="font-serif text-white/85 text-[11px] leading-snug [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
                Certified Fund Raising Executive
              </p>
            </div>
            <div>
              <div className="font-serif font-bold text-white text-3xl leading-none mb-1 [text-shadow:0_2px_10px_rgba(15,46,57,0.7)]">
                <CountUp end={200} suffix="+" />
              </div>
              <p className="font-serif text-white/85 text-[11px] leading-snug [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
                Grants, appeals, proposals, and donor communications
              </p>
            </div>
            <div>
              <div className="font-serif font-bold text-white text-3xl leading-none mb-1 [text-shadow:0_2px_10px_rgba(15,46,57,0.7)]">
                <CountUp end={9} suffix="+" />
              </div>
              <p className="font-serif text-white/85 text-[11px] leading-snug [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
                Years leading nonprofit development teams
              </p>
            </div>
            <div>
              <div className="font-serif font-bold text-white text-3xl leading-none mb-1 [text-shadow:0_2px_10px_rgba(15,46,57,0.7)]">
                <CountUp end={11} suffix="+" />
              </div>
              <p className="font-serif text-white/85 text-[11px] leading-snug [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
                Years of prior marketing and advertising
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results / By the Numbers - Desktop */}
      <section className="hidden md:block relative bg-brand-cream py-12 md:py-14 px-4 overflow-hidden">
        <div className="max-w-[88rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: title block + asymmetric stat grid */}
            <div className="flex flex-col">
              <div className="inline-block mb-10 self-start">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4 text-center">
                  By the Numbers
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy leading-none mb-4">
                  Results you can measure
                </h2>
                <DiamondOrnament className="w-full" />
              </div>

              <div className="flex flex-col gap-10 lg:gap-14">
              {/* Hero stat */}
              <div>
                <div className="font-serif font-bold text-brand-navy text-7xl md:text-8xl lg:text-[9rem] leading-none mb-3">
                  <CountUp end={18} prefix="$" suffix="M+" />
                </div>
                <p className="font-serif text-brand-navy/70 text-base lg:text-lg">
                  Raised through nonprofit fundraising roles and client work
                </p>
              </div>

              {/* Four secondary stats — 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-10 lg:gap-y-10">
                <div>
                  <div className="font-serif font-bold text-brand-navy text-5xl md:text-6xl leading-none mb-2">
                    CFRE
                  </div>
                  <p className="font-serif text-brand-navy/70 text-sm lg:text-base">
                    Certified Fund Raising Executive
                  </p>
                </div>
                <div>
                  <div className="font-serif font-bold text-brand-navy text-5xl md:text-6xl leading-none mb-2">
                    <CountUp end={200} suffix="+" />
                  </div>
                  <p className="font-serif text-brand-navy/70 text-sm lg:text-base">
                    Grants, appeals, proposals, and donor communications written
                  </p>
                </div>
                <div>
                  <div className="font-serif font-bold text-brand-navy text-5xl md:text-6xl leading-none mb-2">
                    <CountUp end={9} suffix="+" />
                  </div>
                  <p className="font-serif text-brand-navy/70 text-sm lg:text-base">
                    Years leading nonprofit development teams
                  </p>
                </div>
                <div>
                  <div className="font-serif font-bold text-brand-navy text-5xl md:text-6xl leading-none mb-2">
                    <CountUp end={11} suffix="+" />
                  </div>
                  <p className="font-serif text-brand-navy/70 text-sm lg:text-base">
                    Years of prior marketing and advertising experience
                  </p>
                </div>
              </div>
              </div>
            </div>

            {/* Right: image card */}
            <div className="w-full flex justify-center items-center">
              <img
                src="/new_growthchart.jpg"
                alt="Upward growth chart representing measurable fundraising results"
                className="aspect-[4/3] w-full max-w-lg lg:max-w-2xl object-cover border border-brand-navy/10 ring-1 ring-inset ring-white/15 shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <SectionDivider />
      </div>

      {/* Why Fractional
          On mobile, this section is pulled up by 70svh so it scrolls over the sticky image
          in the results section above — providing the "next section covers it" effect.
          svh (not dvh) keeps the offset stable across iOS Safari's URL bar animation. */}
      <section id="why-us" className="relative bg-white py-12 md:py-14 px-4 md:overflow-hidden -mt-[70svh] md:mt-0 z-10">
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
        <div className="max-w-[88rem] mx-auto w-full">
          {(() => {
            const items = [
              {
                Icon: TrophyIcon,
                title: "Senior expertise",
                body: "You get senior-level development leadership, seasoned perspective, and practical expertise without the cost or commitment of a full-time hire. I bring proven success across multiple areas of fundraising, including major gifts, grants, donor communications, and annual appeals."
              },
              {
                Icon: CheckBadgeIcon,
                title: "No learning curve",
                body: "I can step in, find my footing quickly, and help you communicate impact, inspire support, and grow mission revenue. With experience in both strategy and implementation, I can help immediately to bring focus and efficiency to your fundraising efforts to support long-term growth."
              },
              {
                Icon: AdjustmentsHorizontalIcon,
                title: "Flexible by design",
                body: "Get the support you need when you need it — for donor communications, grant writing, campaign messaging, and the everyday development work that helps move revenue forward. Scale up during busy seasons. Ease off in quieter months."
              },
              {
                Icon: HeartIcon,
                title: "A Partner in purpose",
                body: "The right story and strategic messaging can make your impact clear, deepen connection, and help support grow over time. I bring that approach to organizations helping people and communities flourish."
              }
            ];
            return (
              <div className="w-full">
                {/* Heading + intro — Mobile (sticky white card) */}
                <div className="md:hidden sticky top-24 z-20 mb-12 mx-auto w-fit max-w-[90%] bg-white/40 backdrop-blur-md shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)] border border-white/40">
                  <div className="text-center px-5 py-4">
                    <h2 className="font-serif text-[2rem] text-brand-navy leading-tight whitespace-nowrap">
                      The Right Fit
                    </h2>
                  </div>
                </div>

                {/* Heading + intro — Desktop */}
                <div className="hidden md:block text-center mb-12 lg:mb-16">
                  <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4">
                    Why Me
                  </p>
                  <div className="inline-block">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-6 leading-tight">
                      The Right Fit
                    </h2>
                    <DiamondOrnament className="w-full mb-8" />
                  </div>
                </div>

                {/* 4-column row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                  {items.map(({ Icon, title, body }, i) => (
                    <div key={i} className="flex flex-col px-2 lg:px-3">
                      <div className="flex items-start justify-between mb-3">
                        <span className="font-serif text-5xl lg:text-6xl text-brand-navy/85 leading-none">
                          0{i + 1}
                        </span>
                        <Icon
                          className="w-8 h-8 lg:w-9 lg:h-9 text-brand-green opacity-80 flex-shrink-0 mt-1"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="h-[2px] w-full bg-brand-green/70 mb-5" aria-hidden="true" />
                      <h3 className="font-serif text-xl lg:text-2xl font-bold text-brand-navy leading-snug mb-3">
                        {title}
                      </h3>
                      <p className="font-serif text-brand-navy/85 leading-relaxed text-base lg:text-lg">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* How We Partner */}
      <section id="engagements" className="relative bg-brand-cream py-12 md:py-14 px-4 md:overflow-hidden">
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

        {/* Heading — Mobile (sticky translucent card) */}
        <div className="md:hidden sticky top-24 z-20 mb-12 mx-auto w-fit max-w-[90%] bg-white/40 backdrop-blur-md shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)] border border-white/40">
          <div className="text-center px-5 py-4">
            <h2 className="font-serif text-[2rem] text-brand-navy leading-tight whitespace-nowrap">
              Working Together
            </h2>
          </div>
        </div>

        <div className="max-w-[88rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-16 items-center">
            {/* Left: title + image */}
            <div className="text-center lg:text-left">
              <p className="hidden md:block font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4 text-center">
                My Approach
              </p>
              <h2 className="hidden md:block font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-4 leading-tight text-center">
                Working Together
              </h2>
              <DiamondOrnament className="hidden md:block mb-8 lg:mx-0" />
              <img
                src="/services-collaboration1.png"
                alt="Collaboration in nonprofit communications"
                className="block w-full max-w-[39.6rem] mx-auto lg:mx-0 object-cover border border-brand-navy/10 ring-1 ring-inset ring-white/15 shadow-[0_4px_12px_rgba(15,46,57,0.14),0_22px_50px_-10px_rgba(15,46,57,0.35)]"
              />
            </div>

            {/* Right: the two service engagement types */}
            <div className="flex flex-col divide-y divide-brand-green/40 max-w-[44rem] mx-auto lg:mx-0">
              {[
                {
                  title: "Writing Services",
                  paras: [
                    "For organizations that need dependable communications support beyond a single project, I provide donor communications, grant writing, campaign messaging, cases for support, and the strategic messaging that keeps fundraising moving.",
                    "Together, we discuss your goals, priorities, and timeline. From there, I gather the information needed to understand your organization, audience, and current messaging. I then develop clear, thoughtful content that reflects your voice and supports your fundraising or communications goals."
                  ]
                },
                {
                  title: "Fractional Fundraising",
                  paras: [
                    "For organizations that need senior development expertise but are not looking to add a full-time development leadership role, I work alongside your team to strengthen communications, fundraising strategy, donor engagement, and revenue growth.",
                    "I start by asking you about your current needs, goals, and opportunities. From there, I provide steady support, guidance, and written materials as needed to help move your priorities forward. Throughout the engagement, we review progress and adjust the focus as your needs evolve."
                  ]
                }
              ].map(({ title, paras }, i) => (
                <div
                  key={i}
                  className="py-6 lg:py-7 first:pt-0 last:pb-0"
                >
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-brand-navy leading-snug mb-2 text-center">
                    {title}
                  </h3>
                  {paras.map((para, j) => (
                    <p key={j} className="font-serif text-brand-navy/85 leading-relaxed text-base lg:text-lg mt-3 first:mt-0">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-white py-12 md:py-16 px-4 md:overflow-hidden">
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

        {/* Heading — Mobile (sticky translucent card) */}
        <div className="md:hidden sticky top-24 z-20 mb-12 mx-auto w-fit max-w-[90%] bg-white/40 backdrop-blur-md shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)] border border-white/40">
          <div className="text-center px-5 py-4">
            <h2 className="font-serif text-[2rem] text-brand-navy leading-tight whitespace-nowrap">
              Where I Focus
            </h2>
          </div>
        </div>

        <div className="max-w-[96rem] mx-auto w-full">
          <div className="hidden md:block text-center mb-10 lg:mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4">
              Services
            </p>
            <div className="inline-block">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-6 leading-tight">
                Where I Focus
              </h2>
              <DiamondOrnament className="w-full" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 max-w-[84rem] mx-auto w-full">
            {/* Vertical divider */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-px bg-brand-green/50"
            />

            {[
              {
                title: "Writing Services",
                href: "/services/writing",
                image: "/Writing_Services_Final.jpg",
                alt: "Writing services for nonprofit communications",
                items: [
                  "Grant research & proposals",
                  "Cases for support",
                  "Year-end appeals",
                  "Major gift proposals",
                  "Donor-centered campaign messaging",
                ],
              },
              {
                title: "Fractional Fundraising",
                href: "/services/fractional-fundraising",
                image: "/fractional.jpg",
                alt: "Fractional fundraising leadership",
                items: [
                  "Fundraising planning",
                  "Major donor strategy",
                  "Donor retention planning",
                  "Grant & sponsorship strategy",
                  "Board fundraising coaching",
                ],
              },
            ].map(({ title, href, image, alt, items }) => (
              <div key={title} className="flex flex-col md:px-8 lg:px-14">
                <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-brand-navy leading-tight text-center mb-4">
                  {title}
                </h3>
                <DiamondOrnament className="w-[60%] max-w-[14rem] md:w-full md:max-w-sm mx-auto mb-8" />

                <div className="flex flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mb-10">
                  <ul className="flex-1 flex flex-col gap-3.5 w-full">
                    {items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-brand-green mr-3 flex-shrink-0 mt-2">
                          <DiamondIcon className="w-3 h-3" />
                        </span>
                        <span className="font-serif text-brand-navy leading-snug text-base lg:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 flex-shrink-0 overflow-hidden border border-brand-navy/10 shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)]">
                    <img
                      src={image}
                      alt={alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <Link
                  href={href}
                  className="group self-center inline-flex items-center gap-2 font-sans text-sm tracking-[0.15em] uppercase text-brand-navy hover:text-brand-green transition-colors duration-300 border-b border-brand-navy/40 hover:border-brand-green pb-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" strokeWidth={1.75} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <SectionDivider />
      </div>

      {/* About - Bio */}
      <section id="about" className="relative bg-brand-cream py-12 md:py-14 px-4">
        {/* Mobile-only corner brackets (top-left + top-right) */}
        <div aria-hidden="true" className="pointer-events-none absolute top-6 left-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40" />
          <div className="w-px h-10 bg-brand-green/40" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-6 right-6 lg:hidden">
          <div className="w-10 h-px bg-brand-green/40 ml-auto" />
          <div className="w-px h-10 bg-brand-green/40 ml-auto" />
        </div>

        {/* Heading — Mobile (sticky translucent card) */}
        <div className="md:hidden sticky top-24 z-20 mb-12 mx-auto w-fit max-w-[90%] bg-white/40 backdrop-blur-md shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)] border border-white/40">
          <div className="text-center px-5 py-4">
            <h2 className="font-serif text-[2rem] text-brand-navy leading-tight whitespace-nowrap">
              About Me
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <p className="hidden md:block font-sans text-xs tracking-[0.25em] uppercase text-brand-green mb-4 text-center">
            Who I Am
          </p>
          <h2 className="hidden md:block font-serif text-4xl md:text-5xl lg:text-6xl text-center text-brand-navy mb-10">About Me</h2>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-center md:items-stretch">
            <div className="w-full md:w-[34%]">
              <div className="md:sticky md:top-28">
                <div className="aspect-[3/4] bg-neutral-200 w-full overflow-hidden border border-brand-navy/10 ring-1 ring-inset ring-white/15 shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)]">
                  <img
                    src="/About.png"
                    alt="Sara Tavery Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[66%] flex flex-col space-y-4">
              <p className="font-serif text-base lg:text-lg text-brand-navy leading-relaxed">
                I&rsquo;m a philanthropy communications consultant with more than nine years of experience in nonprofit development, donor engagement, grant writing, and fundraising strategy, built on more than 11 years of prior experience in marketing, advertising, and communications.
              </p>
              <p className="font-serif text-base lg:text-lg text-brand-navy leading-relaxed">
                My work combines donor-centered messaging, grant strategy, direct mail fundraising, impact storytelling, and practical development leadership experience. I&rsquo;ve held senior development roles within nonprofit residential recovery and hospice organizations, including Director of Development, Vice President of Philanthropy, and Director of Annual Giving.
              </p>
              <p className="font-serif text-base lg:text-lg text-brand-navy leading-relaxed">
                As Director of Development at the Winston-Salem Rescue Mission, I increased revenue from individual donors making single gifts of $10,000 or more by 40% year over year through strategic major donor cultivation. My experience also includes writing successful grant proposals, developing direct mail fundraising appeals, and interviewing program participants to turn their experiences into compelling stories of impact.
              </p>
              <p className="font-serif text-base lg:text-lg text-brand-navy leading-relaxed">
                I&rsquo;m especially skilled at listening deeply, finding the heart of a story, and translating it into messaging that moves donors to respond. I&rsquo;m your go-to partner for helping nonprofits communicate impact, inspire support, and grow mission revenue.
              </p>
              <p className="font-serif text-base lg:text-lg text-brand-navy leading-relaxed">
                Based in Winston-Salem, North Carolina, I&rsquo;m a graduate of Wake Forest University with a degree in psychology, a Certified Fund Raising Executive (CFRE), and an active member of the Association of Fundraising Professionals.
              </p>

              {/* Credentials Strip */}
              <div className="border-t border-brand-green/10 mt-4 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-start text-center space-y-2">
                  <Award className="text-brand-green w-9 h-9 md:w-6 md:h-6 opacity-80" />
                  <span className="font-sans text-sm md:text-[11px] tracking-[0.05em] text-brand-navy uppercase font-medium leading-snug">
                    Certified Fund Raising Executive (CFRE)
                  </span>
                </div>
                <div className="flex flex-col items-center justify-start text-center space-y-2">
                  <GraduationCap className="text-brand-green w-9 h-9 md:w-6 md:h-6 opacity-80" />
                  <span className="font-sans text-sm md:text-[11px] tracking-[0.05em] text-brand-navy uppercase font-medium leading-snug">
                    Wake Forest University, B.A. Psychology
                  </span>
                </div>
                <div className="flex flex-col items-center justify-start text-center space-y-2">
                  <Users className="text-brand-green w-9 h-9 md:w-6 md:h-6 opacity-80" />
                  <span className="font-sans text-sm md:text-[11px] tracking-[0.05em] text-brand-navy uppercase font-medium leading-snug">
                    Association of Fundraising Professionals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA Band */}
      <section className="bg-brand-navy py-8 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-10 whitespace-normal xl:whitespace-nowrap">
            Senior fundraising expertise, on the terms that fit your mission.
          </h2>
          <Button variant="secondary" to="#contact">
            START A CONVERSATION
          </Button>
        </div>
      </section>

    </div>
  );
}
