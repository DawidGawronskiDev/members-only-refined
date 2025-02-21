import MaxWidth from "@/components/ui/max-width";
import Logo from "@/components/logo";
import UserMenu from "@/components/user-menu";
import MessagesAccess from "@/components/messages-access";
import { ModeToggle } from "@/components/mode-toggle";

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
                <li className="text-sm">
                  <MessagesAccess />
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full flex items-center justify-end gap-2">
            <ModeToggle />
            <UserMenu />
          </div>
        </div>
      </MaxWidth>
    </header>
  );
}
