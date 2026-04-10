/** Radial gradient glow — aurora-inspired ambient light */
const AuroraGlow = ({ className = "", position = "center" }: { className?: string; position?: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const positions = {
    "center": "cx='50%' cy='50%'",
    "top-left": "cx='15%' cy='20%'",
    "top-right": "cx='85%' cy='20%'",
    "bottom-left": "cx='15%' cy='80%'",
    "bottom-right": "cx='85%' cy='80%'",
  };

  const [cx, cy] = position === "center" ? ["50%", "50%"]
    : position === "top-left" ? ["15%", "20%"]
    : position === "top-right" ? ["85%", "20%"]
    : position === "bottom-left" ? ["15%", "80%"]
    : ["85%", "80%"];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`aurora-glow-${position}`} cx={cx} cy={cy} r="50%" gradientUnits="userSpaceOnUse" fx={cx} fy={cy}>
          <stop offset="0%" stopColor="hsl(var(--glacier))" stopOpacity="0.06" />
          <stop offset="40%" stopColor="hsl(var(--aurora))" stopOpacity="0.03" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#aurora-glow-${position})`} />
    </svg>
  );
};

export default AuroraGlow;
