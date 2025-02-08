import MaxWidth from "@/components/ui/max-width";
import Button from "./ui/button";

// border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100/5 backdrop-blur">
      <MaxWidth>
        <div className="flex py-4">
          <div className="w-full flex items-center justify-start">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="w-full flex items-center justify-center">
            <nav>
              <ul>
                <li className="text-sm">Messages</li>
              </ul>
            </nav>
          </div>
          <div className="w-full flex items-center justify-end">
            <Button variant="ghost">Sign Up</Button>
          </div>
        </div>
      </MaxWidth>
    </header>
  );
}
