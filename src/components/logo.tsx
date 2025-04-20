import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
    </Link>
  );
}
