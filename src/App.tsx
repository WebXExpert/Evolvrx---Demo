/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { ServiceHeroesShowcase } from './pages/ServiceHeroesShowcase';
import { Batch2Showcase } from './pages/Batch2Showcase';
import { Batch3Showcase } from './pages/Batch3Showcase';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<ServiceHeroesShowcase />} />
          <Route path="/batch-2" element={<Batch2Showcase />} />
          <Route path="/batch-3" element={<Batch3Showcase />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}
