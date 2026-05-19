/**
 * Sticky background image for the mobile "By the Numbers" section.
 * Rendered as a child of #results so its visibility is bounded by the section —
 * it pins at top:80 while the section is on screen and releases naturally when
 * the section scrolls past, with no JS and no frame gap.
 *
 * Heights use svh (not dvh) so they stay locked across iOS Safari's URL bar
 * animation — using dvh causes the image to re-fit (apparent zoom) every time
 * Safari's chrome collapses/expands during scroll.
 */
export default function MobileFixedBgImage() {
  return (
    <div className="md:hidden sticky top-20 left-0 w-full h-[calc(100svh-5rem)] overflow-hidden z-0 pointer-events-none -mb-[calc(100svh-5rem)]">
      <img
        src="/final_growthchart.jpg"
        alt="Upward growth chart representing measurable fundraising results"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center bottom' }}
      />
      <div className="absolute inset-0 bg-brand-navy/40" aria-hidden="true" />
    </div>
  );
}
