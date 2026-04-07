/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <ServicesBento />
    </div>
  );
}
