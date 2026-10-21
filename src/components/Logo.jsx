export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle className="logo-ring" cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      <circle className="logo-ring logo-ring--inner" cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="1.2" />
      <path className="logo-contour" d="M13 36a19 19 0 0 1 38 0M18 36a14 14 0 0 1 28 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path className="logo-canopy" d="M22.3 28.8a7 7 0 0 1 4.9-11.9A8.1 8.1 0 0 1 42 19.8a6.8 6.8 0 0 1-.3 13.5H22.9a5.4 5.4 0 0 1-.6-4.5Z" />
      <path className="logo-trunk" d="M30.2 29.2h3.6v12.2h-3.6z" fill="currentColor" />
      <g className="logo-roots" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 39.5v5.2M32 43.2l-8 6.3M32 43.2l8 6.3M29.2 45.3l-2.4 6.4M34.8 45.3l2.4 6.4M25.7 48l-6.2-.2M38.3 48l6.2-.2" />
      </g>
      <circle className="logo-dot" cx="32" cy="32" r="2" />
    </svg>
  )
}
