export type PortfolioCategory = 'Newsletter' | 'Direct Mail' | 'Grant Proposal';

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  clientDescriptor: string;
  year: string;
  context: string;
  challenge: string;
  approach: string;
  outcome?: string;
  coverImage: string;
  pdf: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'newsletter-sample',
    title: 'Vision: A Thanksgiving\nStory of Recovery',
    category: 'Newsletter',
    clientDescriptor: 'Winston-Salem Rescue Mission',
    year: '2025',
    context: 'I wrote the September edition of Vision, the Mission\'s quarterly donor newsletter, to open their fall giving season. It goes to longtime supporters across the Triad who already believe in the work and want to see how their giving is changing real lives in their community.',
    challenge: 'The fall issue had to carry the Thanksgiving meal appeal at $3.99 per meal while staying honest about what a meal really represents at the Mission. A plate of food is the easy part. The harder story is the 90-day Life Builders program behind it, and I needed donors to feel that connection without losing the warmth of the holiday moment.',
    approach: 'I built the issue around Victor, a graduate of the 90-day program who lost his sister, his home, and very nearly his life before arriving at the Mission. I let him speak in his own words wherever I could, kept the writing plain, and held the Gospel-centered framing the Mission lives by without letting it tip into anything preachy. The Executive Director\'s letter ties the meal to the deeper work of restoration, so the $3.99 ask reads as the first step in a longer story rather than the whole story.',
    coverImage: '/portfolio/newsletter-cover.png',
    pdf: '/portfolio/newsletter-sample.pdf'
  },
  {
    slug: 'direct-mail-appeal',
    title: 'A Day at the Ballpark:\nTrellis Fall Appeal',
    category: 'Direct Mail',
    clientDescriptor: 'Trellis Supportive Care',
    year: '2019',
    context: 'I wrote this fall appeal for the Trellis Supportive Care Foundation, the philanthropic arm of the hospice and palliative care organization that has served the Triad since 1979. The letter went to individual donors across the counties Trellis serves and was timed to land before year-end giving kicked into full gear.',
    challenge: 'Hospice fundraising carries a quiet difficulty. Donors know the work matters, but the subject is heavy, and an appeal that leans too hard on grief loses the very people you need to reach. I had to write something honest about end-of-life care that a reader would actually finish.',
    approach: 'I built the letter around Zimir, a five-year-old patient who loved baseball, and the evening his Trellis team coordinated with the Winston-Salem Dash so he could see a game with his mother and brothers. The lead opens on his joy rather than his diagnosis, which lets the reader stay in the story long enough to feel what supportive care actually makes possible. I kept the ask plain and tied it to the moment in front of the donor: a gift that helps another family hold onto memory in the time they have left. Dr. Lalor signed it as Chief Medical Officer, which gave the clinical credibility room to sit alongside the warmth of the story.',
    coverImage: '/portfolio/direct-mail-cover.png',
    pdf: '/portfolio/direct-mail-sample.pdf'
  },
  {
    slug: 'grant-proposal-one',
    title: 'A Second Vehicle\nfor Hospice Patients',
    category: 'Grant Proposal',
    clientDescriptor: 'Mountain Valley Hospice',
    year: '2022',
    context: 'I wrote this proposal to The Cannon Charitable Interests, a returning funder of Mountain Valley Hospice & Palliative Care, where I served as Senior Director of Philanthropy. The ask was $91,523 toward a $122,030 capital purchase: a second medical transport vehicle to serve hospice patients across the 18 rural counties we covered in North Carolina and Virginia.',
    challenge: 'Capital requests are often the hardest grants to write because the object of the funding is a piece of equipment rather than a person. The case had to make a vehicle feel like care, and it had to do that for a sophisticated funder reading dozens of applications. Supply chain delays on the chassis order added a second layer of difficulty, since I needed to be transparent about timing without letting uncertainty undercut the urgency of the need.',
    approach: 'I led with the patient experience. Long rides through rural and mountainous terrain are anxious by nature for a frail hospice patient, and an outside transport service does not always arrive on time. From there I built the financial case using three months of our actual transport data, showing both the savings the existing vehicle had already generated and the outside costs a second vehicle would eliminate. I treated the supply chain risk honestly, named our backup funding plan, and closed by tying the request to the mission language the funder already knew us by.',
    coverImage: '/portfolio/grant-one-cover.png',
    pdf: '/portfolio/grant-proposal-one.pdf'
  },
  {
    slug: 'grant-proposal-two',
    title: 'Mental Health Counselor\nfor Men in Recovery',
    category: 'Grant Proposal',
    clientDescriptor: 'Winston-Salem Rescue Mission',
    year: '2026',
    context: 'I wrote this application to Forsyth County\'s Behavioral Health Program for FY 2026/27 in my role as Director of Development at the Winston-Salem Rescue Mission. The $60,000 request would fund a full-time, licensed mental health counselor inside our residential addiction recovery programs for men, a clinical role the Mission had never carried on staff before.',
    challenge: 'Government funders read these applications against a rubric, and the rubric rewards precision over warmth. I had to make the case that hiring one clinician would meaningfully change patient outcomes inside a faith-based recovery program, while documenting evidence-based practices, sustainability without Medicaid reimbursement, and measurable performance targets at the level a County board expects.',
    approach: 'I framed the role as an expansion of clinical capacity rather than a new program, which kept the proposal aligned with the priority area for psychological and substance use evaluations and assessments. The need section grounded co-occurring mental illness in national prevalence data and tied it directly to the men we serve. I named the specific evidence-based practices the counselor would use, set quantitative and qualitative targets the County could verify, and explained how philanthropic support would sustain the position beyond the grant year so the County\'s investment would not stand alone.',
    coverImage: '/portfolio/grant-two-cover.png',
    pdf: '/portfolio/grant-proposal-two.pdf'
  }
];
