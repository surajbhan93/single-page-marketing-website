import { Tag } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Tag size={34} />,
    name: "Sponsor 1",
  },
  {
    icon: <Tag size={34} />,
    name: "Sponsor 2",
  },
  {
    icon: <Tag size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Tag size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Tag size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Tag size={34} />,
    name: "Sponsor 6",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container py-24 sm:py-32 px-4 md:px-12"
    >
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4 text-primary">
        Investors and Founders
      </h2>
      <p className="text-center text-lg mb-12 text-muted-foreground">
        Our valued investors and founders who believe in our mission and help make SoftSell a reality.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">
              <span>{icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-all">
          Become a Sponsor
        </button>
      </div>
    </section>
  );
};
