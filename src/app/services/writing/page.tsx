import Button from '@/components/Button';

const offerings = [
  {
    title: "Grant proposals and research",
    body: "Foundation and corporate proposals, LOIs, and prospect research that surface the right funders for your mission."
  },
  {
    title: "Cases for support",
    body: "The foundational document your team uses across major gifts, board recruitment, and campaigns. Written once, used everywhere."
  },
  {
    title: "Annual and year-end appeals",
    body: "Direct mail and digital appeals built around a specific donor decision, with clear asks and language that earns a response."
  },
  {
    title: "Major gift proposals",
    body: "Tailored proposals for principal and major donors, written to support a specific ask at a specific level."
  },
  {
    title: "Donor communications",
    body: "Thank-you letters, impact reports, newsletters, and stewardship touches that keep donors close between asks."
  },
  {
    title: "Campaign messaging",
    body: "Core narrative, key messages, and donor-facing language for capital, endowment, and comprehensive campaigns."
  }
];

const benefits = [
  {
    title: "Writing that sounds like your organization.",
    body: "I spend the time up front to understand how your leadership talks, how your donors think, and how your mission lives day to day. The copy reads like someone on staff wrote it on their best day."
  },
  {
    title: "Senior judgment, not just words on a page.",
    body: "I&rsquo;ve held Director of Development and Vice President of Philanthropy roles. When something in the strategy is off, I&rsquo;ll say so before I start writing, because a strong sentence can&rsquo;t fix a weak ask."
  },
  {
    title: "Real deadlines, kept.",
    body: "Grant cycles and year-end calendars don&rsquo;t move. We agree on dates at the start, and I deliver on them."
  },
  {
    title: "Finished work, ready to send.",
    body: "Drafts come polished, formatted, and revised through your feedback. Your team should be approving, not rewriting."
  }
];

const audience = [
  "Executive directors who need a specific piece written well and on time.",
  "Small shops where the writing is the part that keeps getting pushed.",
  "Teams preparing for a campaign or year-end push that has to land."
];

const ataglance = [
  { label: "Service", value: "Fundraising copywriting and editorial direction." },
  { label: "Engagements", value: "Project-based, single deliverable or bundled." },
  { label: "Best for", value: "Development teams that need senior writing on a deadline." },
  { label: "Voice", value: "Yours. Refined, audited for tone, and ready to send." }
];

