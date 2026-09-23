import { TopBar } from "@/components/layout/TopBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { Hero } from "@/components/sections/Hero";
import { AboutTrust } from "@/components/sections/AboutTrust";
import { Services } from "@/components/sections/Services";
import { WhyWoodRidge } from "@/components/sections/WhyWoodRidge";
import { Listings } from "@/components/sections/Listings";
import { OffersAppraisal } from "@/components/sections/OffersAppraisal";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SiteHeader />

      <main id="main-content" className="site-main">
        <Hero />
        <AboutTrust />
        <Services />
        <WhyWoodRidge />
        <Listings />
        <OffersAppraisal />
        <FAQ />
      </main>

      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
