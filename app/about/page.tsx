"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring new technologies to provide cutting-edge solutions for our clients."
  },
  {
    icon: CheckCircle,
    title: "Excellence",
    description: "Upholding the highest standards to ensure superior quality and performance."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Committed to transparency, honesty, and ethical business practices."
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centricity",
    description: "Placing clients at the core of our solutions to exceed expectations."
  }
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#2B3B6B] to-[#1a2544]">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container relative px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white max-w-3xl mx-auto">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">
            SR IT Support Services is a leader in innovative technology solutions, helping businesses thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-20 md:py-32 bg-[#0A0F2E] text-white text-center">
        <h2 className="text-4xl font-bold mb-12 drop-shadow-lg text-[#00B4FF]">Our Values</h2>
        <div className="container px-6 md:px-12 flex flex-wrap justify-center gap-12">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center max-w-xs text-center"
            >
              <value.icon className="h-16 w-16 text-[#00B4FF] mb-4 drop-shadow-md" />
              <h3 className="text-2xl font-bold text-white drop-shadow-md">{value.title}</h3>
              <p className="text-gray-300 mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-[#2B3B6B] to-[#00B4FF] text-center">
        <div className="container px-6 md:px-12">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">Partner with Us Today</h2>
          <p className="max-w-xl mx-auto text-gray-100 md:text-xl mt-4 opacity-80">
            Let’s build the future together. Reach out to explore how we can help your business achieve success.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-white text-[#2B3B6B] shadow-lg hover:shadow-xl transition rounded-xl"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}