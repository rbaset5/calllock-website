"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function fmtDate(d: Date) {
  return `${DOW_SHORT[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
}
function sameDay(a: Date | null, b: Date | null) {
  return !!a && !!b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}

export function MarketingSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  // 14-day window starting tomorrow (anchored to the render date at mount).
  const days = useMemo(() => {
    const today = new Date(2026, 3, 20); // matches desktop artifact anchor
    const out: Date[] = [];
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dow = d.getDay();
      if (dow === 0 || dow === 6) continue;
      out.push(d);
    }
    return out;
  }, []);

  const monthRange = `${MONTHS[days[0].getMonth()]} – ${MONTHS[days[days.length - 1].getMonth()]} ${days[days.length - 1].getFullYear()}`;

  if (confirmed && selectedDate && selectedTime) {
    return (
      <section id="schedule" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 pb-20 sm:pb-24">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_0_0_1px_rgba(14,15,12,0.10)] p-8 sm:p-12 md:p-14 text-center max-w-[640px] mx-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e2f6d5] flex items-center justify-center mx-auto mb-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#054d28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="font-extrabold text-xs tracking-[0.14em] uppercase text-[#054d28] mb-3">
            You&rsquo;re on the calendar
          </div>
          <h3 className="font-[family-name:var(--mk-font-display)] font-black text-[32px] sm:text-4xl md:text-[44px] leading-[0.95] tracking-[-0.02em] text-[#0e0f0c] mb-4 text-balance">
            See you {fmtDate(selectedDate)}
            <br />
            at {selectedTime}.
          </h3>
          <div className="text-base font-medium text-[#454745] leading-[1.45] max-w-[440px] mx-auto mb-6">
            A calendar invite is on its way to your inbox. Rashid will call from (512) 555-2121 — save it so it doesn&rsquo;t go to voicemail.
          </div>
          <button
            onClick={() => {
              setConfirmed(false);
              setSelectedDate(null);
              setSelectedTime(null);
            }}
            className="text-sm font-semibold bg-transparent text-[#0e0f0c] border-0 cursor-pointer underline underline-offset-[3px]"
          >
            Book a different time
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 pb-20 sm:pb-24">
      <div className="mb-8 sm:mb-10 max-w-[820px]">
        <div className="font-bold text-xs uppercase tracking-[0.14em] text-[#454745] mb-3.5">
          Get a walkthrough
        </div>
        <h2 className="font-[family-name:var(--mk-font-display)] font-black text-[36px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[0.9] tracking-[-0.02em] text-[#0e0f0c] mb-3.5 text-balance">
          Book a 20-minute
          <br />
          call with the founder.
        </h2>
        <div className="text-base sm:text-lg font-medium text-[#454745] max-w-[620px] leading-[1.4]">
          No deck, no sales pitch. Bring your missed-call log; we&rsquo;ll run the numbers on your shop live.
        </div>
      </div>

      <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_0_0_1px_rgba(14,15,12,0.10)] overflow-hidden grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        {/* Host column */}
        <div className="bg-[#0e0f0c] text-[#f8f8f5] p-7 sm:p-8 md:p-[30px] md:px-[30px] flex flex-col">
          <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden mb-4 md:mb-[18px] ring-2 ring-[#9fe870]">
            <Image
              src="/rashid-baset.jpg"
              alt="Rashid Baset, founder of CallLock"
              width={72}
              height={72}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
          <div className="font-bold text-[11px] tracking-[0.14em] uppercase text-[#9fe870] mb-1">
            Hosted by
          </div>
          <div className="font-[family-name:var(--mk-font-display)] font-black text-2xl sm:text-[30px] leading-none tracking-[-0.02em] text-[#f8f8f5] mb-0.5">
            Rashid Baset
          </div>
          <div className="text-sm font-medium text-[#b6b8b4] mb-5 md:mb-[22px]">
            Founder, CallLock
          </div>

          <div className="flex flex-col gap-2.5 pt-4 md:pt-[18px] border-t border-[#2a2c28]">
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#d6d7d3]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d6d7d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>20 minutes</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#d6d7d3]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d6d7d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Phone call &middot; your cell</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#d6d7d3]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d6d7d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>America/Chicago (CDT)</span>
            </div>
          </div>

          <div className="mt-6 md:mt-auto pt-5 md:pt-[22px] text-sm font-medium text-[#d6d7d3] leading-[1.4] border-l-2 border-[#9fe870] pl-3 italic">
            &ldquo;If CallLock isn&rsquo;t an obvious fit in 5 minutes, I&rsquo;ll tell you and we&rsquo;ll hang up.&rdquo;
          </div>
        </div>

        {/* Picker column */}
        <div className="p-6 sm:p-8 md:p-9 md:pb-8">
          <div className="flex items-baseline justify-between mb-3.5">
            <div className="font-extrabold text-xs tracking-[0.14em] uppercase text-[#0e0f0c]">
              1. Pick a day
            </div>
            <div className="text-xs font-semibold text-[#868685]">{monthRange}</div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {days.map((d) => {
              const isSel = sameDay(d, selectedDate);
              return (
                <button
                  key={d.toISOString()}
                  onClick={() => {
                    setSelectedDate(d);
                    setSelectedTime(null);
                  }}
                  className={`flex flex-col items-center gap-0.5 py-3 px-1.5 border-0 rounded-[14px] cursor-pointer transition-all duration-[120ms] ${
                    isSel
                      ? "bg-[#0e0f0c] text-[#f8f8f5] shadow-[inset_0_0_0_1px_#0e0f0c]"
                      : "bg-white text-[#0e0f0c] shadow-[inset_0_0_0_1px_rgba(14,15,12,0.12)] active:scale-[0.97]"
                  }`}
                >
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-60">
                    {DOW_SHORT[d.getDay()]}
                  </span>
                  <span className="font-[family-name:var(--mk-font-display)] font-black text-[22px] leading-none tracking-[-0.02em] mt-0.5">
                    {d.getDate()}
                  </span>
                  <span className="text-[10px] font-semibold opacity-55 mt-0.5">
                    {MONTHS[d.getMonth()]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-baseline justify-between mb-3.5 mt-6">
            <div className="font-extrabold text-xs tracking-[0.14em] uppercase text-[#0e0f0c]">
              2. Pick a time
              {selectedDate && (
                <span className="font-semibold tracking-normal normal-case text-[#454745]">
                  {" "}
                  &middot; {fmtDate(selectedDate)}
                </span>
              )}
            </div>
          </div>

          {!selectedDate ? (
            <div className="text-sm font-medium text-[#868685] py-5">
              Pick a day to see open slots.
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {TIMES.map((t) => {
                const isSel = t === selectedTime;
                return (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 px-2.5 border-0 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-[120ms] ${
                      isSel
                        ? "bg-[#9fe870] text-[#163300] shadow-[inset_0_0_0_1px_#054d28]"
                        : "bg-white text-[#0e0f0c] shadow-[inset_0_0_0_1px_rgba(14,15,12,0.12)] active:scale-[0.97]"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}

          <button
            disabled={!selectedDate || !selectedTime}
            onClick={() => setConfirmed(true)}
            className={`mt-6 w-full text-base font-bold border-0 rounded-full py-4 px-5 tracking-[-0.005em] transition-transform ${
              !selectedDate || !selectedTime
                ? "bg-[#e8ebe6] text-[#868685] cursor-not-allowed"
                : "bg-[#0e0f0c] text-[#f8f8f5] cursor-pointer active:scale-[0.98]"
            }`}
          >
            {selectedDate && selectedTime
              ? `Confirm ${fmtDate(selectedDate)} at ${selectedTime}`
              : "Pick a day and time to continue"}
          </button>
        </div>
      </div>
    </section>
  );
}
