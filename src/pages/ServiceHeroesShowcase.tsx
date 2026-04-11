import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEOHero } from "../components/service-heroes/SEOHero";
import { ContentHero } from "../components/service-heroes/ContentHero";
import { SocialHero } from "../components/service-heroes/SocialHero";
import { LifecycleHero } from "../components/service-heroes/LifecycleHero";
import { ORMHero } from "../components/service-heroes/ORMHero";

export function ServiceHeroesShowcase() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-16 text-center px-8 relative z-10 border-b border-slate-200 bg-white">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Automated Service Banners</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Scroll down to view the premium, light-themed hero banners. Each features interactive animations depicting how we use automation to resolve complex growth challenges.</p>
      </div>

      <div className="flex flex-col">
        <SEOHero />
        <ContentHero />
        <SocialHero />
        <LifecycleHero />
        <ORMHero />
      </div>

      <Footer />
    </div>
  );
}