export default function WritingServices() {
  return (
    <div className="bg-brand-cream min-h-screen">

      {/* Hero — Mobile (image banner with overlay + text) */}
      <section className="md:hidden relative bg-brand-navy">
        <img
          src="/Writing_Services_Final.jpg"
          alt="Writing services for nonprofit communications"
          className="block w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-brand-navy/55" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/80 mb-4 [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
            Services &nbsp;/&nbsp; Writing
          </p>
          <h1 className="font-serif text-3xl text-white leading-[1.1] tracking-[-0.01em] mb-4 [text-shadow:0_2px_10px_rgba(15,46,57,0.5)]">
            Fundraising copy that sounds like you,<br />and raises more.
          </h1>
          <p className="font-serif text-sm text-white/90 leading-relaxed italic max-w-md mx-auto [text-shadow:0_1px_6px_rgba(15,46,57,0.5)]">
            Appeals, proposals, and donor communications written in your voice and built around the response you want.
          </p>
        </div>
      </section>

      {/* Hero — Desktop */}
      <section className="hidden md:block bg-brand-cream pt-20 md:pt-28 pb-16 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-green mb-8">
            Services &nbsp;/&nbsp; Writing
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] text-brand-navy leading-[1.02] tracking-[-0.01em] mb-8">
            Fundraising&nbsp;copy&nbsp;that&nbsp;sounds <span className="lg:whitespace-nowrap">like you, and raises more.</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-brand-navy/75 leading-relaxed max-w-2xl italic">
            Appeals, proposals, and donor communications written in your voice and built around the response you want.
          </p>
        </div>
      </section>

      {/* Editorial Body */}
      <section className="bg-brand-cream px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">

          {/* Top hairline */}
          <div className="h-px w-full bg-brand-navy/15 mb-6 md:mb-20" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Essay */}
            <article className="lg:col-span-8 lg:col-start-1">

              {/* Opening */}
              <p className="font-serif text-xl md:text-2xl text-brand-navy leading-[1.55] mb-6 first-letter:font-serif first-letter:text-5xl md:first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-brand-navy">
                Most nonprofit teams know what to say. They just don&rsquo;t have the time or the distance from the work to say it well.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-6">
                I write the appeals, proposals, and donor communications your team is too stretched to finish, and I do it in a voice that reads like it came from inside your organization. The end product is ready to use, audited for tone, and built around the donor you&rsquo;re actually trying to reach.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-14 md:mb-16">
                The writing is the visible part. Underneath it sits nine years of senior development experience, a CFRE credential, and a working knowledge of what actually moves donors in hospice, recovery, and human-services nonprofits.
              </p>

              {/* Inline thumbnail — magazine spot */}
              <figure className="hidden md:float-right md:ml-10 md:mb-6 md:block md:max-w-[252px] w-full">
                <img
                  src="/Writing_Services_Final.jpg"
                  alt="Writing services for nonprofit communications"
                  className="w-full aspect-[4/5] object-cover border border-brand-navy/10 shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)]"
                />
              </figure>

              {/* Section: What I write */}
              <div className="mb-10 md:mb-20">
                <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                  <span className="h-px w-10 bg-brand-green/70" aria-hidden="true" />
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-green">
                    What I Write
                  </p>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight mb-10 max-w-xl">
                  Where my writing goes.
                </h2>

                <div>
                  {offerings.map(({ title, body }, i) => (
                    <div
                      key={i}
                      className={`py-5 first:pt-0 ${
                        i > 0
                          ? 'before:block before:h-px before:w-full before:bg-brand-navy/10 before:mb-6'
                          : ''
                      }`}
                    >
                      <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-2 leading-snug">
                        {title}.
                      </h3>
                      <p
                        className="font-serif text-base md:text-lg text-brand-navy/75 leading-[1.7]"
                        dangerouslySetInnerHTML={{ __html: body }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: What to expect */}
              <div className="mb-14 md:mb-20 clear-both">
                <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                  <span className="h-px w-10 bg-brand-green/70" aria-hidden="true" />
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-green">
                    What To Expect
                  </p>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight mb-10 max-w-xl">
                  What sets my work apart.
                </h2>

                <div className="space-y-10">
                  {benefits.map(({ title, body }, i) => (
                    <div key={i}>
                      <h3 className="font-serif text-2xl md:text-[1.7rem] text-brand-navy leading-snug mb-3">
                        <span className="text-brand-green/80 font-sans text-base tracking-[0.15em] mr-3 align-middle">
                          0{i + 1}
                        </span>
                        {title}
                      </h3>
                      <p
                        className="font-serif text-base md:text-lg text-brand-navy/80 leading-[1.7] pl-0 md:pl-10"
                        dangerouslySetInnerHTML={{ __html: body }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Who this is for */}
              <div className="mb-6 md:mb-0">
                <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                  <span className="h-px w-10 bg-brand-green/70" aria-hidden="true" />
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-green">
                    Who This Is For
                  </p>
                </div>

                <ul className="space-y-5">
                  {audience.map((line, i) => (
                    <li key={i} className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.6] pl-6 border-l-2 border-brand-green/40">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

            </article>

            {/* Right: Sticky At-a-Glance rail */}
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <div className="bg-white border border-brand-navy/10 shadow-[0_2px_8px_rgba(15,46,57,0.06),0_14px_36px_-12px_rgba(15,46,57,0.18)] p-7 md:p-8">

                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-green mb-6">
                    At a Glance
                  </p>

                  <dl className="space-y-5 mb-8">
                    {ataglance.map(({ label, value }, i) => (
                      <div key={i}>
                        <dt className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-navy/50 mb-1">
                          {label}
                        </dt>
                        <dd className="font-serif text-base text-brand-navy leading-snug">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="h-px w-full bg-brand-navy/10 mb-6" aria-hidden="true" />

                  <p className="font-serif text-sm text-brand-navy/70 leading-relaxed mb-5">
                    Tell me what you&rsquo;re working on<br /> and when it&rsquo;s due.
                  </p>

                  <Button to="#book" className="w-full">
                    BOOK A CALL
                  </Button>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Closing Band */}
      <section className="bg-brand-navy py-8 md:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-5">
            A Final Thought
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Writing this well is hard,<br /> that&rsquo;s the whole point.
          </h2>
        </div>
      </section>

    </div>
  );
}
