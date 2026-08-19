import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FairPrice from "@/components/sections/FairPrice";
import Services from "@/components/sections/Services";
import AIFeatures from "@/components/sections/AIFeatures";
import Safety from "@/components/sections/Safety";
import RiderExperience from "@/components/sections/RiderExperience";
import Driver from "@/components/sections/Driver";
import AppShowcase from "@/components/sections/AppShowcase";
import Business from "@/components/sections/Business";
import Cities from "@/components/sections/Cities";
import SocialImpact from "@/components/sections/SocialImpact";
import News from "@/components/sections/News";
import DownloadCTA from "@/components/sections/DownloadCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FairPrice />
      <Services />
      <AIFeatures />
      <Safety />
      <RiderExperience />
      <Driver />
      <AppShowcase />
      <Business />
      <Cities />
      <SocialImpact />
      <News />
      <DownloadCTA />
      <FinalCTA />
      <BackToTop />
    </>
  );
}
