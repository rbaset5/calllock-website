import Image from "next/image";

export function MarketingFooter() {
  return (
    <footer className="bg-[#eef1eb] px-4 sm:px-6 pt-12 sm:pt-14 pb-6 mt-10 sm:mt-12">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-10 md:gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/calllock-logo-ink.png"
              alt="CallLock"
              width={24}
              height={24}
              className="block"
            />
            <span className="font-[family-name:var(--mk-font-display)] font-black text-xl text-[#0e0f0c] tracking-[-0.04em]">
              CallLock
            </span>
          </div>
          <div className="text-sm font-medium text-[#454745] leading-[1.45] max-w-[320px]">
            Missed-call revenue recovery for home services shops. Built for
            owner-operators answering the phone between jobs.
          </div>
          <div className="text-[13px] font-semibold text-[#0e0f0c] leading-[1.5] max-w-[320px]">
            HVAC. Plumbing. Electrical. Garage door. Drain. Water treatment.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#868685] mb-1">
              Product
            </div>
            <a href="#how" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">How it works</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Features</a>
            <a href="#pricing" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Pricing</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Integrations</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#868685] mb-1">
              Shop
            </div>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">HVAC</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Plumbing</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Electrical</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Garage door</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Drain</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Water treatment</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#868685] mb-1">
              Company
            </div>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">About</a>
            <a href="tel:+12487391087" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Support &middot; (248) 739-1087</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Terms</a>
            <a href="#" className="text-sm font-semibold text-[#0e0f0c] no-underline hover:opacity-70">Privacy</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-8 sm:mt-10 pt-5 border-t border-[rgba(14,15,12,0.08)] flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-xs font-medium text-[#868685]">&copy; 2026 CallLock, Inc.</span>
        <span className="text-xs font-medium text-[#868685]">Made in Detroit, MI.</span>
      </div>
    </footer>
  );
}
