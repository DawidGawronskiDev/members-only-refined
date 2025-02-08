import MaxWidth from "@/components/ui/max-width";
import Image from "next/image";

export default function SectionWhy() {
  return (
    <section>
      <MaxWidth>
        <div className="flex flex-col items-center gap-16">
          <h2>Why Join?</h2>
          <div className="w-full grid md:grid-cols-3 md:flex-row items-center md:items-start gap-4">
            <div className="flex flex-col items-center gap-4 w-full h-full border border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 shadow-sm">
              <Image src="/sparkle.svg" alt="" width={20} height={20} />
              <div className="text-center">
                <h3>Exclusive Access</h3>
                <p className="font-extralight">Not everyone gets in.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full h-full border border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 shadow-sm">
              <Image src="/shield.svg" alt="" width={20} height={20} />
              <div className="text-center">
                <h3>Privacy First</h3>
                <p className="font-extralight">
                  No public visibility, no distractions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-full h-full border border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 shadow-sm">
              <Image src="/users-round.svg" alt="" width={20} height={20} />
              <div className="text-center">
                <h3>Community Focused</h3>
                <p className="font-extralight">Quality over quantity.</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
