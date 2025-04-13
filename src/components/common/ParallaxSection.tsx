import { ReactNode } from "react";

interface SectionProps {
  imageUrl?: string;
  height?: string;
  children?: ReactNode;
}

export function ParallaxSection({
  imageUrl,
  height = "100vh",
  children,
}: SectionProps) {
  const hasImage = Boolean(imageUrl);

  return (
    <section
      style={{
        height,
        position: "relative",
        backgroundColor: hasImage ? "transparent" : "#ffffff", // blanco puro si no hay imagen
        backgroundImage: hasImage ? `url(${imageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center"
    >

      <div className="absolute inset-0 bg-black opacity-30" />

      <div className="w-full text-center text-white px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}
