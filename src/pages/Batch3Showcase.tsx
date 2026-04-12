import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Sub-Service Heroes (Batch 3)
import { WebsiteDesignHero } from "../components/service-heroes/WebsiteDesignHero";
import { AIChatbotsHero } from "../components/service-heroes/AIChatbotsHero";
import { WorkflowAutomationsHero } from "../components/service-heroes/WorkflowAutomationsHero";
import { CustomAppDevHero } from "../components/service-heroes/CustomAppDevHero";
import { EnterpriseSoftwareHero } from "../components/service-heroes/EnterpriseSoftwareHero";
import { PredictiveAIHero } from "../components/service-heroes/PredictiveAIHero";

export function Batch3Showcase() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-16 text-center px-8 relative z-10 border-b border-slate-200 bg-white">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Design Catalogue: Batch 3</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Scroll down to view the final batch of specific sub-service hero banners. These feature advanced layouts including browser mockups, interactive chat interfaces, node graphs, and 3D device renders.
        </p>
      </div>

      <div className="flex flex-col">
        <WebsiteDesignHero />
        <AIChatbotsHero />
        <WorkflowAutomationsHero />
        <CustomAppDevHero />
        <EnterpriseSoftwareHero />
        <PredictiveAIHero />
      </div>

      <Footer />
    </div>
  );
}
