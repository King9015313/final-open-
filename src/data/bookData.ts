import { PricingTier, SwipeTemplate, HrpaExample, WorkbookDay } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Edition',
    price: 499,
    originalPrice: 1499,
    target: 'Beginners on a tight budget wanting immediate traction',
    features: [
      'Core Client Acquisition System Ebook (80 Pages)',
      '30-Day Implementation Workbook with Daily Missions',
      '10 Ready-to-Use Email & DM Outreach Templates',
      'Standard Freelance Contract & Invoice Templates',
      'Lifetime Access to Future Updates'
    ],
    cta: 'Start With Basics'
  },
  {
    id: 'premium',
    name: 'Premium Edition',
    price: 999,
    originalPrice: 2999,
    popular: true,
    highlight: 'Most Popular · Best Value',
    target: 'Ambitious Freelancers ready to scale to ₹1L+/month',
    features: [
      'Everything included in Starter Edition',
      'Bonus: Client Onboarding Checklists (First 48 Hours SOP)',
      'Bonus: Advanced Rate Calculator & 15% Buffer Worksheet',
      'Bonus: Retainer Pitch & Scope Creep Protection Templates',
      'Advanced Chapters: Retention, Referrals & Agency Transition',
      'Priority Email Support & Resource Vault Access'
    ],
    cta: 'Get The Premium System'
  },
  {
    id: 'complete',
    name: 'Complete Edition',
    price: 899,
    originalPrice: 4498,
    popular: true,
    highlight: '⚡ Strictly First 500 Clients · 80% OFF',
    target: 'Starter + Premium Editions All-In-One Bundle',
    features: [
      'Both Starter Edition & Premium Edition Included',
      'Core Client Acquisition System Ebook (80 Pages) + 30-Day Missions',
      'All SOPs, Retainer Pitches, Rate Calculators & Agency Worksheets',
      'Advanced Modules: Client Retention & Scaling to ₹1L+/month',
      'Complete Contracts & Invoices Vault with Lifetime Updates',
      'Strictly limited to the first 500 clients only (Selling fast!)'
    ],
    cta: 'Claim Complete Bundle (First 500 Only)'
  }
];

export const ORDER_BUMP_DATA = {
  title: "Wait! Don't let late-paying clients ruin your business.",
  subtitle: "Add 'The Freelancer Payment Recovery System' to your order.",
  description: "Get exact word-for-word scripts to recover overdue invoices without burning bridges. Includes the 8-Stage Payment Recovery Ladder, Client Response Decoder, and 20 Ultra-Short Follow-Up Messages.",
  originalPrice: 799,
  bumpPrice: 299,
  checkboxText: "Yes, I want the Payment Recovery System for just ₹299!",
  author: "Prepared by Himanshu Manjhi"
};

export const HRPA_EXAMPLES: Record<string, HrpaExample> = {
  copywriting: {
    profession: 'Copywriters & Content Writers',
    hook: "I noticed [Brand]'s landing page headline leads with software specs rather than the friction your customers complain about on LinkedIn.",
    relevance: "Visitors are scrolling past your value prop and bouncing before reaching the primary demo booking button.",
    proof: "I rewrote the hero section for a similar B2B SaaS last month, which lifted free trial conversions by 28% (before/after breakdown attached: [Link]).",
    ask: "Would you be open to a 10-minute feedback call this Thursday at 4 PM IST?"
  },
  videoEditing: {
    profession: 'Video & Short-Form Editors',
    hook: "Loved your latest reel on [Topic] — noticed the average viewer retention likely drops off hard around the 3-second mark before the core takeaway.",
    relevance: "With the current algorithm shift, holding viewers through the first 4 seconds is what triggers explore page distribution for your niche.",
    proof: "I recut the opening 6 seconds with a dynamic punch-in, sound bridge, and cleaner pacing (free 15-second spec sample here: [Link]). No strings attached.",
    ask: "Open to seeing how we could apply this to scale your weekly output without extra filming time?"
  },
  design: {
    profession: 'UI/UX & Web Designers',
    hook: "Browsed [Brand]'s checkout flow on mobile. Your shipping selector has an unclickable tap zone that forces repeated mis-clicks.",
    relevance: "Mobile users in Tier-1 Indian cities abandon carts the moment touch interaction lags or misregisters.",
    proof: "I created an interactive 2-screen redesign in Figma solving the touch zone and sticky CTA contrast: [Figma Link].",
    ask: "Can I send over a quick 2-minute Loom walkthrough for your dev team?"
  },
  development: {
    profession: 'Web & Full-Stack Developers',
    hook: "Ran a quick Lighthouse audit on [Brand]'s landing page — Largest Contentful Paint is sitting at 4.2s due to unoptimized hero image assets.",
    relevance: "Every 1s delay on Indian mobile networks drops page completion by an estimated 12%.",
    proof: "Here is a staging build showing the identical design running at 0.9s with WebP and next-gen bundling: [Live Demo Link].",
    ask: "Would you have 10 minutes this week to review the performance diff?"
  }
};

