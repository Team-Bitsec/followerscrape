/*export default function TermsPage() {
import { H1 } from './../components/ui/Typhography';
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>

      <p className="mb-4 text-gray-700">
        Welcome to <strong>ScrapeFollowers</strong>! By using our services, you agree to the following terms and conditions:
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>We provide digital services to increase social media engagement.</li>
        <li>No refunds are issued once the order is processed.</li>
        <li>We do not guarantee specific engagement or activity beyond delivery.</li>
        <li>Users must comply with social media platform policies.</li>
        <li>We are not responsible for any account bans or restrictions.</li>
      </ul>

      <p className="mt-6 text-gray-700">
        For full details, please read our complete Terms & Conditions. If you have any questions, feel free to contact our support team.
      </p>
    </div>
  );
}

*/

'use client';
import { H1 } from "../components/ui/Typhography";

export default function Termspage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
           <H1 className='text-center'>Terms and condition</H1>

      <p className="mb-6">
        Welcome to <strong>followerscrape.com</strong> ("we," "our," "us"). These Terms and Conditions govern your use of our website (the "Website"). By accessing or using our Website, you agree to be bound by these terms. If you do not agree with any part of these Terms and Conditions, please do not use our Website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You must be at least 18 years old or have parental/guardian consent to use our services.</li>
        <li>You agree to use the Website only for lawful purposes and in compliance with all applicable laws and regulations.</li>
        <li>You must not engage in any activity that could harm, disrupt, or impair the Website’s functionality.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Registration</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Some features of the Website may require you to create an account.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
        <li>We reserve the right to suspend or terminate accounts that violate these Terms and Conditions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Services and Payments</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Our services are provided on an "as-is" basis, and we do not guarantee specific results.</li>
        <li>Payments for premium services, if applicable, must be completed before access is granted.</li>
        <li>We reserve the right to modify or discontinue any service without prior notice.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund and Cancellation Policy</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Any payments made for services are fully refundable.</li>
        <li>If you experience issues with a service, please contact us for resolution before requesting a refund.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>All content, trademarks, and intellectual property on the Website belong to ScrapeFollowers.com unless otherwise stated.</li>
        <li>You may not copy, distribute, or reproduce our content without prior written permission.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website.</li>
        <li>We do not guarantee uninterrupted or error-free operation of the Website.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to the Website at any time, without notice, if you violate these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the Website after changes means you accept the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding these Terms and Conditions, please contact us at:
      </p>
      <p>Email: <span className="text-blue-600 underline">[your@email.com]</span></p>
      <p>Website: <span className="text-blue-600 underline">https://followerscrape.com</span></p>

      <p className="mt-6 text-sm text-gray-500">
        By using our Website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
      </p>
    </div>
  );
}
