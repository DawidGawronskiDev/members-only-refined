import MaxWidth from "./ui/max-width";

export default function SectionTestimonials() {
  return (
    <section>
      <MaxWidth>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="text-center">
            <h2>What Our Members Say</h2>
            <p>Trusted by Professionals & Thinkers</p>
          </div>
          <div className="flex flex-4 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  Finally, a space where I can share my thoughts without
                  worrying about ads or data tracking. Feels safe, feels right.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Alex M.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  I love how focused the discussions are. No spam, no noise—just
                  real, valuable conversations.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Sarah L.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  Getting an access key made me feel like part of something
                  special. This isn’t just another social platform—it’s a
                  private club for thinkers.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">James R.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col md:gap-4">
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  The best-kept secret for deep, focused discussions.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Emily K.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  Finally, a space where I can speak freely without worrying
                  about my data being sold. This is the future of online
                  discussions!
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Rachel W.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  The exclusivity ensures a high standard of discussion. I’ve
                  gained new insights and ideas that helped me in my career.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Lisa N.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col md:gap-4">
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  Every conversation here is insightful. No clickbait, no
                  shallow posts—just meaningful discussions that actually
                  matter.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">David P.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  Unlike other platforms, people here actually engage
                  thoughtfully. I’ve built strong professional relationships
                  just by being active.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Tomek P.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
                <blockquote className="font-extralight">
                  No ads, just real people having real conversations.
                </blockquote>
                <div className="flex gap-3">
                  <div className="w-8 aspect-square rounded-full from-orange-600 to-black bg-gradient-to-br"></div>
                  <p className="opacity-100 font-bold">Mark T.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