export const WORKBOOK_WEEKS = [
  {
    week: 1,
    title: "Foundation",
    subtitle: "Days 1–7",
    goal: "Before you send a single pitch, build three foundations: a clear niche, believable proof, and a price you won't panic-discount.",
    days: [
      { day: 1, title: "Define your core niche & target audience", formula: "[What you do] for [Audience] who want [Result]" },
      { day: 2, title: "Select 1 local brand and create a 'Spec Work' piece", formula: "Cap this at 2 hours. Perfecting it is procrastination." },
      { day: 3, title: "Update your LinkedIn headline using the authority formula", formula: "Avoid 'Aspiring' or 'Passionate' — both read as unconfirmed." },
      { day: 4, title: "Define your base project rate with 15% negotiation buffer", formula: "Round to clean numbers (₹8,000 negotiates better than ₹7,850)." },
      { day: 5, title: "Create custom PDF invoice template in Canva / Word", formula: "A branded invoice signals you run a business, not a hobby." },
      { day: 6, title: "Identify 5 local businesses in your city for digital upgrade", formula: "High-trust leads right in your city, ignored by Upwork crowds." },
      { day: 7, title: "Send the Warm Network script to 3 former colleagues", formula: "Personal 1:1 direct messages convert faster than public broadcasts." }
    ]
  },
  {
    week: 2,
    title: "The Outreach Engine",
    subtitle: "Days 8–14",
    goal: "Foundation is in place. Now the volume starts: cold emails, LinkedIn DMs, and the follow-up discipline beginners skip.",
    days: [
      { day: 8, title: "Leave 3 thoughtful comments on posts of target decision makers", formula: "Visibility compounds before pitching; be specific, not 'Great post!'" },
      { day: 9, title: "Draft your first cold email using the HRPA framework", formula: "Draft for one real, named prospect with a genuine observation." },
      { day: 10, title: "Send 5 personalized cold emails to international prospects", formula: "Research for 3 minutes max. Volume + personalization is the formula." },
      { day: 11, title: "Identify 1 creator or business for a Contra Deal (barter)", formula: "Trade a time-boxed micro service for a high-trust filmed testimonial." },
      { day: 12, title: "Send the 'Micro-Project' pitch to a warm lead", formula: "Small asks convert: name exact deliverable and exact price together." },
      { day: 13, title: "Analyse your first week's outreach data", formula: "A week of data beats months of guessing. Identify your best 2 hooks." },
      { day: 14, title: "Follow up (Day 3 script) with leads from Day 9 & 10", formula: "Silence means 'busy', not 'no'. Keep follow-ups under 3 lines." }
    ]
  },
  {
    week: 3,
    title: "Momentum & Scale",
    subtitle: "Days 15–21",
    goal: "You have data from real outreach. This week widens the funnel — more proof, more channels, and your first retainer pitch.",
    days: [
      { day: 15, title: "Build a second 'Spec Work' piece in a slightly different style", formula: "One sample proves skill; a second proves range and versatility." },
      { day: 16, title: "Optimise your Upwork or Fiverr profile for an underserved niche", formula: "Mirror the exact search terms high-budget clients type into search." },
      { day: 17, title: "Send 5 LinkedIn direct messages using HRPA", formula: "Skip gatekeepers; reference recent company wins or product shifts." },
      { day: 18, title: "Draft a public Before/After case study post", formula: "Lead with the quantified result, not the software tool used." },
      { day: 19, title: "Send Day 7 follow-ups to non-responders", formula: "Graceful exit, not guilt trip. Moves non-responders to quarterly list." },
      { day: 20, title: "Pitch a Retainer (monthly) package to an existing lead", formula: "Frame around their convenience ('no need to re-brief every month')." },
      { day: 21, title: "Research 3 international startups that recently got funding", formula: "Funded companies have both budget and urgency." }
    ]
  },
  {
    week: 4,
    title: "Convert & Systemize",
    subtitle: "Days 22–30",
    goal: "The final stretch turns conversations into signed work, and signed work into testimonials — then hands you a repeatable playbook.",
    days: [
      { day: 22, title: "Send hyper-personalised emails to the 3 funded startup founders", formula: "Mention their funding round and specific growth bottleneck." },
      { day: 23, title: "Engage in 2 industry-specific communities (add value, no spam)", formula: "Answer questions completely before mentioning what you do." },
      { day: 24, title: "Review your pricing. Are you underselling? Recalculate", formula: "If you closed 2+ paid projects, raise new-client rates by 15-20%." },
      { day: 25, title: "Practice the 'Reduce the Scope' negotiation script out loud", formula: "Never drop rate on same scope. Say it out loud 3 times." },
      { day: 26, title: "Draft your standard 1-page Freelance Contract", formula: "Use Document 11 from the Vault. Contracts establish professionalism." },
      { day: 27, title: "Follow up with all active leads and push for a decision", formula: "Use deadline boundary: 'I can hold this start date until Friday'." },
      { day: 28, title: "Ask your first client for a specific testimonial", formula: "Send Template 08 with a pre-written draft they can just approve." },
      { day: 29, title: "Publish the testimonial on LinkedIn & portfolio", formula: "Social proof hidden in a folder does zero selling for you." },
      { day: 30, title: "Review 30-day metrics and build your Month 2 engine", formula: "Double down on your #1 best channel; retire what had 0 replies." }
    ]
  }
];

