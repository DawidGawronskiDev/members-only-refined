import MaxWidth from "@/components/ui/max-width";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100/5 backdrop-blur">
      <MaxWidth>
        <div className="flex py-4">
          <div className="w-full flex items-center justify-start">
            <Logo />
          </div>
          <div className="w-full flex items-center justify-center">
            <nav>
              <ul>
                <li className="text-sm">Messages</li>
              </ul>
            </nav>
          </div>
          <div className="w-full flex items-center justify-end">
            <ModeToggle />
            <Button variant="ghost">Sign Up</Button>
          </div>
        </div>
      </MaxWidth>
    </header>
  );
}
