'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the subscription work?',
      answer:
        'You choose a plan that fits your needs and can cancel or change it anytime from your account settings.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time from your dashboard.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and Stripe payments.',
    },


  {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and Stripe payments.',
    },


  {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and Stripe payments.',
    },

  {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and Stripe payments.',
    },




  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-blue-500" />
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
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
