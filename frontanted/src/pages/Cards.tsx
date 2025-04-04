import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/layouts/Navbar";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => {
  return (
    <Card className="bg-gray-800 h-60 w-full sm:w-80 md:w-85 rounded-xl shadow-lg border border-transparent hover:border-blue-500 hover:scale-105 transition-all" style={{marginTop: "3rem"}}>
      <CardContent className="flex flex-col items-center text-center space-y-4">
        {/* Icon with Blue Background & Margin-Top */}
        <div className="bg-blue-500 p-2 rounded-lg" style={{ marginTop: "2rem" }}>
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white" style={{ marginTop: "1rem" }}>
          {title}
        </h2>

        {/* Description */}
        <div className="text-gray-400">
          <p style={{ marginTop: "1rem" }}>{description}</p>
          <p>Designed for Users to Help, His Work.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function FeatureCards() {
  const features = [
    {
      title: "Fast & Reliable",
      description: "No hidden limits. Use the  Tools rate limit.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Secure & Private",
      description: "We ensure your data stays protected.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
    },
    {
      title: "Scalable & Faster",
      description: "Easily scale up your Work with our services.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <path d="M15 2v2"></path>
          <path d="M15 20v2"></path>
          <path d="M2 15h2"></path>
          <path d="M2 9h2"></path>
          <path d="M20 15h2"></path>
          <path d="M20 9h2"></path>
          <path d="M9 2v2"></path>
          <path d="M9 20v2"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 justify-center" style={{marginLeft: "2rem"}}>
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </div>
      <Navbar />
    </>
  );
}
