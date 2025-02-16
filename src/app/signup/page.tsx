import GoogleButton from "@/components/google-button";
import MaxWidth from "@/components/ui/max-width";

export default function Signup() {
  return (
    <div>
      <MaxWidth>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="text-center">
            <h2>Join Members Only</h2>
            <p>Create your account to access exclusive discussions.</p>
          </div>
          <GoogleButton className="w-full max-w-lg" />
        </div>
      </MaxWidth>
    </div>
  );
}
