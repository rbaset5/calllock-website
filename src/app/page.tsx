import { MarketingNav } from "@/components/marketing/nav";
import { MarketingHero } from "@/components/marketing/hero";
import { MarketingHowItWorks } from "@/components/marketing/how-it-works";
import { MarketingProofStrip } from "@/components/marketing/proof-strip";
import { MarketingTestimonial } from "@/components/marketing/testimonial";
import { MarketingPricing } from "@/components/marketing/pricing";
import { MarketingFooter } from "@/components/marketing/footer";

// Mobile-first responsive port of the HTML marketing artifact.
// Desktop visitors are rewritten to /marketing.html by middleware.ts.
// The -mt-20 cancels the global <main> pt-20 from the root layout,
// which only exists for the gold-themed subpages' fixed Navigation.
export default function Home() {
  return (
    <div className="marketing -mt-20">
      <MarketingNav />
      <MarketingHero />
      <MarketingHowItWorks />
      <MarketingProofStrip />
      <MarketingTestimonial />
      <MarketingPricing />
      <MarketingFooter />
    </div>
  );
}
