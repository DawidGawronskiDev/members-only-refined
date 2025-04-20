import MaxWidthContanier from "@/components/max-width-container";
import RegisterForm from "@/components/register-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="space-y-8 my-16">
      <MaxWidthContanier>
        <Card className="max-w-[500px] mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter className="text-center flex items-center justify-center">
            <span>
              Already have an account?{" "}
              <Link href={"/signin"} className="underline">
                Sign In
              </Link>
            </span>
          </CardFooter>
        </Card>
      </MaxWidthContanier>
    </main>
  );
}