export const SAMPLE_SWIPE_TEMPLATES: SwipeTemplate[] = [
  {
    id: 't1',
    number: 'Template 01',
    title: 'Cold Email — Content & Writing',
    useCase: 'Pitching copywriting, scriptwriting, or SEO content to a brand/founder',
    subject: "Quick idea for [Brand]'s product page",
    content: `Hi [Name],

I noticed [Brand]'s product page copy focuses mostly on features rather than the specific problem it solves for [Target Customer]. 

I write conversion-focused copy for [Industry] brands — here is a before/after sample from a similar product page: [Link].

Would you be open to a quick 10-minute call this week?

Best,
[Your Name]`,
    proTip: "Never send a bracketed field by accident. The hook must prove you actually inspected their page.",
    niche: 'writing'
  },
  {
    id: 't2',
    number: 'Template 02',
    title: 'Cold Email — Video Editing & Reels',
    useCase: 'Pitching retention edits to YouTube / Instagram creators',
    subject: "Speeding up your Reel output & hook retention",
    content: `Hi [Name],

Loved your recent video on [Topic]. I noticed you post once a week — if you're looking to scale that to 3x without extra studio time, I edit high-retention Reels for creators in your niche with a 48-hour turnaround.

Here is a spec-edit of your last video showing an alternate hook: [Link]. 

Open to a quick chat?

Best,
[Your Name]`,
    proTip: "Keep spec work under 2 hours. If it takes longer, you are procrastinating instead of pitching.",
    niche: 'video'
  },
  {
    id: 't5',
    number: 'Template 05',
    title: 'Handling Price Pushback (Indian Market)',
    useCase: 'Live in a call or chat when a client says "We have another freelancer at half the rate"',
    content: `Client: "That's too expensive. We can get this done for ₹4,000 from another freelancer."

You: "I completely understand working within a budget. While I can't match that rate without compromising the depth and quality of the deliverables, we could reduce the scope. 

Would you prefer we remove [Deliverable A] or limit revisions to 1 round to bring the price down to fit your budget?"`,
    proTip: "Never drop your price on the same feature set. Trade scope for price, never quality for price.",
    niche: 'negotiation'
  },
  {
    id: 't11',
    number: 'Template 11',
    title: 'Pitching a Monthly Retainer',
    useCase: 'Converting a happy one-off project into predictable recurring income',
    content: `Hi [Name],

We've now worked together on [Number] projects, and I think a monthly retainer could actually save your team considerable time on back-and-forth briefs.

For ₹[Price]/month, I'd handle [Scope, e.g., 8 edited Reels + 2 revisions each] on an ongoing basis with guaranteed 48-hour turnaround — no need to re-brief or create separate invoices each time.

Want me to send over what that agreement would look like?`,
    proTip: "Frame the retainer around THEIR convenience first, your income stability second.",
    niche: 'general'
  }
];

