'use client';
import { H1, H6 } from './../ui/Typhography';

const plans = [
  {
    name: 'Starter',
    price: '$30',
    credits: '10,000 followers or 1,000 emails',
    costPer: '$0.035 per credit',
    features: [
      'Pay only for valid emails',
      'Credits never expire',
      'Access to all key features',
    ],
    color: 'border-gray-300',
  },
  {
    name: 'Pro',
    price: '$250',
    credits: '100,000 followers or 10,000 emails',
    costPer: '$0.03 per credit',
    features: [
      'Same as Starter Plan',
      'Lower cost per credit',
    ],
    color: 'border-gray-300',
  },
  {
    name: 'Enterprise',
    price: '$2,000',
    credits: '1,000,000 followers or 100,000 emails',
    costPer: '$0.02 per credit',
    features: [
      'Ideal for large-scale operations',
      'Lowest cost per credit',
    ],
    color: 'border-gray-300',
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center pt-12 pb-12">
       

        <H1>Choose Your Plan</H1>
      
        <H6> Find the perfect package for your growth. No hidden fees, no fake engagement – only real results!</H6>
        <div className="grid gap-6 md:grid-cols-3 mt-14 ">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white pb-14 shadow-md rounded-lg p-6 border-t-4 ${plan.color} flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name} Plan</h3>
                <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-1 mb-3">{plan.credits}</p>
                <p className="text-sm font-medium text-black mb-4">{plan.costPer}</p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-orange-400 text-white py-2 px-4 rounded hover:bg-black cursor-pointer transition">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
