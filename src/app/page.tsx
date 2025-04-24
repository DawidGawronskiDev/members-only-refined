import Features from "@/components/features";
import MaxWidthContanier from "@/components/max-width-container";
import SignInButton from "@/components/signin-button";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export function SectionHero() {
  return (
    <section>
      <MaxWidthContanier>
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1>Welcome to Members Only</h1>
            <p className="opacity-50 mt-1">
              A private space where only authorized users can read and share
              messages.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <SignInButton />
          </div>
        </div>
      </MaxWidthContanier>
    </section>
  );
}

export function SectionHowItWorks() {
  return (
    <section>
      <MaxWidthContanier>
        <div className="flex items-center justify-between w-full gap-8">
          <div className="w-full">
            <h2>How It Works?</h2>
            <ul className="space-y-8 mt-8">
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-foreground border-dashed flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <span className="text-lg font-bold">Sign In</span>
                  <p>The quick brown fox jumps over the lazy dog.</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-foreground border-dashed flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <span className="text-lg font-bold">Enter Your Key</span>
                  <p>Use your access key to unlock the space.</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-foreground border-dashed flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <span className="text-lg font-bold">Start Engaging</span>
                  <p>Read and share messages with the community.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthContanier>
    </section>
  );
}

export function SectionFeatures() {
  return (
    <section>
      <MaxWidthContanier>
        <div className="flex items-center justify-between w-full gap-8">
          <div className="w-full">
            <h2>Features</h2>
            <Features />
          </div>
        </div>
      </MaxWidthContanier>
    </section>
  );
}

export function SectionTestimonials() {
  return (
    <section>
      <MaxWidthContanier>
        <div className="flex items-center justify-between w-full gap-8">
          <div className="w-full">
            <h2>Testimonials</h2>
            <Testimonials />
          </div>
        </div>
      </MaxWidthContanier>
    </section>
  );
}

export function SectionJoin() {
  return (
    <section>
      <MaxWidthContanier>
        <div>
          <div>
            <h2>Join the Conversation</h2>
            <p>
              Your voice belongs here. Don&apos;t just scroll—be part of
              something real.
            </p>
          </div>
          <Link href={"/signin"}>
            <Button className="mt-2">Get Access Now</Button>
          </Link>
        </div>
      </MaxWidthContanier>
    </section>
  );
}
