import { Upload, DollarSign, CheckCircle } from "lucide-react"; // Importing icons

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Upload className="w-10 h-10 text-indigo-600" />, // Upload icon
    title: "Upload License",
    description: "Submit details of your unused software license securely.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-indigo-600" />, // Dollar icon
    title: "Get Valuation",
    description: "We analyze the license and offer you the best possible price.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-indigo-600" />, // CheckCircle icon
    title: "Get Paid",
    description: "Receive instant payment after license validation.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Follow these simple steps to resell your unused software licenses
        instantly and securely!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <div
            key={title}
            className="p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
