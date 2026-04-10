/** Minimal compass rose — Icelandic navigation feel */
const CompassRose = ({ className = "", size = 48 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer ring */}
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
    {/* Cardinal lines */}
    <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    {/* North pointer */}
    <polygon points="24,6 22,16 24,14 26,16" fill="currentColor" opacity="0.35" />
    {/* Center dot */}
    <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.3" />
    {/* Tick marks */}
    {[45, 135, 225, 315].map((deg) => (
      <line
        key={deg}
        x1="24"
        y1="4"
        x2="24"
        y2="8"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.2"
        transform={`rotate(${deg} 24 24)`}
      />
    ))}
  </svg>
);

export default CompassRose;
