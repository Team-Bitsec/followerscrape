// components/Footer.tsx

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,  } from 'react-icons/fa';
import Link from 'next/link';





export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-black mb-4">
         Followerscrape helps businesses extract followers from competitors' LinkedIn pages.
It identifies warm leads to boost targeted outreach.
          </p>
          <button className="bg-black hover:bg-orange-300 text-white px-5 py-2 rounded-md hover:text-black font-bold cursor-pointer">
            Learn More
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-black">
          

<Link
  href="/privacypolicy"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-orange-300"
>
  Privacy Policy
</Link>


<Link
  href="/footerFaq"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-orange-300"
>
  Frequently Asked Questions
</Link>


<Link
  href="/terms"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-orange-300"
>
  Terms and Condition
</Link>


          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-black">Email: info@followerscrape.com</p>
      
          <p className="text-black mb-4">Address: 123 Growth Street, New York, USA</p>
          <button className="bg-black hover:text-black font-bold hover:bg-orange-300 text-white px-5 py-2 rounded-md cursor-pointer" >
            Message Us
          </button>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <p className="text-black mb-4">Stay connected through our social platforms:</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-[#1877F2]"><FaFacebookF /></a>
            
            <a href="#" className='text-[#0A66C2]'><FaLinkedinIn /> </a>
            <a href="#" className="text-[#1DA1F2]"><FaTwitter /></a>
            <a href="#" className="text-pink-500"><FaInstagram /></a>
           
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black mt-12 pt-6 text-center text-black">
        © 2025 All rights reserved by <span className='font-bold'>Followerscrape.com</span>
      </div>
    </footer>
  );
}
