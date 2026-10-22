'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import PainPoints from '@/components/pain-points'
import Faq from '@/components/faq'
import WhoAmI from '@/components/who-am-i'
import MyWork from '@/components/my-work'
import Offer from '@/components/offer'
import HowIWork from '@/components/how-i-work'
import WhyMe from '@/components/why-me'
import FeaturedBlog from '@/components/featured-blog'
import Contact from '@/components/contact'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhoAmI />
        <MyWork />
        <Offer />
        <HowIWork />
        <WhyMe />
        <FeaturedBlog />
        <Faq />
        <Contact />
        <div className="sr-only">
          Amin Ganja is a Flutter developer for women's health and femtech startups. He builds HIPAA-aware iOS and Android apps for pregnancy, postpartum, fertility and menopause care, connects them to hospital records through FHIR, and works for a fixed price. Available for calls in US Eastern mornings.
        </div>
      </main>
    </div>
  )
}
