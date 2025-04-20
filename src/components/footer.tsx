import Logo from "./logo";
import MaxWidthContanier from "./max-width-container";

export default function Footer() {
  return (
    <footer>
      <MaxWidthContanier>
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo />
          <p>© 2025 Members Only</p>
        </div>
      </MaxWidthContanier>
    </footer>
  );
}
