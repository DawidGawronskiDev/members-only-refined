import UserMenu from "@/components/user-menu";
import MessagesLink from "@/components/messages-link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 px-4 py-2">
      <MessagesLink />
      <UserMenu />
    </header>
  );
}
