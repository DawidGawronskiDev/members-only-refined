import ProfileForm from "@/components/signup-form";
import MaxWidth from "@/components/ui/max-width";

export default function Signup() {
  return (
    <div>
      <MaxWidth>
        <div className="text-center">
          <h2>Join Members Only</h2>
          <p>Create your account to access exclusive discussions.</p>
        </div>
        <ProfileForm />
      </MaxWidth>
    </div>
  );
}
