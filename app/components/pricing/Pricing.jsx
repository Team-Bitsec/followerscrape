'use client';

const plans = [
  {
    name: 'Starter',
    price: '$39',
    compute: '$0.4 per compute unit',
    support: 'Chat support',
    discount: 'Bronze Apify Store discount 🟤',
    color: 'border-gray-300',
  },
  {
    name: 'Scale',
    price: '$199',
    compute: '$0.3 per compute unit',
    support: 'Priority chat support',
    discount: 'Silver Apify Store discount 🧊',
    color: 'border-blue-400',
  },
  {
    name: 'Business',
    price: '$999',
    compute: '$0.25 per compute unit',
    support: 'Account manager',
    discount: 'Gold Apify Store discount 🟡',
    color: 'border-yellow-400',
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Choose Your Plan</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white shadow-md rounded-lg p-6 border-t-4 ${plan.color} flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500 mb-4">/ monthly & pay as you go</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6 text-left">
                  <li>✔ {plan.compute}</li>
                  <li>✔ {plan.support}</li>
                  <li>✔ {plan.discount}</li>
                </ul>
              </div>
              <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
