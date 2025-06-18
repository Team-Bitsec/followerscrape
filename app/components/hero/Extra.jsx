"use client";
import { useState } from "react";

const pricingData = {
  monthly: [
    {
      title: "Free",
      price: "$0",
      note: "$5 to spend in Apify Store or on your own Actors",
      features: [
        "$0.4 per compute unit",
        "Community support",
        "No Apify Store discount ❌",
      ],
      button: "Start for free",
    },
    {
      title: "Starter",
      price: "$39",
      note: "$39 to spend in Apify Store or on your own Actors",
      features: [
        "$0.4 per compute unit",
        "Chat support",
        "Bronze Apify Store discount 🥉",
      ],
      button: "Choose plan",
    },
    {
      title: "Scale",
      price: "$199",
      note: "$199 to spend in Apify Store or on your own Actors",
      features: [
        "$0.3 per compute unit",
        "Priority chat support",
        "Silver Apify Store discount 🥈",
      ],
      button: "Choose plan",
    },
    {
      title: "Business",
      price: "$999",
      note: "$999 to spend in Apify Store or on your own Actors",
      features: [
        "$0.25 per compute unit",
        "Account manager",
        "Gold Apify Store discount 🥇",
      ],
      button: "Choose plan",
    },
  ],
  yearly: [
    {
      title: "Free (Yearly)",
      price: "$0",
      note: "$60 value yearly plan",
      features: [
        "$0.35 per compute unit",
        "Community support",
        "No Apify Store discount ❌",
      ],
      button: "Start yearly",
    },
    {
      title: "Starter (Yearly)",
      price: "$350",
      note: "$350 yearly value",
      features: [
        "$0.35 per compute unit",
        "Chat support",
        "Bronze Apify Store discount 🥉",
      ],
      button: "Choose yearly",
    },
    {
      title: "Scale (Yearly)",
      price: "$1799",
      note: "$1799 yearly value",
      features: [
        "$0.28 per compute unit",
        "Priority chat support",
        "Silver Apify Store discount 🥈",
      ],
      button: "Choose yearly",
    },
    {
      title: "Business (Yearly)",
      price: "$8999",
      note: "$8999 yearly value",
      features: [
        "$0.20 per compute unit",
        "Dedicated manager",
        "Gold Apify Store discount 🥇",
      ],
      button: "Choose yearly",
    },
  ],
};

export default function Extra() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Flexible plan + pay as you go</h2>
        <div className="inline-flex mt-4 border rounded-full overflow-hidden">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 text-sm ${
              billing === "monthly"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Bill monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 text-sm ${
              billing === "yearly"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Bill yearly <span className="text-green-600 ml-1">-10%</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pricingData[billing].map((plan, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{plan.title}</h3>
              <p className="text-3xl font-bold mb-2">{plan.price}</p>
              <p className="text-sm text-gray-600 mb-4">{plan.note}</p>
              <ul className="mb-4 space-y-2 text-sm text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-4 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition py-2 px-4 rounded-full text-sm">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
