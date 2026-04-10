/** Topographic contour lines — subtle background texture */
const TopoLines = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
    aria-hidden="true"
  >
    <path d="M50 250 C100 200, 180 220, 230 180 C280 140, 320 160, 370 120" stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    <path d="M30 260 C90 210, 160 235, 220 190 C280 145, 330 170, 390 125" stroke="currentColor" strokeWidth="0.5" opacity="0.06" fill="none" />
    <path d="M70 270 C120 220, 190 240, 240 200 C290 160, 340 175, 380 140" stroke="currentColor" strokeWidth="0.5" opacity="0.05" fill="none" />
    <path d="M60 230 C110 180, 170 210, 220 160 C270 110, 310 140, 360 100" stroke="currentColor" strokeWidth="0.5" opacity="0.07" fill="none" />
    <path d="M80 220 C130 170, 180 200, 230 150 C280 100, 320 130, 370 90" stroke="currentColor" strokeWidth="0.5" opacity="0.04" fill="none" />
  </svg>
);

export default TopoLines;
