/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { CoreServices } from './components/CoreServices';
import { GrowthArchitecture } from './components/GrowthArchitecture';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-50">
        <Hero />
        <ServicesBento />
        <CoreServices />
        <GrowthArchitecture />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <BookingCTA />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
