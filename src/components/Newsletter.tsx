import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter" className="relative overflow-hidden">
      <hr className="w-11/12 mx-auto mb-16" />

      <motion.div
        className="container relative z-10 py-24 sm:py-32 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-lg text-muted-foreground mt-4 mb-10 max-w-xl mx-auto">
          Get exclusive updates, license resale tips, and insider deals straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <Input
            type="email"
            placeholder="you@company.com"
            required
            className="bg-muted/60 dark:bg-muted/80 focus-visible:ring-2 focus-visible:ring-primary/60"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </motion.div>

      {/* Optional Background Glow / Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary opacity-10 blur-3xl"></div>
      </div>

      <hr className="w-11/12 mx-auto mt-16" />
    </section>
  );
};
