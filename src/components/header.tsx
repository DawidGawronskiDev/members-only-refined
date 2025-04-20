import Link from "next/link";
import MaxWidthContanier from "./max-width-container";
import SignInButton from "./signin-button";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 py-4">
      <MaxWidthContanier>
        <div className="flex items-center justify-between *:flex-1">
          <div>
            <Link href={"/"}>
              <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            </Link>
          </div>
          <div className="text-center">
            <nav>
              <ul>
                <li>
                  <Link href={"/posts"}>Posts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-right">
            <SignInButton />
          </div>
        </div>
      </MaxWidthContanier>
    </header>
  );
}
