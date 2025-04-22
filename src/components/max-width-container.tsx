export default function MaxWidthContanier({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-full max-w-6xl mx-auto px-4">{children}</div>;
}
