"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { H1 } from "../ui/Typhography";
const testimonials = [
  {
    id: 1,
    name: "Sarah Smith",
    role: "Marketing Lead",
    comment: "This product has transformed our workflow. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Product Manager",
    comment: "Amazing experience! Support team is very helpful.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Designer",
    comment: "Clean design and easy to use. My clients love it.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Developer",
    comment: "Great tool, boosted my productivity a lot!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Olivia Davis",
    role: "HR Manager",
    comment: "We love how easy it is to manage everything.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "David Wilson",
    role: "CEO",
    comment: "Best decision we made for our team.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  // একসাথে ৩ টা দেখাবে, কিন্তু এক একটা করে এগোবে:
  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-gray-100 pt-16 pb-18">
    <div className="w-full max-w-6xl mx-auto px-4 text-center ">
  <div className="flex justify-center pt-2 pb-14">
        <H1 className='text-center '>what our client say</H1>
</div>
      <div className="relative ">
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
        >
          <ChevronRight />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map(({ id, name, role, comment, rating, image }) => (
            <div key={id} className="bg-white shadow-md rounded-lg p-6">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />

              <div className="flex justify-center mb-2">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm italic mb-2">"{comment}"</p>

              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

