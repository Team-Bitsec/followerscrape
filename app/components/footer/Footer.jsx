// components/Footer.tsx

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-black mb-4">
            We provide solutions for your web and mobile needs. Our mission is to deliver top-notch service with passion.
          </p>
          <button className="bg-black hover:bg-orange-300 text-white px-5 py-2 rounded-md hover:text-black font-bold cursor-pointer">
            Learn More
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:text-orange-300">Home</a></li>
            <li><a href="#" className="hover:text-orange-300">Services</a></li>
            <li><a href="#" className="hover:text-orange-300">Blog</a></li>
            <li><a href="#" className="hover:text-orange-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-black">Email: support@example.com</p>
          <p className="text-black">Phone: +880-1234-567890</p>
          <p className="text-black mb-4">Address: Dhaka, Bangladesh</p>
          <button className="bg-black hover:text-black font-bold hover:bg-orange-300 text-white px-5 py-2 rounded-md cursor-pointer" >
            Message Us
          </button>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <p className="text-black mb-4">Stay connected through our social platforms:</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black mt-12 pt-6 text-center text-black">
        © 2025 All rights reserved by <span className='font-bold'>Followerscrape</span>.
      </div>
    </footer>
  );
}
