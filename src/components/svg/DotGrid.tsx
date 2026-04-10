/** Subtle dot grid pattern background */
const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    aria-hidden="true"
  >
    <defs>
      <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.6" fill="currentColor" opacity="0.12" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-grid)" />
  </svg>
);

export default DotGrid;
