import Background from "@/components/background";
import Button from "@/components/ui/button";
import MaxWidth from "@/components/ui/max-width";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Background />
      <section>
        <main>
          <MaxWidth>
            <div className="flex flex-col gap-6 items-start md:text-center md:items-center">
              <div className="flex flex-col gap-2 items-center">
                <h1>Welcome to Members Only</h1>
                <p className="max-w-prose">
                  A private space where only authorized users can read and share
                  messages. Create an account, enter your access key, and join
                  the conversation.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button rounded="full">Sign Up</Button>
                <p>or</p>
                <Button variant="ghost">Sign In</Button>
              </div>
            </div>
          </MaxWidth>
        </main>
      </section>
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
      <section>
        <MaxWidth>
          <div className="flex flex-col items-center gap-16">
            <h2>Why Join?</h2>
            <div className="grid gap-4">
              <div className="flex flex-col items-center p-6 text-center">
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
              <div className="flex flex-col items-center p-6 text-center">
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
              <div className="flex flex-col items-center p-6 text-center">
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
    </div>
  );
}
