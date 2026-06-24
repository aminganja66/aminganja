'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import WhoAmI from '@/components/who-am-i'
import MyWork from '@/components/my-work'
import Offer from '@/components/offer'
import HowIWork from '@/components/how-i-work'
import WhyMe from '@/components/why-me'
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
        <Contact />
      </main>
    </div>
  )
}
