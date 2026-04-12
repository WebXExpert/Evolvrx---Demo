import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Sub-Service Heroes (Batch 2)
import { YouTubeEditingHero } from "../components/service-heroes/YouTubeEditingHero";
import { UGCVideosHero } from "../components/service-heroes/UGCVideosHero";
import { ColorGradingHero } from "../components/service-heroes/ColorGradingHero";
import { SubtitlesHero } from "../components/service-heroes/SubtitlesHero";
import { LeadGenerationHero } from "../components/service-heroes/LeadGenerationHero";
import { CROHero } from "../components/service-heroes/CROHero";
import { AnalyticsHero } from "../components/service-heroes/AnalyticsHero";
import { MarketingConsultancyHero } from "../components/service-heroes/MarketingConsultancyHero";

export function Batch2Showcase() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-16 text-center px-8 relative z-10 border-b border-slate-200 bg-white">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Design Catalogue: Batch 2</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Scroll down to view the second batch of specific sub-service hero banners. These feature diverse layouts including split-screens, masonry grids, before/after sliders, and 3D elements.
        </p>
      </div>

      <div className="flex flex-col">
        <YouTubeEditingHero />
        <UGCVideosHero />
        <ColorGradingHero />
        <SubtitlesHero />
        <LeadGenerationHero />
        <CROHero />
        <AnalyticsHero />
        <MarketingConsultancyHero />
      </div>

      <Footer />
    </div>
  );
}
