export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        Your privacy matters to us. Here’s how we protect your data:
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>We do <strong>NOT</strong> store your passwords.</li>
        <li>We collect only the necessary information for processing orders.</li>
        <li>Payment details are securely processed via third-party payment gateways.</li>
        <li>We do not sell or share your data with third parties.</li>
      </ul>

      <p className="mt-6 text-gray-700">
        For more details, please read our full Privacy Policy or contact our support team if you have any questions.
      </p>
    </div>
  );
}
