import SectionHow from "@/components/section-how";
import SectionTestimonials from "@/components/section-testimonials";
import SectionWelcome from "@/components/section-welcome";
import SectionWhy from "@/components/section-why";

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
