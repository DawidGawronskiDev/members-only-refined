import Background from "@/components/background";
import SectionHow from "@/components/section-how";
import SectionWelcome from "@/components/section-welcome";
import SectionWhy from "@/components/section-why";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Background />
      <SectionWelcome />
      <SectionHow />
      <SectionWhy />
    </div>
  );
}
