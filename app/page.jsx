import React from 'react'
import HeroSection from './components/hero/HeroSection'


import Pricing from './components/pricing/Pricing'
import Extra from './components/hero/Extra'


function page() {
  return (
    <div>
  <HeroSection></HeroSection>
  <Pricing />
  <Extra />
    </div>
  )
}

export default page