import { useEffect, useState } from "react";

export const PawprintsDecor = () => {
  const [paws, setPaws] = useState<
    { id: number; top: string; left: string; size: string; rotate: string; opacity: string }[]
  >([]);

  useEffect(() => {
    const total = 6;
    const pawOptions = [];

    for (let i = 0; i < total; i++) {
      pawOptions.push({
        id: i,
        top: `${Math.floor(Math.random() * 80)}%`,
        left: `${Math.floor(Math.random() * 90)}%`,
        size: `${Math.floor(Math.random() * 40) + 24}`, // 6 to 14
        rotate: `${Math.floor(Math.random() * 60) - 30}`, // -30 to +30
        opacity: `${(Math.random() * 0.2 + 0.05).toFixed(2)}`, // 0.05 to 0.25
      });
    }

    setPaws(pawOptions);
  }, []);

  return (
    <>
      {paws.map((paw) => (
        <img
          key={paw.id}
          src="/assets/pawprint.png"
          alt="Paw"
          className={`absolute hidden md:block`}
          style={{
            top: paw.top,
            left: paw.left,
            width: `${paw.size}px`,
            opacity: paw.opacity,
            transform: `rotate(${paw.rotate}deg)`,
          }}
        />
      ))}
    </>
  );
};
