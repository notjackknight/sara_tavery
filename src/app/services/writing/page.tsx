import Button from '@/components/Button';

const offerings = [
  {
    title: "Story-Based Appeals",
    body: "Direct mail and digital appeals built around clear messaging, meaningful stories, specific asks, and language that invites response."
  },
  {
    title: "Grant Proposals",
    body: "Foundation and corporate proposals, letters of interest/inquiry (LOIs), and grant research that connect your programs, outcomes, community needs, and funding priorities."
  },
  {
    title: "Cases for Support",
    body: "Foundational messaging your team can use across major gifts, board engagement, campaigns, fundholder conversations, and donor communications."
  },
  {
    title: "Transformational Gift Proposals",
    body: "Tailored proposals for major and principal donors, often shaped around a specific story, project, initiative, or giving opportunity."
  },
  {
    title: "Donor Communications",
    body: "Thank-you letters, annual reports, newsletters, stewardship messages, and other communications that showcase your organization&rsquo;s impact."
  },
  {
    title: "Campaign Messaging",
    body: "Core narrative, key messages, and donor-facing language for capital, endowment, annual, and comprehensive campaigns."
  }
];

const benefits = [
  {
    title: "Storytelling with care and purpose.",
    body: "I&rsquo;m experienced at interviewing clients, recipients, program participants, donors, staff, grantees, and community partners to uncover stories of impact. I approach this work with care, respect, and sensitivity, looking for honest details that convey dignity and meaning."
  },
  {
    title: "Fundraising strategy behind the writing.",
    body: "If something about the audience, ask, or message feels unclear, I&rsquo;ll help identify that before drafting begins &mdash; because strong writing starts with a strong direction."
  },
  {
    title: "Flexible stories that work across formats.",
    body: "A well-developed story can strengthen more than one piece of communication. The same core narrative may support an appeal, grant application, donor proposal, newsletter, impact report, fundholder update, or campaign message when adapted thoughtfully for each audience."
  },
  {
    title: "Finished work your team can use.",
    body: "Drafts are polished, organized, and revised through your feedback."
  }
];

const audience = [
  "Executive directors who need important communications written well and on time.",
  "Small development teams where writing and storytelling keep getting pushed behind urgent daily demands.",
  "Organizations preparing for a campaign, grant deadline, year-end appeal, or donor communication that needs to land well.",
  "Community foundations and philanthropic organizations that need clear, story-driven communications for donors, fundholders, grantees, or community partners.",
  "Nonprofits with powerful stories but limited time or capacity to shape them into effective fundraising copy."
];

const ataglance = [
  { label: "Service", value: "Fundraising writing, storytelling, and editorial direction." },
  { label: "Engagements", value: "Retainer-based support for defined-term engagements." },
  { label: "Best for", value: "Nonprofit organizations that need experienced writing for donor, funder, or campaign communications." },
  { label: "Approach", value: "Story-driven, strategic, ethically written, and ready to use." }
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
            Fundraising writing rooted in story, strategy, and impact.
          </h1>
          <p className="font-serif text-sm text-white/90 leading-relaxed italic max-w-md mx-auto [text-shadow:0_1px_6px_rgba(15,46,57,0.5)]">
            Appeals, proposals, grant applications, and donor communications shaped by clear messaging, ethical storytelling, and the response you want to inspire.
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
            Fundraising writing rooted in <span className="lg:whitespace-nowrap">story, strategy, and impact.</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-brand-navy/75 leading-relaxed max-w-2xl italic">
            Appeals, proposals, grant applications, and donor communications shaped by clear messaging, ethical storytelling, and the response you want to inspire.
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
                Nonprofits are close to meaningful stories every day. But capturing those stories well &mdash; and translating them into communications that resonate with donors, funders, and partners, stir emotion, and move them to deepen their support &mdash; takes time, care, and perspective.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-6">
                I help organizations turn program work, donor generosity, community needs, and organizational impact into clear, compelling communications. Through thoughtful interviews with staff, donors, grantees, community partners, clients, recipients, and program participants, I look for the details that reveal impact, dignity, generosity, and meaning without overstatement or exploitation.
              </p>

              <p className="font-serif text-lg md:text-xl text-brand-navy/85 leading-[1.7] mb-14 md:mb-16">
                Those stories can be woven into many formats: annual appeals, year-end campaigns, grant applications, cases for support, newsletters, impact reports, campaign materials, and major donor proposals. The goal is not simply to tell a moving story, but to connect the story to your mission, your outcomes, and the opportunity for supporters to make a meaningful difference.
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
                  What I write.
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
            Strategic storytelling is rarely simple.{' '}
            <span className="lg:whitespace-nowrap">That&rsquo;s why it matters.</span>
          </h2>
        </div>
      </section>

    </div>
  );
}
