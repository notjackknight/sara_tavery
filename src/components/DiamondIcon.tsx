export default function DiamondIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-brand-green ${className}`}>
      <path d="M12 2L14.5 7.5L12 10L9.5 7.5L12 2Z" fill="currentColor" />
      <path d="M12 22L14.5 16.5L12 14L9.5 16.5L12 22Z" fill="currentColor" />
      <path d="M2 12L7.5 9.5L10 12L7.5 14.5L2 12Z" fill="currentColor" />
      <path d="M22 12L16.5 9.5L14 12L16.5 14.5L22 12Z" fill="currentColor" />
    </svg>
  );
}
