import Link from "next/link";
import UserMenu from "./user-menu";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 px-4 py-2">
      <Link href="/messages">Messages</Link>
      <UserMenu />
    </header>
  );
}
