import { Shield, Star, Users } from "lucide-react";

const features = [
  {
    title: "Exclusive Access",
    description: "Not everyone gets in.",
    icon: <Star width={24} height={24} />,
  },
  {
    title: "Privacy First",
    description: "No public visibility, no distractions.",
    icon: <Shield width={24} height={24} />,
  },
  {
    title: "Community Focused",
    description: "Quality over quantity.",
    icon: <Users width={24} height={24} />,
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="text-center flex flex-col items-center justify-start border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm"
        >
          {feature.icon}
          <div className="mt-1">
            <span className="font-bold">{feature.title}</span>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
