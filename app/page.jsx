import React from 'react'
import HeroSection from './components/hero/HeroSection'



import Extra from './components/hero/Extra'
import Titlesection from './components/titlesection/Titlesection'
import Clients from './components/clients/Clients'




function page() {
  return (
    <div>
  <HeroSection></HeroSection>

  <Extra />
<Clients />
<Titlesection />



    </div>
  )
}

export default page