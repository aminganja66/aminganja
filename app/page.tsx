'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
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
        <WhoAmI />
        <MyWork />
        <Offer />
        <HowIWork />
        <WhyMe />
        <FeaturedBlog />
        <Contact />
        <div className="sr-only">
          Amin Ganja is a Flutter developer based in Ahmedabad, Gujarat, India. Specializing in Flutter and Supabase BaaS mobile app development for startup founders. Services include MVP development, mobile app development, SaaS platform development, admin dashboards, AI feature integration, and Supabase backend architecture. AI-Augmented development approach with 4+ years of Flutter experience. Available for remote Flutter developer positions and MVP projects.
        </div>
      </main>
    </div>
  )
}
