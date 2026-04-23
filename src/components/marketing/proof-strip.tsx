const scenarios = [
  { label: "Solo operator \u00b7 slow week", missed: 8, avg: 280 },
  { label: "Busy 2-truck \u00b7 summer heat", missed: 22, avg: 340 },
  { label: "5-truck shop \u00b7 Monday surge", missed: 35, avg: 420 },
  { label: "Storm week \u00b7 after-hours", missed: 58, avg: 380 },
];

export function MarketingProofStrip() {
  return (
    <section id="proof" className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      <div className="mb-8 sm:mb-10 max-w-[820px]">
        <div className="font-bold text-xs uppercase tracking-[0.14em] text-[#454745] mb-3.5">
          How the math works
        </div>
        <h2 className="font-[family-name:var(--mk-font-display)] font-black text-[32px] sm:text-5xl md:text-[56px] leading-[0.95] tracking-[-0.02em] text-[#0e0f0c] mb-3.5 text-balance">
          Missed calls this week
          <br />
          <span className="text-[#868685]">&times;</span> your avg job ticket
          <br />
          ={" "}
          <span className="bg-[#9fe870] text-[#163300] px-2 rounded-[10px]">
            revenue on the floor.
          </span>
        </h2>
        <div className="text-base sm:text-[17px] font-medium text-[#454745] leading-[1.4] max-w-[620px]">
          Not a guess. Pull your missed-call log and do the multiplication.
          Most shops are shocked by the answer.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        {scenarios.map((s) => {
          const loss = s.missed * s.avg;
          return (
            <div
              key={s.label}
              className="bg-white rounded-[20px] shadow-[0_0_0_1px_rgba(14,15,12,0.12)] p-5 pb-[22px] flex flex-col"
            >
              <div className="font-bold text-[11px] tracking-[0.09em] uppercase text-[#868685] mb-3.5">
                {s.label}
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 mb-3">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="font-[family-name:var(--mk-font-display)] font-black text-[28px] sm:text-[30px] leading-[0.9] text-[#0e0f0c] tracking-[-0.02em]">
                    {s.missed}
                  </div>
                  <div className="text-[10px] font-semibold text-[#868685] tracking-[0.03em] uppercase text-center">
                    missed calls
                  </div>
                </div>
                <div className="font-[family-name:var(--mk-font-display)] font-black text-xl text-[#868685]">
                  &times;
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="font-[family-name:var(--mk-font-display)] font-black text-[28px] sm:text-[30px] leading-[0.9] text-[#0e0f0c] tracking-[-0.02em]">
                    ${s.avg}
                  </div>
                  <div className="text-[10px] font-semibold text-[#868685] tracking-[0.03em] uppercase text-center">
                    avg ticket
                  </div>
                </div>
              </div>
              <div className="h-0.5 bg-[#0e0f0c] w-7 rounded-[1px] my-1 mb-2.5 mx-auto" />
              <div className="font-[family-name:var(--mk-font-display)] font-black text-[36px] sm:text-[40px] leading-[0.9] text-[#d03238] tracking-[-0.02em] text-center">
                ${loss.toLocaleString()}
              </div>
              <div className="text-xs font-medium text-[#868685] text-center mt-1.5">
                on the floor this week
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-sm font-medium text-[#454745] text-center mt-7 italic max-w-[760px] mx-auto">
        Most shops miss 15 to 25 calls a week <span className="underline underline-offset-[3px]">and don&rsquo;t realize it.</span> The impatient callers, the ones who hang up before voicemail, never generate a log entry. Those are the emergency and install-today jobs, the ones worth the most. CallLock catches them before voicemail.
      </div>
    </section>
  );
}
