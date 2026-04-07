import { TechBackground } from "./TechBackground";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <TechBackground />
    </div>
  );
}
