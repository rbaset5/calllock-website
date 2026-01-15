import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Benefits } from "@/components/home/benefits";
import { HowItWorks } from "@/components/home/how-it-works";
import { ComparisonDemoWrapper } from "@/components/home/comparison-demo-wrapper";
import { SurgeCapture } from "@/components/home/surge-capture";
import { FeaturesPreview } from "@/components/home/features-preview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <Benefits />
      <HowItWorks />
      <ComparisonDemoWrapper />
      <SurgeCapture />
      <FeaturesPreview />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
