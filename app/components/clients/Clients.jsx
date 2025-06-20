"use client";
import SectionWrapper from '../ui/SectionWrapper';
import { H1, Paragraph, H6 } from './../ui/Typhography';

export default function OurClients() {
  return (
    <SectionWrapper>
          <div className="max-w-3xl mx-auto px-4 text-center">
             <H1 className="text-center">Our trasted clients</H1>
             <H6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores qui doloremque quos similique perspiciatis, numquam, quaerat sed voluptate, praesentium reprehenderit possimus?</H6>
             </div>
    <section className="py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 text-center">
 
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* প্রতিটা SVG Image এখানে */}
          <img 
            src="/images/logo/clay.svg"
            alt="Clay Logo"
            className="h-10 w-auto cursor-pointer"
            loading="lazy"
            role="img"
          />
          <img
            src="/images/logo/appolo.svg"
            alt="Apollo Logo"
            className="h-16 w-auto cursor-pointer"
            loading="lazy"
            role="img"
          />
          <img
            src="/images/logo/zoominfo.svg"
            alt="ZoomInfo Logo"
            className="h-16 w-auto cursor-pointer"
            loading="lazy"
            role="img"
          />
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
}
