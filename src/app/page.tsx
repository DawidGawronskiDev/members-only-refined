import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionHow from "@/components/section-how";
import SectionTestimonials from "@/components/section-testimonials";
import SectionWelcome from "@/components/section-welcome";
import SectionWhy from "@/components/section-why";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Header />
      <SectionWelcome />
      <SectionHow />
      <SectionWhy />
      <SectionTestimonials />
      <Footer />
    </div>
  );
}
