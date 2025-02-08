import MaxWidth from "@/components/ui/max-width";
import Image from "next/image";

export default function SectionWhy() {
  return (
    <section>
      <MaxWidth>
        <div className="flex flex-col items-center gap-16">
          <h2>Why Join?</h2>
          <div className="w-full grid md:grid-cols-3 md:flex-row items-center md:items-start gap-4">
            <Card
              title="Exclusive Access"
              description="Not everyone gets in."
              image="/sparkle.svg"
            />
            <Card
              title="Privacy First"
              description="No public visibility, no distractions."
              image="/shield.svg"
            />
            <Card
              title="Community Focused"
              description="Quality over quantity."
              image="/users-round.svg"
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}

export function Card({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full border border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 shadow-sm">
      <Image src={image} alt="" width={20} height={20} />
      <div className="text-center">
        <h3>{title}</h3>
        <p className="font-extralight">{description}</p>
      </div>
    </div>
  );
}
