import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Michael Smith",
    userName: "IT Manager, Acme Corp",
    comment:
      "SoftSell made license resale effortless. Fast process, great support, and instant payment!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    userName: "Procurement Head, ByteTech",
    comment:
      "We recovered significant value from unused software. Highly recommend SoftSell’s service!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "James Lee",
    userName: "Founder, CloudSync",
    comment:
      "I was surprised how easy it was. The team at SoftSell guided us step by step!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Alicia Gomez",
    userName: "CFO, NexaSoft",
    comment:
      "Excellent customer service and a very streamlined process. We sold unused licenses in days.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Ravi Patel",
    userName: "Operations Lead, ZenWorks",
    comment:
      "Honestly, I was skeptical at first — but SoftSell exceeded all expectations.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Emily Zhang",
    userName: "CTO, NovaWare",
    comment:
      "Smart solution for modern businesses. We turned shelfware into real money.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Hear From Our Happy Clients
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Discover how businesses like yours turned unused software into instant value with SoftSell.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition duration-300 h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={testimonial.name} src={testimonial.image} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.userName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 pt-2">
                “{testimonial.comment}”
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
