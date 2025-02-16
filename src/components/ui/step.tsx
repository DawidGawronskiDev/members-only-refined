const STEPS = [
  {
    n: 1,
    title: "Sign Up",
    desc: "The quick brown fox jumps over the lazy dog.",
  },
  {
    n: 2,
    title: "Enter Your Key",
    desc: "Use your access key to unlock the space.",
  },
  {
    n: 3,
    title: "Start Engaging",
    desc: "Read and share messages with the community.",
  },
];

const Steps = () => {
  return (
    <div className="grid gap-16">
      {STEPS.map((step, index) => (
        <Step {...step} key={index} />
      ))}
    </div>
  );
};

const Step = ({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex gap-4">
      <div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center border border-black dark:border-white border-dashed">
          <span className="text-xl">{n}</span>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export { Steps, Step };
