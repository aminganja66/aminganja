import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import PainPoints from '@/components/pain-points'
import Services from '@/components/services'
import Faq from '@/components/faq'
import WhoAmI from '@/components/who-am-i'
import MyWork from '@/components/my-work'
import Offer from '@/components/offer'
import HowIWork from '@/components/how-i-work'
import WhyMe from '@/components/why-me'
import FeaturedBlog from '@/components/featured-blog'
import Contact from '@/components/contact'
import SiteFooter from '@/components/site-footer'
import { getAllPosts } from '@/lib/blog'

export default function Page() {
  // Picked on the server so the whole blog doesn't ship to the browser with the homepage.
  const latest = getAllPosts()[0]
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <WhoAmI />
        <MyWork />
        <Offer />
        <HowIWork />
        <WhyMe />
        {latest && <FeaturedBlog post={latest} />}
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
