import Button from "@/components/ui/button";
import MaxWidth from "@/components/ui/max-width";

export default function Home() {
  return (
    <div>
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
                <p className="text-grey">or</p>
                <Button variant="ghost">Sign In</Button>
              </div>
            </div>
          </MaxWidth>
        </main>
      </section>
    </div>
  );
}
