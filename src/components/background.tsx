export default function Background() {
  return (
    <>
      <div className="w-[940px] z-[-1] aspect-square rounded-full bg-accentSecondary absolute left-1/2 -translate-x-[calc(50%+400px)] -top-[500px] blur-[200px] transform-gpu" />
      <div className="w-[1300px] z-[-1] aspect-square rounded-full bg-accentPrimary absolute left-1/2 -translate-x-[calc(50%-450px)] -top-[400px] blur-[200px] transform-gpu" />
    </>
  );
}
