import { lazy, Suspense } from "react";

import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";

const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const StatsSection = lazy(() => import("./components/sections/StatsSection"));
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const TestimonialsSection = lazy(() => import("./components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

const LazySections = [
  AboutSection,
  StatsSection,
  SkillsSection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
];

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <HeroSection />
        <Suspense fallback={null}>
          {LazySections.map((Section, i) => (
            <Section key={i} />
          ))}
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
