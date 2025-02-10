import SectionHow from "@/components/sections/section-how";
import SectionTestimonials from "@/components/sections/section-testimonials";
import SectionWelcome from "@/components/sections/section-welcome";
import SectionWhy from "@/components/sections/section-why";

export default function Home() {
  return (
    <>
      <SectionWelcome />
      <SectionHow />
      <SectionWhy />
      <SectionTestimonials />
    </>
  );
}
