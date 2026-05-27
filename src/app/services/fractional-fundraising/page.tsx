import Button from '@/components/Button';

const offerings = [
  {
    title: "Build the Fundraising Plan",
    body: "An annual or campaign-specific plan with realistic goals, a usable calendar, and clear strategies behind each revenue priority."
  },
  {
    title: "Lead Major Donor Strategy",
    body: "Portfolio review, donor segmentation, moves management, ask strategy, proposal direction, and next steps for key donor relationships."
  },
  {
    title: "Strengthen Donor Retention",
    body: "Stewardship plans and donor communications that help first-time donors stay connected and longtime donors feel known and valued."
  },
  {
    title: "Guide Grant and Sponsorship Strategy",
    body: "A grants calendar, prospect pipeline, sponsorship strategy, and clear plan for which opportunities to pursue, when, and why."
  },
  {
    title: "Support Board Fundraising",
    body: "Practical coaching, talking points, and structure for board members who want to help but need clearer direction."
  },
  {
    title: "Strengthen the Team You Have",
    body: "If you have a development coordinator on staff, I provide senior-level direction that helps the work become more focused, organized, and effective."
  }
];

const benefits = [
  {
    title: "Strategy and implementation in one place.",
    body: "Move beyond advice alone. I help clarify the fundraising plan and support the communications, donor engagement, and follow-through needed to move it forward."
  },
  {
    title: "Senior development perspective without adding a full-time position.",
    body: "You gain experienced fundraising leadership while keeping the structure realistic for your current budget, staff, and stage of growth."
  },
  {
    title: "Support for an overextended executive director.",
    body: "When fundraising has outgrown what the executive director can carry alone, I provide experienced support that helps lighten the load and create a more sustainable path forward."
  },
  {
    title: "Guidance during a leadership gap or transition.",
    body: "Maintain momentum when a development role is vacant, newly created, or in transition, with support from someone who can step in quickly and understand the work."
  }
];

const audience = [
  "Executive directors carrying development leadership on top of running the organization.",
  "Boards that know fundraising needs more structure but are not ready to hire a full-time senior development leader.",
  "Small or mid-sized nonprofits preparing for growth, transition, a campaign, or a more intentional donor strategy.",
  "Organizations with a development staff member who needs senior-level guidance, structure, and support.",
  "Nonprofits that need experienced fundraising leadership without building a full development department."
];

const ataglance = [
  { label: "Service", value: "Fractional senior development leadership." },
  { label: "Engagements", value: "Retainer-based support for defined-term engagements." },
  { label: "Best for", value: "Organizations between a stretched ED and a full-time hire." },
  { label: "Role", value: "Part of your team, at the level you&rsquo;re ready for." }
];

export default function FractionalFundraising() {
  return (
    <div className="bg-brand-cream min-h-screen">

      {/* Hero — Mobile (image banner with overlay + text) */}
      <section className="md:hidden relative bg-brand-navy">
        <img
          src="/fractional.jpg"
          alt="Fractional fundraising leadership"
          className="block w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-brand-navy/55" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/80 mb-4 [text-shadow:0_1px_6px_rgba(15,46,57,0.6)]">
            Services &nbsp;/&nbsp; Fractional Fundraising
          </p>
          <h1 className="font-serif text-3xl text-white leading-[1.1] tracking-[-0.01em] mb-4 [text-shadow:0_2px_10px_rgba(15,46,57,0.5)]">
            Senior fundraising leadership for the season you&rsquo;re in.
          </h1>
          <p className="font-serif text-sm text-white/90 leading-relaxed italic max-w-md mx-auto [text-shadow:0_1px_6px_rgba(15,46,57,0.5)]">
            The strategic and practical support of a senior development leader, delivered through focused engagement scaled to your goals, calendar, and budget.
          </p>
        </div>
      </section>

      {/* Hero — Desktop */}
      <section className="hidden md:block bg-brand-cream pt-20 md:pt-28 pb-16 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-green mb-8">
            Services &nbsp;/&nbsp; Fractional Fundraising
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] text-brand-navy leading-[1.02] tracking-[-0.01em] max-w-5xl mb-8">
            Senior fundraising leadership<br className="hidden lg:block" /> for the season you&rsquo;re in.
          </h1>
          <p className="font-serif text-lg md:text-xl text-brand-navy/75 leading-relaxed max-w-2xl italic">
            The strategic and practical support of a senior development leader, delivered through focused engagement scaled to your goals, calendar, and budget.
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
                The organization&rsquo;s development needs may have increased beyond the executive director&rsquo;s available time and capacity, the chief philanthropy officer may have stepped away, or the budget simply can&rsquo;t justify a senior hire at full salary.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-6">
                That is where fractional fundraising can help. I work with your organization through a retainer-based engagement to bring clarity, structure, and experienced judgment to the fundraising work already in motion. Together, we strengthen the plan, sharpen donor communication, identify the next right steps, and build more confidence around the revenue priorities that matter most.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-14 md:mb-16">
                This work is not simply about adding more activity to the calendar. It is about helping your organization focus its time, relationships, and message so fundraising becomes more intentional and less reactive.
              </p>

              {/* Inline thumbnail */}
              <figure className="hidden md:float-right md:ml-10 md:mb-6 md:block md:max-w-[252px] w-full">
                <img
                  src="/fractional.jpg"
                  alt="Fractional fundraising leadership"
                  className="w-full aspect-[4/5] object-cover border border-brand-navy/10 shadow-[0_2px_8px_rgba(15,46,57,0.08),0_14px_36px_-10px_rgba(15,46,57,0.22)]"
                />
              </figure>

              {/* Section: What I do */}
              <div className="mb-10 md:mb-20">
                <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                  <span className="h-px w-10 bg-brand-green/70" aria-hidden="true" />
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-green">
                    The Work
                  </p>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy leading-tight mb-10 max-w-xl">
                  What I do as part of your team.
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

                <h2 className="md:hidden font-serif text-3xl text-brand-navy leading-tight mb-10 max-w-xl">
                  Why organizations choose this.
                </h2>
                <h2 className="hidden md:block font-serif text-3xl md:text-4xl text-brand-navy leading-tight mb-10 max-w-xl">
                  Why organizations choose fractional fundraising.
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
                        <dd
                          className="font-serif text-base text-brand-navy leading-snug"
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      </div>
                    ))}
                  </dl>

                  <div className="h-px w-full bg-brand-navy/10 mb-6" aria-hidden="true" />

                  <p className="font-serif text-sm text-brand-navy/70 leading-relaxed mb-5">
                    A short conversation is usually enough to know if fractional support is the right move.
                  </p>

                  <Button to="#contact" className="w-full">
                    START A CONVERSATION
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance">
            Strong fundraising is not guesswork.{' '}
            <span className="lg:whitespace-nowrap">It is purpose, planned.</span>
          </h2>
        </div>
      </section>

    </div>
  );
}
