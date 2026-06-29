export default function RouteDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 24"
      className={`route-divider ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 12 C 80 2, 140 22, 220 12 S 360 2, 440 14 S 540 20, 600 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <circle cx="0" cy="12" r="3" fill="currentColor" />
      <circle cx="600" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
