/** Delicate geometric snowflake */
const Snowflake = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* 6 arms */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 12 12)`}>
        <line x1="12" y1="12" x2="12" y2="3" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
        <line x1="12" y1="5" x2="10" y2="7" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        <line x1="12" y1="5" x2="14" y2="7" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      </g>
    ))}
    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.2" />
  </svg>
);

export default Snowflake;
