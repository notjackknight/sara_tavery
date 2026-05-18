interface CornerBracketsProps {
  variant?: 'top' | 'diagonal';
}

export default function CornerBrackets({ variant = 'top' }: CornerBracketsProps) {
  if (variant === 'diagonal') {
    return (
      <>
        <div aria-hidden="true" className="pointer-events-none absolute top-10 left-10 hidden lg:block">
          <div className="w-16 h-px bg-brand-green/40" />
          <div className="w-px h-16 bg-brand-green/40" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-10 right-10 hidden lg:block">
          <div className="w-px h-16 bg-brand-green/40 ml-auto" />
          <div className="w-16 h-px bg-brand-green/40 ml-auto" />
        </div>
      </>
    );
  }

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute top-10 left-10 hidden lg:block">
        <div className="w-16 h-px bg-brand-green/40" />
        <div className="w-px h-16 bg-brand-green/40" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-10 right-10 hidden lg:block">
        <div className="w-16 h-px bg-brand-green/40 ml-auto" />
        <div className="w-px h-16 bg-brand-green/40 ml-auto" />
      </div>
    </>
  );
}
