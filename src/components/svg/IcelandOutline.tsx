/** Simplified Iceland island silhouette */
const IcelandOutline = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M30 70 C35 55, 50 45, 65 42 C75 40, 82 35, 95 30 C105 27, 115 25, 130 28 C142 30, 150 35, 160 40 C168 44, 175 50, 178 58 C180 65, 176 72, 170 76 C162 80, 150 82, 140 80 C130 78, 120 80, 110 82 C100 84, 88 85, 75 83 C62 81, 48 78, 38 75 C33 73, 28 72, 30 70Z"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.12"
      fill="none"
    />
    {/* Reykjavik dot */}
    <circle cx="72" cy="68" r="1.5" fill="currentColor" opacity="0.2" />
    {/* KEF dot */}
    <circle cx="62" cy="78" r="1" fill="currentColor" opacity="0.15" />
  </svg>
);

export default IcelandOutline;
