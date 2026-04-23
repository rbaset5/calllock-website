export function MarketingTestimonial() {
  return (
    <section className="bg-[#0e0f0c] py-14 sm:py-20 mt-8 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="font-bold text-xs sm:text-[13px] tracking-[0.1em] uppercase text-[#9fe870] mb-6 sm:mb-7">
          Frank Ramirez &middot; Ramirez HVAC &middot; 3 trucks
        </div>
        <blockquote className="font-[family-name:var(--mk-font-display)] font-black text-[28px] sm:text-4xl md:text-[44px] lg:text-[52px] leading-[1] tracking-[-0.02em] text-[#f8f8f5] m-0 mb-8 sm:mb-10 text-balance">
          &ldquo;I was running calls between jobs and still missing half the
          new ones. Turned CallLock on for a weekend. Paid for itself off a{" "}
          <span className="bg-[#9fe870] text-[#163300] px-2 rounded-lg">
            $1,080 compressor replacement
          </span>{" "}
          I would&rsquo;ve never heard about.&rdquo;
        </blockquote>
        <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
          <span className="font-[family-name:var(--mk-font-display)] font-black text-5xl sm:text-6xl md:text-[64px] text-[#9fe870] leading-[0.85] tracking-[-0.02em]">
            $4,210
          </span>
          <span className="text-base sm:text-lg font-medium text-[#868685]">
            recovered in March alone
          </span>
        </div>
      </div>
    </section>
  );
}
