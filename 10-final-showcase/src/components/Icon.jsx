const iconClass = "size-5 shrink-0";

export function SearchIcon() {
  return (
    <svg className={iconClass} aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

export function HeartIcon({ filled = false }) {
  return (
    <svg className={iconClass} aria-hidden="true" viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
      <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg className={iconClass} aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg className={iconClass} aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
