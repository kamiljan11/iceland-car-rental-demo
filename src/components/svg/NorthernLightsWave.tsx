/** Subtle aurora-inspired wave divider */
const NorthernLightsWave = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full ${className}`}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0 80 C240 20, 480 100, 720 60 C960 20, 1200 90, 1440 50 L1440 120 L0 120Z"
      fill="url(#aurora-wave)"
      opacity="0.07"
    />
    <path
      d="M0 90 C360 40, 600 110, 900 70 C1100 45, 1300 85, 1440 65 L1440 120 L0 120Z"
      fill="url(#aurora-wave2)"
      opacity="0.05"
    />
    <defs>
      <linearGradient id="aurora-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(var(--glacier))" />
        <stop offset="0.5" stopColor="hsl(var(--aurora))" />
        <stop offset="1" stopColor="hsl(var(--glacier))" />
      </linearGradient>
      <linearGradient id="aurora-wave2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(var(--aurora))" />
        <stop offset="1" stopColor="hsl(var(--glacier))" />
      </linearGradient>
    </defs>
  </svg>
);

export default NorthernLightsWave;
