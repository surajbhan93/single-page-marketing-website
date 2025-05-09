"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="w-full py-24 md:py-36 lg:py-44 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
        >
          Empower Your Unused Software Licenses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        >
          SoftSell helps you resell unused software licenses and get paid instantly. It's simple, secure, and profitable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button size="lg" className="rounded-full px-8 py-5 text-lg shadow-md">
            Sell My Licenses
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
