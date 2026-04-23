const steps = [
  {
    n: "01",
    title: "Phone rings while you\u2019re on the job.",
    body: "You don\u2019t pick up. After it rings out, CallLock answers in your shop\u2019s voice. No holds, no \u201cpress 1 for service.\u201d No voicemail.",
  },
  {
    n: "02",
    title: "Caller gets qualified in 45 seconds.",
    body: "Name. Address. What\u2019s broken. How urgent. Service-area check. Then booked straight to your calendar, before the caller hangs up.",
  },
  {
    n: "03",
    title: "You get the receipt.",
    body: "SMS on your phone in 30 seconds: caller, job, estimate, booked time. Full transcript if you want to audit the call. That\u2019s it.",
  },
];

export function MarketingHowItWorks() {
  return (
    <section id="how" className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="font-[family-name:var(--mk-font-display)] font-black text-[36px] sm:text-5xl md:text-[56px] leading-[0.9] tracking-[-0.02em] text-[#0e0f0c] mb-12 sm:mb-14 md:mb-16 text-balance">
        Three things. Nothing else.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-white rounded-[22px] sm:rounded-[30px] shadow-[0_0_0_1px_rgba(14,15,12,0.12)] p-6 sm:p-7 flex flex-col gap-3 md:min-h-[220px]"
          >
            <div
              className="font-[family-name:var(--mk-font-display)] font-black text-[28px] text-[#9fe870] tracking-[-0.02em]"
              style={{ WebkitTextStroke: "1.5px #054d28" }}
            >
              {s.n}
            </div>
            <div className="text-[20px] sm:text-[22px] font-semibold leading-[1.2] tracking-[-0.018em] text-[#0e0f0c] text-balance">
              {s.title}
            </div>
            <div className="text-base text-[#454745] leading-[1.45]">{s.body}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-7 text-right">
        <a
          href="#pricing"
          className="inline-block text-sm sm:text-[15px] font-semibold text-[#0e0f0c] no-underline hover:opacity-70 transition-opacity"
        >
          See the full process &rarr;
        </a>
      </div>
    </section>
  );
}
