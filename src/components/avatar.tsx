const getFade = () => {
  const s = Math.floor(Math.random() * 360);

  return {
    from: `hsl(${s},50%,50%)`,
    to: `hsl(${s + 30},100%,5%)`,
  };
};

export const Avatar = () => {
  const { from, to } = getFade();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${from}, ${to})`,
      }}
      className={`w-8 h-8 rounded-full`}
    ></div>
  );
};
