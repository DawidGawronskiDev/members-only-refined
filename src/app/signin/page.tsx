import LoginForm from "@/components/login-form";
import MaxWidthContanier from "@/components/max-width-container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="space-y-8 my-16">
      <MaxWidthContanier>
        <Card className="max-w-[500px] mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="text-center flex items-center justify-center">
            <span>
              Don&apos;t have an account?{" "}
              <Link href={"/signup"} className="underline">
                Sign Up
              </Link>
            </span>
          </CardFooter>
        </Card>
      </MaxWidthContanier>
    </main>
  );
}
