import { Button } from "@/components/ui/button";
import MaxWidth from "@/components/ui/max-width";

export default function SectionHow() {
  return (
    <section>
      <MaxWidth>
        <div className="grid gap-6">
          <h2>How It Works?</h2>
          <div className="grid gap-16">
            <div className="flex gap-4">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-black dark:border-white border-dashed">
                  <span className="text-xl">1</span>
                </div>
              </div>
              <div>
                <h3>Sign Up</h3>
                <p>The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-black dark:border-white border-dashed">
                  <span className="text-xl">2</span>
                </div>
              </div>
              <div>
                <h3>Enter Your Key</h3>
                <p>Use your access key to unlock the space.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-black dark:border-white border-dashed">
                  <span className="text-xl">3</span>
                </div>
              </div>
              <div>
                <h3>Start Engaging</h3>
                <p>Read and share messages with the community.</p>
              </div>
            </div>
          </div>
          <Button className="w-fit">Get Started</Button>
        </div>
      </MaxWidth>
    </section>
  );
}
