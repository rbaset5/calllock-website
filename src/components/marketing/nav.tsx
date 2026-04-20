import Image from "next/image";

export function MarketingNav() {
  return (
    <nav className="sticky top-0 z-20 bg-[#f8f8f5]/85 backdrop-blur-md border-b border-[rgba(14,15,12,0.08)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 no-underline shrink-0">
          <Image
            src="/calllock-logo-ink.png"
            alt="CallLock"
            width={30}
            height={30}
            className="block w-6 h-6 sm:w-[30px] sm:h-[30px]"
            priority
          />
          <span className="font-[family-name:var(--mk-font-display)] font-black text-lg sm:text-[22px] text-[#0e0f0c] tracking-[-0.04em]">
            CallLock
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          <a href="#how" className="font-semibold text-[15px] text-[#0e0f0c] no-underline hover:opacity-70 transition-opacity">How it works</a>
          <a href="#proof" className="font-semibold text-[15px] text-[#0e0f0c] no-underline hover:opacity-70 transition-opacity">Proof</a>
          <a href="#pricing" className="font-semibold text-[15px] text-[#0e0f0c] no-underline hover:opacity-70 transition-opacity">Pricing</a>
          <a href="#login" className="font-semibold text-[15px] text-[#0e0f0c] no-underline hover:opacity-70 transition-opacity">Log in</a>
          <button className="font-semibold text-[15px] bg-[#0e0f0c] text-[#f8f8f5] rounded-full px-[18px] py-2.5 border-0 cursor-pointer hover:scale-[1.02] transition-transform">
            Start catching calls
          </button>
        </div>
        <a
          href="#pricing"
          className="lg:hidden font-semibold text-sm bg-[#0e0f0c] text-[#f8f8f5] rounded-full px-4 py-2 no-underline active:scale-95 transition-transform"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
