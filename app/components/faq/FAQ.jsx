'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { H1 } from './../ui/Typhography';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Are the followers real? ',
      answer:
        'Yes! We provide real & active followers who engage with your content.',
    },
    {
      question: 'How fast will I receive my order??',
      answer:
        'Most orders start processing within minutes and complete within 24 hours.',
    },
    {
      question: 'Is this safe for my account?',
      answer:
        'Yes, our methods are completely safe and comply with social media guidelines.',
    },


  {
      question: 'What if I don’t receive my order?',
      answer:
        'Contact our support team, and we’ll resolve it ASAP.',
    },


  {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and Stripe payments.',
    },






  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center ">
        <H1 className='text-center'>Freequently asked questions</H1>
</div>

        <div className="space-y-6 pt-4 mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-blue-500" />

                 <h3
  className={`text-lg text-gray-800 ${
    faq.question === 'Is this safe for my account?' ? 'font-bold' : 'font-medium'
  }`}
>
  {faq.question}
</h3>


                </div>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
