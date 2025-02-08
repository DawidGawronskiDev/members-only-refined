import Logo from "@/components/logo";
import MaxWidth from "@/components/ui/max-width";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="py-4">
      <MaxWidth>
        <div className="flex flex-col gap-4 items-center">
          <Logo />
          <p>&copy; {year} Members Only</p>
        </div>
      </MaxWidth>
    </footer>
  );
}
