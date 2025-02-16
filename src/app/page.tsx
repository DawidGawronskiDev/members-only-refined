"use client";

import KeyIcon from "@/components/icons/key-icon";
import { Button } from "@/components/ui/button";
import { Cards } from "@/components/ui/card";
import MaxWidth from "@/components/ui/max-width";
import { Steps } from "@/components/ui/step";
import { Testimonials } from "@/components/ui/testimonial";
import { useAuth } from "@/store/auth-context";
import Link from "next/link";

export default function Home() {
  const auth = useAuth();

  return (
    <MaxWidth>
      <div className="space-y-32">
        <section>
          <main>
            <div className="flex flex-col gap-6 items-start md:text-center md:items-center">
              <div className="flex flex-col gap-2 items-center">
                <h1>Welcome to Members Only</h1>
                <p className="max-w-prose">
                  A private space where only authorized users can read and share
                  messages. Create an account, enter your access key, and join
                  the conversation.
                </p>
              </div>
              {!auth.currentUser && (
                <div className="flex items-center gap-6">
                  <Link href="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                  <p>or</p>
                  <Button variant="ghost">Sign In</Button>
                </div>
              )}
            </div>
          </main>
        </section>
        <section>
          <div className="grid gap-6">
            <h2>How It Works?</h2>
            <div className="md:grid md:grid-cols-2">
              <Steps />
              <div className="hidden md:grid place-content-center">
                <KeyIcon width={256} height={256} />
              </div>
            </div>
            {!auth.currentUser && (
              <Button className="w-fit">Get Started</Button>
            )}
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center gap-16">
            <h2>Why Join?</h2>
            <Cards />
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="text-center">
              <h2>What Our Members Say</h2>
              <p>Trusted by Professionals & Thinkers</p>
            </div>
            <Testimonials />
          </div>
        </section>
      </div>
    </MaxWidth>
  );
}
