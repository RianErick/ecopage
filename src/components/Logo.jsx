export default function Logo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="32" cy="34" rx="24" ry="18" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="32" cy="34" rx="16.5" ry="12" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="32" cy="34" rx="9" ry="6" stroke="#C56A38" strokeWidth="1.6" />
      <circle cx="32" cy="34" r="2" fill="#C56A38" />
    </svg>
  )
}
