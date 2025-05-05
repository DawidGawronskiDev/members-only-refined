import {
  SectionFeatures,
  SectionHero,
  SectionHowItWorks,
  SectionJoin,
  SectionTestimonials,
} from "@/components/sections";

export default async function Home() {
  return (
    <main className="space-y-32 my-16">
      <SectionHero />
      <SectionHowItWorks />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionJoin />
    </main>
  );
}
