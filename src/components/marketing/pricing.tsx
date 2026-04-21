type Tier = {
  name: string;
  price: number;
  popular?: boolean;
  forWho: string;
  includesLabel: string;
  includes: string[];
  math: string;
  quote: string;
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Solo Operator",
    price: 349,
    forWho: "One truck. One phone. One shot at every call.",
    includesLabel: "What\u2019s included",
    includes: [
      "AI receptionist answers every missed call — 24/7",
      "Unlimited simultaneous calls (no busy signals, ever)",
      "Instant SMS with caller\u2019s name, number, issue, and location",
      "Smart lead capture — never lose a number again",
      "Mobile app to call back with one tap",
      "Works after hours, weekends, holidays",
    ],
    math: "One saved job (~$500) covers 3+ months. Miss one more call to voicemail and you\u2019ve already lost more than this costs.",
    quote: "Your AI receptionist answers when you can\u2019t.",
    cta: "Start Capturing Calls",
  },
  {
    name: "Small Crew",
    price: 499,
    popular: true,
    forWho: "2\u20135 techs. Multiple calls hitting at once. No time to call back.",
    includesLabel: "Everything in Solo Operator, plus",
    includes: [
      "Full AI qualification (service type, urgency, service area check)",
      "Direct booking to your calendar — no callbacks, no tag",
      "Velocity Triage app — Hazards, Recovery, Revenue, Logistics auto-tagged",
      "SMS reply commands (1=Called, 4=Booked) — handle leads from anywhere",
      "Maps + route planning inside the app",
      "Snooze, notes, booking modal — all in your pocket",
      "Handles Monday morning surges and storm rushes at once",
    ],
    math: "Your average ticket is $500. Book one extra job per month and you\u2019ve made it back 25%+ over. Book two and the AI pays for itself twice before lunch.",
    quote: "Stop thinking. Start dispatching.",
    cta: "Get Booked Automatically",
  },
  {
    name: "Growing Shop",
    price: 799,
    forWho: "5\u201315 techs. Scaling fast. Every missed opportunity costs real money.",
    includesLabel: "Everything in Small Crew, plus",
    includes: [
      "Automated review requests after every completed job (Google + Facebook)",
      "Win-back campaigns for leads that didn\u2019t book the first time",
      "Custom AI scripts — match your shop\u2019s voice, pricing rules, service areas",
      "CRM integrations (ServiceTitan, Housecall Pro, Jobber)",
      "Analytics dashboard — call volume, conversion, recovered revenue, source",
      "Priority support with dedicated onboarding",
      "Multi-line routing — different numbers, different workflows",
      "After-hours emergency routing for true HAZARD calls",
    ],
    math: "At 5+ techs, 15\u201325 calls/week go to voicemail. At $500 avg ticket, that\u2019s $30K\u2013$50K/mo at risk. Recover even 10% and this tier is a rounding error on ROI.",
    quote: "The customer never hung up, never called your competitor.",
    cta: "Scale Without Hiring",
  },
];

export function MarketingPricing() {
  return (
    <section id="pricing" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 pb-20 sm:pb-24">
      <div className="mb-8 sm:mb-10">
        <div className="font-bold text-xs uppercase tracking-[0.14em] text-[#454745] mb-3.5">
          Pricing
        </div>
        <h2 className="font-[family-name:var(--mk-font-display)] font-black text-[36px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[0.9] tracking-[-0.02em] text-[#0e0f0c] mb-3.5 text-balance">
          Pick the plan that
          <br />
          matches your shop.
        </h2>
        <div className="text-base sm:text-lg font-medium text-[#454745] max-w-[580px] leading-[1.4]">
          Flat monthly. Month-to-month. No per-call fees, no per-minute gotchas.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 items-stretch">
        {tiers.map((t) => (
          <TierCard key={t.name} t={t} />
        ))}
      </div>

      <div className="text-sm font-medium text-[#868685] mt-8 sm:mt-10 text-center px-4">
        14-day free trial on every plan. 48 hour setup. Cancel from the app.
      </div>
    </section>
  );
}

