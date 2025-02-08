export default function Background() {
  return (
    <div className="absolute h-full z-[-1] w-full overflow-hidden">
      <div className="w-[940px] aspect-square rounded-full bg-accentSecondary absolute left-1/2 -translate-x-[calc(50%+400px)] -top-[500px] blur-[200px] transform-gpu" />
      <div className="w-[1300px] aspect-square rounded-full bg-accentPrimary absolute left-1/2 -translate-x-[calc(50%-450px)] -top-[400px] blur-[200px] transform-gpu" />
    </div>
  );
}

// <div className="w-[1300px] z-[-1] left-[250px] translate-x-1/2 aspect-square rounded-full bg-accentPrimary absolute right-[-500px] -top-[500px] blur-[200px] transform-gpu"></div>
// <div className="w-[940px] z-[-1] -left-[300px] translate-x-1/2 aspect-square rounded-full bg-accentSecondary absolute -top-[470px] blur-[200px]"></div>
