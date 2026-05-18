export default function DiamondOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-4 w-full max-w-lg mx-auto">
        <div className="h-[2px] bg-brand-green flex-grow opacity-60"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-brand-green">
          {/* Top diamond */}
          <path d="M12 2L14.5 7.5L12 10L9.5 7.5L12 2Z" fill="currentColor" />
          {/* Bottom diamond */}
          <path d="M12 22L14.5 16.5L12 14L9.5 16.5L12 22Z" fill="currentColor" />
          {/* Left diamond */}
          <path d="M2 12L7.5 9.5L10 12L7.5 14.5L2 12Z" fill="currentColor" />
          {/* Right diamond */}
          <path d="M22 12L16.5 9.5L14 12L16.5 14.5L22 12Z" fill="currentColor" />
        </svg>
        <div className="h-[2px] bg-brand-green flex-grow opacity-60"></div>
      </div>
    </div>
  );
}
