
'use client';

import { Check } from 'lucide-react';
import { H1 } from '../ui/Typhography';
import SectionWrapper from '../ui/SectionWrapper';
import { H6 } from './../ui/Typhography';



const plans = [
  {
    title: 'Starter Plan',
    price: '$30',
    button: 'Get started for starter plan',
    features: [
      '$0.035 per credit',
      '10,000 followers or 1,000 emails',
      'Pay only for valid emails',
      'Credits never expire & Access all features',


    ],
  },
  {
    title: 'Pro Plan',
    price: '$250',
    tag: 'Popular',
    button: 'Get started with Pro',
    features: [

       '$0.03 per credit',
      '100,000 followers or 10,000 emails',
      'Same as Starter Plan',
      ' Lower cost per credit',
      


     
    ],
 

    highlighted: true,



  },
  {
    title: 'Enterprise Plan',
    price: '$2,000',
    button: 'Get started with Enterprise Plan',
    features: [
      '$0.02 per credit',
      '1,000,000 followers or 100,000 emails',
      ' Ideal for large-scale operations',
      '  offering the lowest cost per credit',
    ]
  },
];

export default function Extra() {

  return (
    <>
 <SectionWrapper className='text-center'>
  <H1 className='text-center'>Choose your plan</H1>
  <H6>Find the perfect package for your growth. No hidden fees, no fake engagement – only real results!</H6>



 </SectionWrapper>
    <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
   
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`rounded-2xl border p-6 shadow-sm h-[450px] transition hover:shadow-md pt-18 ${
            plan.highlighted
              ? 'border-gray-300 bg-gray-100'
              : 'border-gray-200 bg-white'
          }`}
        >

         
         <div className='flex justify-between '>
          <h3 className="text-xl font-semibold">{plan.title}</h3> 
 




          </div>
       
          
        

        
          <div className="mt-2 text-3xl font-bold">
            {plan.price}
            {plan.price !== 'Free' && (
              <span className="text-sm font-normal text-gray-500"> </span>
            )}
          </div>

     

  



          <ul className="mt-6 space-y-2 text-sm text-gray-700 font-bold">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black font-bold" />
                {feature}
              </li>
            ))}
          </ul>






      <button
            className={`mt-12 w-full py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
              plan.highlighted
                ? 'bg-black text-white hover:bg-orange-400 cursor-pointer'
                : 'bg-black hover:bg-orange-400 text-white '
            }`}
          >
            {plan.button}
          </button>







        </div>
      ))}
    </section>
    </>

  );

}



