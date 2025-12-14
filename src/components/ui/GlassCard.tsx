import type { PropsWithChildren } from "react";


type GlassCardProps = PropsWithChildren<{
  className?: string;
  hover?: boolean;
}>;

// GlassCard Component
export const GlassCard = ({
  children,
  className = "",
  hover = true,
}: GlassCardProps) => {
  return (
    <div
      className={`bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg rounded-2xl transition-all duration-300 ${
        hover
          ? "hover:shadow-2xl hover:scale-[1.02] hover:bg-white/70"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
