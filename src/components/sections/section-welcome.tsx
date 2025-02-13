import { Button } from "@/components/ui/button";
import MaxWidth from "@/components/ui/max-width";
import Link from "next/link";

import { app } from "@/lib/firebase";

export default function SectionWelcome() {
  return (
    <section>
      <main>
        <MaxWidth>
          <div className="flex flex-col gap-6 items-start md:text-center md:items-center">
            <div className="flex flex-col gap-2 items-center">
              <h1>Welcome to {app.name}</h1>
              <p className="max-w-prose">
                A private space where only authorized users can read and share
                messages. Create an account, enter your access key, and join the
                conversation.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
              <p>or</p>
              <Button variant="ghost">Sign In</Button>
            </div>
          </div>
        </MaxWidth>
      </main>
    </section>
  );
}
