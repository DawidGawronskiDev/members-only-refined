import MaxWidthContanier from "@/components/max-width-container";
import SignInButton from "@/components/signin-button";
import { Shield, Star, Users } from "lucide-react";

export default async function Home() {
  return (
    <main className="space-y-32">
      <section>
        <MaxWidthContanier>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1>Welcome to Members Only</h1>
              <p className="opacity-50 mt-1">
                A private space where only authorized users can read and share
                messages. Create an account, enter your access key, and join the
                conversation.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <SignInButton />
            </div>
          </div>
        </MaxWidthContanier>
      </section>
      <section>
        <MaxWidthContanier>
          <div className="flex items-center justify-between w-full gap-8">
            <div className="w-full">
              <h2>How It Works?</h2>
              <ul className="space-y-8 mt-8">
                <li className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-dashed flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold">Sign In</span>
                    <p>The quick brown fox jumps over the lazy dog.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-dashed flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold">Enter Your Key</span>
                    <p>Use your access key to unlock the space.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-dashed flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold">Start Engaging</span>
                    <p>Read and share messages with the community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <div className="w-full aspect-square bg-gray-500"></div>
            </div>
          </div>
        </MaxWidthContanier>
      </section>
      <section>
        <MaxWidthContanier>
          <div className="space-y-16">
            <h2 className="text-center">Why Join?</h2>
            <div className="flex items-center justify-between *:flex-1">
              <div className="text-center flex flex-col items-center justify-center">
                <Star width={24} height={24} />
                <div className="mt-1">
                  <span className="font-bold">Exclusive Access</span>
                  <p>Not everyone gets in.</p>
                </div>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <Shield width={24} height={24} />
                <div className="mt-1">
                  <span className="font-bold">Privacy First</span>
                  <p>No public visibility, no distractions.</p>
                </div>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <Users width={24} height={24} />
                <div className="mt-1">
                  <span className="font-bold">Community Focused</span>
                  <p>Quality over quantity.</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContanier>
      </section>
    </main>
  );
}
