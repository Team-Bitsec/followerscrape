"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";

const plans = [
  {
    name: "Axiom Starter",
    price: "$15/month",
    time: "5 hrs of monthly runtime",
    features: [
      "Cloud single-run limit: 1 hour",
      "Email and community support",
    ],
    color: "orange",
  },
  {
    name: "Axiom Pro",
    price: "$50/month",
    time: "30 hrs monthly runtime",
    features: [
      "Schedule bots: daily (cloud), every minute (desktop)",
      "Zapier + Make integration",
      "Webhooks & API",
      "Cloud single-run limit: 2 hours",
      "Email support",
    ],
    color: "orange",
  },
  {
    name: "Axiom Pro Max",
    price: "$150/month",
    time: "100 hrs monthly runtime",
    features: [
      "Schedule bots: hourly (cloud), every minute (desktop)",
      "Run 2 bots simultaneously",
      "Zapier + Make integration",
      "Webhooks & API",
      "Cloud single-run limit: 3 hours",
      "Slack and email support",
    ],
    color: "orange",
  },
  {
    name: "Axiom Ultimate",
    price: "$250/month",
    time: "250 hrs monthly Runtime",
    features: [
      "Schedule bots: 15 minutes (cloud), every minute (desktop)",
      "Run 3 bots simultaneously",
      "Zapier + Make integration",
      "Webhooks & API",
      "Cloud single-run limit: 12 hours",
      "Priority Slack and email support",
    ],
    color: "purple",
  },
];

export default function Pricing() {
  return (
    <>
        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition"
            >
              <h3
                className={`text-lg font-semibold mb-2 text-${plan.color}-600`}
              >
                {plan.name}
              </h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className="flex items-center mb-4">
                <span className="mr-2">⏳</span>
                {plan.time}
              </p>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full bg-${plan.color}-500 hover:bg-${plan.color}-600 text-white py-2 px-4 rounded transition`}
              >
                Get the extension
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>




{/*------try another or yearly pricing tagsection*/}




</>
  );
}
