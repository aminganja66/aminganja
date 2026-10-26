// Name lockup from the A1 "Didone" Figma concept: serif name with the tagline underneath.
// The A mark itself is only used for the favicon, app icon and share image.

export default function Logo({ showTagline = true }: { showTagline?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-lg md:text-xl">Amin Ganja</span>
      {showTagline && (
        <span className="hidden sm:block mt-1 text-[11px] font-sans font-normal text-gray-400">
          Women&apos;s health app developer
        </span>
      )}
    </span>
  )
}
