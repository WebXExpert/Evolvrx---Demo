/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/SmoothScroll';
import { ServiceHeroesShowcase } from './pages/ServiceHeroesShowcase';

export default function App() {
  return (
    <SmoothScroll>
      <ServiceHeroesShowcase />
    </SmoothScroll>
  );
}
