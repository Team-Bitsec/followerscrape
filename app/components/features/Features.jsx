

import { BarChart2, Database, UserPlus, ShieldCheck, Calendar, FileText, DollarSign, Lock } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="w-6 h-6 text-white" />,
    title: "Real-Time Analytics & Reporting",
    description: "Gain actionable insights from health data to improve decision-making.",
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Centralized Patient Data Management",
    description: "Seamlessly manage patient records in one secure location.",
  },
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: "AI Tools for Workflow Automation",
    description: "Empower patients with secure access to their health records.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Advanced Data Security & Compliance",
    description: "Stay compliant with regulations and protect sensitive patient information.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "Intuitive Appointment Scheduling",
    description: "Simplify patient scheduling with an easy-to-use, automated system.",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Customizable Reporting Tools",
    description: "Create detailed, custom reports tailored to your organization’s needs.",
  },

];

export default function Features() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-sm text-orange-500 font-semibold uppercase">Our Best Feature</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Features to Elevate Your Operations</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Designed with the tools and technology your healthcare organization needs to enhance efficiency, improve patient outcomes, and ensure data security.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
