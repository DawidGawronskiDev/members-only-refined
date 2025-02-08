import MaxWidth from "@/components/ui/max-width";
import Image from "next/image";

export default function SectionWhy() {
  return (
    <section>
      <MaxWidth>
        <div className="flex flex-col items-center gap-16">
          <h2>Why Join?</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex flex-col items-center p-6 text-center w-full">
              <Image
                src="/sparkle.svg"
                alt=""
                width={20}
                height={20}
                className="mb-2"
              />
              <h3>Exclusive Access</h3>
              <p>Not everyone gets in.</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center w-full">
              <Image
                src="/shield.svg"
                alt=""
                width={20}
                height={20}
                className="mb-2"
              />
              <h3>Privacy First</h3>
              <p>No public visibility, no distractions.</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center w-full">
              <Image
                src="/users-round.svg"
                alt=""
                width={20}
                height={20}
                className="mb-2"
              />
              <h3>Community Focused</h3>
              <p>Quality over quantity.</p>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
