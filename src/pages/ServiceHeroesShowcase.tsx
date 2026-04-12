import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEOHero } from "../components/service-heroes/SEOHero";
import { ContentHero } from "../components/service-heroes/ContentHero";
import { SocialHero } from "../components/service-heroes/SocialHero";
import { LifecycleHero } from "../components/service-heroes/LifecycleHero";
import { ORMHero } from "../components/service-heroes/ORMHero";

// Category Heroes
import { WebDevHero } from "../components/service-heroes/WebDevHero";
import { PaidAdsHero } from "../components/service-heroes/PaidAdsHero";
import { VideoHero } from "../components/service-heroes/VideoHero";
import { PerformanceHero } from "../components/service-heroes/PerformanceHero";
import { AIAutomationsHero } from "../components/service-heroes/AIAutomationsHero";

// Sub-Service Heroes (Batch 1)
import { UIUXHero } from "../components/service-heroes/UIUXHero";
import { LandingPagesHero } from "../components/service-heroes/LandingPagesHero";
import { ProductDesignHero } from "../components/service-heroes/ProductDesignHero";
import { GraphicDesignHero } from "../components/service-heroes/GraphicDesignHero";
import { SEMHero } from "../components/service-heroes/SEMHero";
import { GoogleAdsHero } from "../components/service-heroes/GoogleAdsHero";
import { SocialAdsHero } from "../components/service-heroes/SocialAdsHero";
import { ShortsReelsHero } from "../components/service-heroes/ShortsReelsHero";

export function ServiceHeroesShowcase() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-16 text-center px-8 relative z-10 border-b border-slate-200 bg-white">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Automated Service Banners</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Scroll down to view the premium, light-themed hero banners. These represent the flagship designs for all overarching service categories, utilizing the EVOLVRYX DIGITAL brand palette.
        </p>
      </div>

      <div className="flex flex-col">
        {/* Original 5 */}
        <SEOHero />
        <ContentHero />
        <SocialHero />
        <LifecycleHero />
        <ORMHero />

        {/* New 5 Categories */}
        <div className="py-12 bg-slate-900 text-center text-white">
          <h2 className="text-2xl font-bold tracking-widest text-cyan-400 uppercase">New Service Categories</h2>
        </div>
        
        <WebDevHero />
        <PaidAdsHero />
        <VideoHero />
        <PerformanceHero />
        <AIAutomationsHero />

        {/* Sub-Services Batch 1 */}
        <div className="py-12 bg-slate-900 text-center text-white">
          <h2 className="text-2xl font-bold tracking-widest text-cyan-400 uppercase">Specific Sub-Services (Batch 1)</h2>
        </div>

        <UIUXHero />
        <LandingPagesHero />
        <ProductDesignHero />
        <GraphicDesignHero />
        <SEMHero />
        <GoogleAdsHero />
        <SocialAdsHero />
        <ShortsReelsHero />
      </div>

      <Footer />
    </div>
  );
}
