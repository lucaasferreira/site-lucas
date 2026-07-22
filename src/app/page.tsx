import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { InProgress } from "@/components/sections/InProgress";
import { Testimonials } from "@/components/sections/Testimonials";
import { Audiences } from "@/components/sections/Audiences";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <ProjectsShowcase />
        <CaseStudies />
        <Process />
        <InProgress />
        <Testimonials />
        <Audiences />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
