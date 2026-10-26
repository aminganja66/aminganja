import Link from 'next/link'
import { BOOKING_URL } from '@/lib/site'

const isExternal = /^https?:\/\//.test(BOOKING_URL)

// The "Book a 20-min call" button. Opens the Cal.com or Calendly page in a new tab,
// or the contact page until a booking link is set.
export default function BookCallLink({ className, children }: { className?: string; children: React.ReactNode }) {
  if (isExternal) {
    return (
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={BOOKING_URL} className={className}>
      {children}
    </Link>
  )
}
