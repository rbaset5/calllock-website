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
    name: "Recovery",
    price: 197,
    forWho:
      "Solo and owner-operated shops. One phone, one calendar, every call caught before it turns into voicemail.",
    includesLabel: "What\u2019s included",
    includes: [
      "24/7 live pickup on every missed call that routes to CallLock",
      "Books the job straight to your Google or iCal calendar",
      "30-second SMS with caller name, number, issue, location, booked slot",
      "Spam and sales-call filtering",
      "Service-area check before booking (won\u2019t book a job outside your coverage)",
      "Emergency triage: \u201cwater actively leaking\u201d calls you. Routine bookings go silent to the calendar.",
      "Estimate ranges on the call, from your pricing",
      "Cell auto-forward: your mobile voicemail gets caught too",
      "Live transcripts and recordings on every call (30-day retention)",
      "Unlimited simultaneous calls, no busy signals",
      "72-hour done-for-you setup, no config screens",
      "Up to ~15 bookings per month",
    ],
    math: "One $500 service call pays for 2+ months. Miss one to voicemail and the tier covered itself twice.",
    quote: "Your AI receptionist answers when you can\u2019t.",
    cta: "Start Catching Calls",
  },
  {
    name: "Recovery Pro",
    price: 397,
    popular: true,
    forWho:
      "2 to 4 truck shops. Calls hitting faster than one person can read the SMS in time.",
    includesLabel: "Everything in Recovery, plus",
    includes: [
      "Up to ~40 bookings per month (from 15)",
      "Unlimited call-recording retention",
      "SMS reply commands so you can mark leads called or booked from the truck",
      "Route planning and maps inside the mobile app",
      "Snooze, notes, and in-app booking modal for rescheduling",
      "Same AI, same features, more capacity",
    ],
    math: "Book one extra job a month and you\u2019re ahead. Book two and you\u2019re 2\u00d7 up. At a $500 average ticket, the math holds from your first busy week.",
    quote: "Stop thinking. Start dispatching.",
    cta: "Start Booking More Jobs",
  },
  {
    name: "Recovery Scale",
    price: 797,
    forWho:
      "Shops with multiple phone lines, multiple locations, or a CRM you already run your business in.",
    includesLabel: "Everything in Recovery Pro, plus",
    includes: [
      "Multi-line routing: different numbers, different triage logic (HVAC line vs. drain line, retail vs. commercial, brand A vs. brand B)",
      "Custom AI scripts for unusual pricing, multi-brand shops, or per-service-line dispatch",
      "CRM sync into ServiceTitan, Housecall Pro, or Jobber (recovered bookings write straight into the CRM you already use)",
      "Recovery analytics: call volume, booked vs. unbooked, revenue recovered by source",
      "Unlimited bookings, no ceiling",
      "Dedicated onboarding and priority support",
    ],
    math: "Your LSA budget paid for those calls. Missed ones walk to whoever picks up first. Scale plugs the leak.",
    quote: "The customer never hung up, never called your competitor.",
    cta: "Start Free Trial",
  },
];

export function MarketingPricing() {
  return (
    <section id="pricing" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 pb-20 sm:pb-24">
      <div className="mb-8 sm:mb-10 max-w-[780px]">
        <div className="font-bold text-xs uppercase tracking-[0.14em] text-[#454745] mb-3.5">
          Pricing
        </div>
        <h2 className="font-[family-name:var(--mk-font-display)] font-black text-[34px] sm:text-5xl md:text-[56px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] text-[#0e0f0c] mb-4 text-balance">
          Every call that rolls to voicemail is a job walking to your competitor.
        </h2>
        <div className="text-base sm:text-lg font-medium text-[#454745] leading-[1.45]">
          Most shops we audit are losing $3,000 to $12,000 a month this way.
          CallLock catches every call, books the job straight to your calendar,
          texts you in 30 seconds. Live in 72 hours. Starts at $197/mo.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 items-stretch">
        {tiers.map((t) => (
          <TierCard key={t.name} t={t} />
        ))}
      </div>

      <div className="text-sm font-medium text-[#868685] mt-8 sm:mt-10 text-center px-4">
        14-day free trial on every plan. 48-hour done-for-you setup. Cancel from the app.
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
      <div
        className={`text-[11px] font-medium text-center mt-1 ${
          pop ? "text-[#b6b8b4]" : "text-[#868685]"
        }`}
      >
        14-day free trial. No card required.
      </div>
    </div>
  );
}
