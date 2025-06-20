'use client';

import { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/ui/SectionWrapper';
import { H1, H6 } from './../components/ui/Typhography';

export default function page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });

  };

  return (
    <SectionWrapper>
    
<div className=" mt-9 mb-9 text-center max-w-3xl mx-auto">
 < H1 className='text-center'>Contact with us</H1>
 <H6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, laudantium at aspernatur quas maxime perspiciatis libero sed, explicabo dolor incidunt!</H6>

</div>






    <div className="flex items-center justify-center px-4 h-[500px">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create your account
        </h2>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100 transition">
            <FaGoogle className="mr-2 text-xl" /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100 transition">
            <FaGithub className="mr-2 text-xl" /> Continue with GitHub
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By signing up, you agree to our{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>.
        </p>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
    </SectionWrapper>
  );
}
