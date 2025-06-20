import React from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CTAButton from '../ui/CTAButton'
import Image from "next/image";
import { H1, Paragraph, H6 } from './../ui/Typhography';
import FAQSection from '../faq/FAQ';
import Rivew from '../riview/Riview'





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
          ScrapeFollowers helps you find warm leads by scraping your
          Competitors' LinkedIn Company page followers at scale
        </p>
        
      <CTAButton />

        {/* Bottom Image */}
      <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] mt-8">
  <Image
    src="/images/home/instagram-keyword.png"
    alt="Sample Table"
    fill
    className="object-contain rounded-lg"
  />
</div>

      </div>
    </section>

 </SectionWrapper>



{/*second herosection*/}



{/*how to work part-2*/}

<div className="text-center max-w-3xl mx-auto pt-18 ">
  <H1>How Followerscrape work?</H1>
 <H6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis reprehenderit eos consequuntur .</H6>
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
            <h4 className="font-bold mb-2 text-2xl">Estimate Your Rate</h4>
            <p className="text-gray-600">
              Tell us what you need to insure, how much it’s worth, and where you live and estimate your rate.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-12">
            <div className="absolute -left-1 top-0 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold mb-2 text-2xl">Apply For Coverage</h4>
            <p className="text-gray-600">
              Tell us a bit more about yourself and your jewelry. Coverage usually starts immediately.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-12">
            <div className="absolute -left-1 top-0 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="font-bold mb-2 text-2xl">Wear Your Jewelry, Worry Free</h4>
            <p className="text-gray-600">
              Your jewelry is protected. If anything happens, we’ll help you repair or replace it.
            </p>
          </div>
       </div>
       </div>
       
    </section>

</SectionWrapper>

<FAQSection></FAQSection>
<Rivew />







    </div>
  )
}

export default HeroSection