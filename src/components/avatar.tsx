"use client";

export const getCircleSegment = (n: number) => {
  const segments = 12;
  const normalized = ((n % 360) + 360) % 360;
  const segmentSize = 360 / segments;
  return Math.floor(normalized / segmentSize);
};

export const createAvatarColor = ({
  h,
  s = 50,
  l,
  a = 1,
}: {
  h: number;
  s?: number;
  l: number;
  a?: number;
}) => {
  return `hsla(${getCircleSegment(h)}deg, ${s}%, ${l}%, ${a})`;
};

export const createAvatarBackground = (h: number) => {
  return `linear-gradient(45deg, ${createAvatarColor({
    h,
    l: 50,
  })}, ${createAvatarColor({ h, l: 10 })})`;
};

export default function Avatar({ n = 0 }: { n?: number }) {
  return (
    <div
      style={{
        background: createAvatarBackground(Math.floor(Math.random() * n)),
      }}
      className=" w-8 h-8 rounded-full bg-gradient-to-br"
    ></div>
  );
}
