// components/Footer.tsx

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-gray-300 mb-4">
            We provide solutions for your web and mobile needs. Our mission is to deliver top-notch service with passion.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            Learn More
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-300">Email: support@example.com</p>
          <p className="text-gray-300">Phone: +880-1234-567890</p>
          <p className="text-gray-300 mb-4">Address: Dhaka, Bangladesh</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md">
            Message Us
          </button>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <p className="text-gray-300 mb-4">Stay connected through our social platforms:</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © 2025 All rights reserved by YourCompany.
      </div>
    </footer>
  );
}
