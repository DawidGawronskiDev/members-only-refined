import MaxWidthContanier from "@/components/max-width-container";
import RegisterForm from "@/components/register-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUp() {
  return (
    <main>
      <MaxWidthContanier>
        <Card className="max-w-[500px] mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      </MaxWidthContanier>
    </main>
  );
}