function TierCard({ t }: { t: Tier }) {
  const pop = !!t.popular;
  const cardBase =
    "relative rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col gap-3.5 h-full";
  const cardTheme = pop
    ? "bg-[#0e0f0c] text-[#f8f8f5] shadow-[0_24px_60px_-20px_rgba(14,15,12,0.35),0_0_0_1px_rgba(14,15,12,0.1)] lg:-translate-y-2"
    : "bg-white shadow-[0_0_0_1px_rgba(14,15,12,0.10)]";

  return (
    <div className={`${cardBase} ${cardTheme}`}>
      {pop && (
        <div className="absolute -top-3.5 left-6 font-extrabold text-[11px] tracking-[0.14em] uppercase bg-[#9fe870] text-[#163300] px-3 py-1.5 rounded-full">
          Most popular
        </div>
      )}

      <div className="font-extrabold text-[13px] tracking-[0.14em] uppercase">
        {t.name}
      </div>
      <div className="flex items-baseline gap-1 -mt-0.5">
        <span
          className={`font-[family-name:var(--mk-font-display)] font-black text-6xl sm:text-7xl md:text-[72px] leading-[0.9] tracking-[-0.03em] ${
            pop ? "text-[#9fe870]" : "text-[#0e0f0c]"
          }`}
        >
          ${t.price}
        </span>
        <span
          className={`text-lg font-semibold ${
            pop ? "text-[#b6b8b4]" : "text-[#454745]"
          }`}
        >
          /mo
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div
          className={`text-[10px] font-extrabold tracking-[0.14em] uppercase ${
            pop ? "text-[#9fe870]" : "text-[#054d28]"
          }`}
        >
          For
        </div>
        <div
          className={`text-sm font-medium leading-[1.45] ${
            pop ? "text-[#d6d7d3]" : "text-[#454745]"
          }`}
        >
          {t.forWho}
        </div>
      </div>

      <div className={`h-px w-full my-1.5 ${pop ? "bg-[#2a2c28]" : "bg-[#e6e6e1]"}`} />

      <div
        className={`text-[10px] font-extrabold tracking-[0.14em] uppercase ${
          pop ? "text-[#9fe870]" : "text-[#054d28]"
        }`}
      >
        {t.includesLabel}
      </div>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 flex-1">
        {t.includes.map((i) => (
          <li
            key={i}
            className={`text-sm font-medium flex items-start gap-2.5 leading-[1.4] ${
              pop ? "text-[#f8f8f5]" : "text-[#0e0f0c]"
            }`}
          >
            <span
              className={`w-[18px] h-[18px] rounded-full inline-flex items-center justify-center shrink-0 mt-0.5 ${
                pop ? "bg-[#163300]" : "bg-[#e2f6d5]"
              }`}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke={pop ? "#9fe870" : "#054d28"}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            {i}
          </li>
        ))}
      </ul>

      <div
        className={`rounded-2xl p-4 text-[13px] font-medium leading-[1.45] flex flex-col gap-1.5 mt-auto ${
          pop ? "bg-[#163300] text-[#d6d7d3]" : "bg-[#f1f1ea] text-[#454745]"
        }`}
      >
        <div
          className={`text-[10px] font-extrabold tracking-[0.14em] uppercase ${
            pop ? "text-[#9fe870]" : "text-[#054d28]"
          }`}
        >
          The math
        </div>
        <div>{t.math}</div>
      </div>

      <button
        className={`text-[15px] font-bold border-0 rounded-full py-3.5 px-4 cursor-pointer mt-1 text-center tracking-[-0.005em] active:scale-[0.98] transition-transform ${
          pop
            ? "bg-[#9fe870] text-[#163300]"
            : "bg-[#0e0f0c] text-[#f8f8f5]"
        }`}
      >
        {t.cta} — ${t.price}/mo
      </button>
    </div>
  );
}