export const PAYMENT_RECOVERY_LADDER = [
  { stage: 'Stage 0', timing: 'Before Due Date', tone: 'Helpful', action: 'Confirm invoice details and payment routing' },
  { stage: 'Stage 1', timing: 'Due / 0–1 Day', tone: 'Friendly', action: 'Short payment reminder to confirm receipt' },
  { stage: 'Stage 2', timing: '1–3 Days Overdue', tone: 'Direct', action: 'State exact amount and request confirmed date' },
  { stage: 'Stage 3', timing: '7 Days Overdue', tone: 'Firm', action: 'Request concrete checkpoint and action' },
  { stage: 'Stage 4', timing: '14 Days Overdue', tone: 'Firm', action: 'Pause new work / project deliveries immediately' },
  { stage: 'Stage 5', timing: '30+ Days Overdue', tone: 'Very Firm', action: 'Formal business follow-up & resolution timeline' },
  { stage: 'Stage 6', timing: 'No Response', tone: 'Concise', action: 'Final operational notice preserving legal chronology' }
];

export const CLIENT_RESPONSE_DECODER_SAMPLES = [
  { clientSays: "We'll pay soon.", realMeaning: "Timing is unresolved.", nextAction: "Ask for a specific expected date: 'Which date can I log in my tracker?'" },
  { clientSays: "Our finance team handles it.", realMeaning: "Internal process bottleneck.", nextAction: "Ask when the payment batch is scheduled: 'Who in finance can I loop in?'" },
  { clientSays: "Send the invoice again.", realMeaning: "Invoice lost or misrouted.", nextAction: "Resend with PDF attached and ask for immediate receipt confirmation." },
  { clientSays: "Cash flow is tight right now.", realMeaning: "Client needs time or can't pay.", nextAction: "Offer a 2-part milestone payment plan: 'Let us split the ₹15k into two ₹7.5k dates.'" },
  { clientSays: "The work wasn't what we expected.", realMeaning: "Possible scope or quality dispute.", nextAction: "Ask for the specific deliverable clause that was not satisfied." }
];

export const FAQS = [
  {
    q: "What if I don't get replies in the first week?",
    a: "Completely normal. The average cold outreach reply rate in freelancing is low if you blast generic messages. Day 13's review in the Workbook exists specifically so you diagnose your open rates and adjust the hook based on data, rather than quitting out of frustration."
  },
  {
    q: "Should I work for free to build my portfolio?",
    a: "Rarely. As Chapter 02 explains, working for free anchors your value at ₹0 and attracts high-maintenance clients. Instead, use 'Targeted Spec Work' (unsolicited samples you build on your own terms in under 2 hours) and 'Contra Deals' (bartering a service for a video testimonial or software pass). You get 100% of the proof with none of the exploitation."
  },
  {
    q: "Will this work for Indian clients who always haggle?",
    a: "Yes. In fact, Chapter 07 is dedicated entirely to 'The India Context'. Indian clients negotiate as a matter of cultural principle, not necessarily because they lack budget. The system teaches you the 15% negotiation buffer and the 'Scope Reduction' script so you always protect your hourly floor without losing deals."
  },
  {
    q: "Can this system help me close high-paying US/UK/EU clients?",
    a: "Absolutely. Week 2 (Day 10) and Week 3 (Day 21) focus on the International Outreach Engine — how to find recently funded international startups, reach founders in their timezone, send HRPA cold emails in clean English, and invoice in USD/EUR without getting stuck in currency friction."
  },
  {
    q: "What format do I receive the files in?",
    a: "You get instant lifetime access to beautifully formatted, high-resolution PDF editions of both 'Client Ready' (80 pages) and the implementation workbooks. They are fully printable and work on any laptop, tablet, or phone."
  },
  {
    q: "What if a client ghosts after the advance payment conversation?",
    a: "That is the system working, not failing! If a client refuses a standard 50% advance before you start work, they were almost certainly going to delay or default on your final invoice. The system weeds out non-paying clients before you sink 30 unbillable hours into their project."
  }
];
