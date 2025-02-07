import MaxWidth from "./ui/max-width";

export default function Background() {
  return (
    <div className="w-full min-h-screen overflow-hidden absolute top-0 left-0 z-[-1]">
      <MaxWidth>
        <div className="relative">
          <div className="w-[1300px] aspect-square rounded-full bg-accentPrimary absolute right-[-500px] -top-[500px] blur-[300px]"></div>
          <div className="w-[940px] aspect-square rounded-full bg-accentSecondary absolute left-[-700px] -top-[470px] blur-[300px]"></div>
        </div>
      </MaxWidth>
    </div>
  );
}
