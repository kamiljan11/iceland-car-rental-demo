/** Cross-hatch texture for a tactile, handcrafted feel */
const CrossHatch = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    aria-hidden="true"
  >
    <defs>
      <pattern id="cross-hatch" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#cross-hatch)" />
  </svg>
);

export default CrossHatch;
