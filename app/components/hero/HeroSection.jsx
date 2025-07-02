import React from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CTAButton from '../ui/CTAButton'
import Image from "next/image";
import { H1, Paragraph, H6 } from './../ui/Typhography';
import FAQSection from '../faq/FAQ';
import Rivew from '../riview/Riview'
import Extra from './Extra'
import Client from '../clients/Clients'
import Features from '../features/Features';



function HeroSection() {
  return (
    <div>

{/*one demo heroSection*/}
 <SectionWrapper className='mt-0 bg-gray-100'>
 
  <section className=" text-center bg-gray-100  px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Get Intent data by{" "}
          <span className="text-orange-500">scraping your Competitors'</span>{" "}
          LinkedIn page <span className="text-orange-500">followers</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
      Followerscrape helps you find warm leads by scraping your
          Competitors' LinkedIn Company page followers at scale
        </p>
        
      <CTAButton />

        {/* Bottom Image */}
      <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] mt-8 ">


   <video
          controls
          className="w-full h-full rounded-lg shadow-lg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>






</div>

      </div>
    </section>

 </SectionWrapper>



{/*second herosection*/}



{/*how to work part-2*/}

<div className="text-center max-w-3xl mx-auto pt-18 ">
  <H1>How Followerscrape work?</H1>
 <H6>Start growing your social presence in just three easy steps.
Identify your audience, extract valuable leads, and connect with people who truly matter.
No guesswork, no cold outreach — just smarter, faster growth.</H6>
</div>



<SectionWrapper>

 <section className="bg-white  px-6">
      <div className="max-w-6xl mx-auto grid  gap-12 items-center justify-center">
        {/* Left Side: Timeline Numbers & Icons */}
        <div className="flex flex-col gap-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-orange-100"></div>
          {/* Step 1 */}
          <div className="relative pl-12">
            <div className="absolute -left-1 top-0 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold mb-2 text-2xl">Choose a package that fits your goals.</h4>
            <p className="text-gray-600">
          Pick from flexible plans tailored to match your audience growth needs.
</p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-12">
            <div className="absolute -left-1 top-0 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold mb-2 text-2xl"> 
Complete the payment

            </h4>
            <p className="text-gray-600">
                    Proceed through our secure and hassle-free checkout to confirm your order
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-12">
            <div className="absolute -left-1 top-0 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="font-bold mb-2 text-2xl">Provide your LinkedIn details</h4>
            <p className="text-gray-600">
            Provide your profile name, company page URL, and your target follower count.
            </p>
          </div>
       </div>
       </div>
       
    </section>

</SectionWrapper>


<Features />

<Client ></Client>
<Extra ></Extra>


<Rivew />



<FAQSection></FAQSection>






    </div>
  )
}

export default HeroSection