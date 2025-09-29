import { H1 } from "../components/ui/Typhography";


export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mt-9 mb-9">
        <H1>Privacy  policy</H1>
      </div>
    

      <p className="mb-4 text-gray-700">
        Your privacy matters to us. Here’s how we protect your data:
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>We<strong> do not store your passwords.</strong></li>
        <li>We only collect information necessary to process your order.</li>
        <li><strong>Payments are handled securely</strong> via trusted third-party gateways.</li>
        <li>We <strong>never sell or share</strong> your personal data.</li>
      </ul>

      <p className="mt-6 text-gray-700">
        For more details, please read our full Privacy Policy or contact our support team if you have any questions.
      </p>
    </div>
  );
}
