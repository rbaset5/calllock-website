"use client";

import { useState } from "react";

export function MarketingHero() {
  const [missed, setMissed] = useState(18);
  const [avgJob, setAvgJob] = useState(340);
  const weeklyLoss = missed * avgJob;

  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 md:pt-[72px] pb-8 sm:pb-12">
      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 font-semibold text-[11px] sm:text-xs uppercase tracking-[0.09em] text-[#054d28] bg-[#e2f6d5] px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#054d28]" aria-hidden />
          Missed-call revenue recovery
        </span>
        <span className="inline-flex items-center font-semibold text-[11px] sm:text-xs uppercase tracking-[0.09em] text-[#054d28] bg-[#e2f6d5] px-3 py-1.5 rounded-full">
          Home services
        </span>
        <span className="inline-flex items-center font-semibold text-xs sm:text-[13px] text-[#454745] bg-white shadow-[0_0_0_1px_rgba(14,15,12,0.08)] px-3 py-1.5 rounded-full">
          Built for 1&ndash;15 truck shops. Not for call centers.
        </span>
      </div>

      <h1 className="font-[family-name:var(--mk-font-display)] font-black text-[44px] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] lg:leading-[0.85] tracking-[-0.025em] text-[#0e0f0c] mb-4 sm:mb-5 text-balance">
        You missed{" "}
        <span className="bg-[#9fe870] text-[#163300] px-2 sm:px-2.5 rounded-[10px] sm:rounded-xl inline-block">
          ${weeklyLoss.toLocaleString()}
        </span>
        <br />
        this week.
      </h1>

      <p className="font-medium text-base sm:text-lg md:text-xl text-[#454745] max-w-[620px] mb-6 sm:mb-8 leading-[1.45]">
        CallLock catches missed calls before voicemail, books the job, and
        texts you in 30 seconds. The 14-day trial shows you the real number
        &mdash; including the urgent hang-ups your log never sees.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
        <a
          href="#schedule"
          className="font-semibold text-base sm:text-[17px] bg-[#9fe870] text-[#163300] border-0 rounded-full px-5 sm:px-[22px] py-3.5 cursor-pointer active:scale-95 transition-transform no-underline text-center inline-flex items-center justify-center gap-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          See your real number
        </a>
        <a
          href="#schedule"
          className="font-semibold text-base sm:text-[17px] bg-transparent text-[#0e0f0c] border-0 px-2 py-3.5 cursor-pointer text-left sm:text-center no-underline"
        >
          See a live example &rarr;
        </a>
      </div>
      <div className="text-xs sm:text-[13px] font-medium text-[#868685] mb-10 sm:mb-12">
        14-day free trial. No card required. Live in 72 hours.
      </div>

      <div className="bg-white rounded-[20px] sm:rounded-[30px] shadow-[0_0_0_1px_rgba(14,15,12,0.12)] p-5 sm:p-6 md:p-7">
        <div className="font-bold text-[11px] sm:text-xs uppercase tracking-[0.09em] text-[#868685] mb-4">
          Do the math on your shop
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.3fr] gap-5 items-stretch md:items-end">
          <StepperField
            label="Missed calls this week (voicemails only)"
            value={missed}
            display={missed.toString()}
            onDec={() => setMissed(Math.max(0, missed - 1))}
            onInc={() => setMissed(Math.min(200, missed + 1))}
          />
          <StepperField
            label="Avg job ticket"
            value={avgJob}
            display={`$${avgJob}`}
            onDec={() => setAvgJob(Math.max(80, avgJob - 20))}
            onInc={() => setAvgJob(Math.min(2000, avgJob + 20))}
          />
          <div className="text-left md:text-right border-t md:border-t-0 border-[#e6e6e1] pt-4 md:pt-0">
            <div className="text-[13px] font-medium text-[#454745] mb-1">
              Visible revenue on the floor
            </div>
            <div className="font-[family-name:var(--mk-font-display)] font-black text-[36px] sm:text-[40px] leading-[0.9] text-[#d03238] tracking-[-0.02em]">
              ${weeklyLoss.toLocaleString()}
            </div>
            <div className="text-[12px] font-medium text-[#868685] mt-1.5 md:max-w-[220px] md:ml-auto">
              That&rsquo;s just the calls that hit voicemail.
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-[#e6e6e1] text-sm font-medium text-[#454745] leading-[1.5]">
          The hang-ups aren&rsquo;t in your log. CallLock catches those too.
          Your real number is bigger. The 14-day trial measures it.
        </div>
      </div>
    </section>
  );
}

function StepperField({
  label,
  display,
  onDec,
  onInc,
}: {
  label: string;
  value: number;
  display: string;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-[#454745]">{label}</label>
      <div className="flex items-center gap-1 bg-[#f8f8f5] rounded-full p-1 w-fit">
        <button
          onClick={onDec}
          className="w-8 h-8 border-0 rounded-full bg-[#0e0f0c] text-[#f8f8f5] text-lg font-semibold cursor-pointer active:scale-95 transition-transform"
          aria-label="Decrease"
        >
          &minus;
        </button>
        <span className="font-[family-name:var(--mk-font-display)] font-black text-xl min-w-[56px] text-center px-1.5">
          {display}
        </span>
        <button
          onClick={onInc}
          className="w-8 h-8 border-0 rounded-full bg-[#0e0f0c] text-[#f8f8f5] text-lg font-semibold cursor-pointer active:scale-95 transition-transform"
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
}
