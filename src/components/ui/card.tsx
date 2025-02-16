import { ElementType } from "react";
import SparkleIcon from "@/components/icons/sparkle-icon";
import ShieldIcon from "@/components/icons/shield-icon";
import UsersIcon from "@/components/icons/users-icon";

const CARDS = [
  {
    title: "Exclusive Access",
    description: "Not everyone gets in.",
    Image: SparkleIcon,
  },
  {
    title: "Privacy First",
    description: "No public visibility, no distractions.",
    Image: ShieldIcon,
  },
  {
    title: "Community Focused",
    description: "Quality over quantity.",
    Image: UsersIcon,
  },
];

const Cards = () => {
  return (
    <div className="w-full grid md:grid-cols-3 md:flex-row items-center md:items-start gap-4">
      {CARDS.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </div>
  );
};

const Card = ({
  title,
  description,
  Image,
}: {
  title: string;
  description: string;
  Image: ElementType;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 shadow-sm">
      <Image alt="" />
      <div className="text-center">
        <h3>{title}</h3>
        <p className="font-extralight">{description}</p>
      </div>
    </div>
  );
};

export { Cards, Card };
