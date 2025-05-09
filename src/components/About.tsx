import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg shadow-lg">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6 py-12">
          <img
            src={pilot}
            alt="Company Pilot"
            className="w-[300px] object-contain rounded-lg shadow-md"
          />
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-center md:text-left">
                SoftSell is a trusted platform for reselling unused software
                licenses. We ensure a secure, fast, and seamless experience for
                both buyers and sellers. Join us today and turn your unused
                software licenses into cash!
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
