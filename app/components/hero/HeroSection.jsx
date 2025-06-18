import React from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CTAButton from '../ui/CTAButton'
import Image from "next/image";
import { H1, Paragraph } from './../ui/Typhography';
import FAQSection from '../faq/FAQ';


function HeroSection() {
  return (
    <div>

{/*one demo heroSection*/}
 <SectionWrapper>
 
  <section className="bg-white py-16 text-center px-4">
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
<SectionWrapper>

 <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
             <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Get Intent data by{" "}
          <span className="text-orange-500">scraping your Competitors'</span>{" "}
          LinkedIn page <span className="text-orange-500">followers</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          ScrapeFollowers helps you find warm leads by scraping your
          Competitors' LinkedIn Company page followers at scale
        </p>
        
      <CTAButton />
          
     </div>

        {/* Right Side - Image */}
    <div className="relative w-full max-w-xl mx-auto aspect-[16/9] mt-8">
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

















<SectionWrapper>


   <section className="bg-gray-100 py-20 ">
      <div className="container mx-auto px-4 text-center">
        {/* Small Title */}
        <p className="text-sm uppercase text-black mb-2">
          How Spendesk works
        </p>
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-16">
    How to work?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs">
            {/* 3D Number */}
            <div className="relative w-16 h-20 mb-4">
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-black transform translate-x-1 translate-y-1">
                1
              </span>
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-white">
                1
              </span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Sign up & load funds
            </h3>
            <p className="text-black">
              Verify your company and load funds to your Spendesk wallet from your existing bank account.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="relative w-16 h-20 mb-4">
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-black transform translate-x-1 translate-y-1">
                2
              </span>
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-white">
                2
              </span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Set your spending rules
            </h3>
            <p className="text-black">
              Define teams, approval workflows, spending policies, and card limits that work for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="relative w-16 h-20 mb-4">
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-black transform translate-x-1 translate-y-1">
                3
              </span>
              <span className="absolute top-0 left-0 text-6xl font-extrabold text-white">
                3
              </span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Invite your team
            </h3>
            <p className="text-black">
              Employees can request funds, pay securely, and submit receipts in a snap with the Spendesk app.
            </p>
          </div>
        </div>
      </div>
    </section>



 </SectionWrapper>







{/*how to work part-2*/}
<div className="text-center max-w-2xl mx-auto">
  <H1>HOW TO WORK</H1>
  <Paragraph className="max-w-2xl">Lorem, ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, corporis odio voluptate maxime alias mollitia ipsum optio, cumque totam labore ab?</Paragraph>
</div>
<SectionWrapper>

 <section className="bg-white py-10 px-6">

    
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










    </div>
  )
}

export default HeroSection