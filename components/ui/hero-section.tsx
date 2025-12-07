"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Main gradient background orbs - more visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large gradient orbs on the right */}
        <div className="absolute -right-40 -top-20 h-[20rem] w-[40rem] rounded-full bg-gradient-to-br from-primary/60 via-primary/40 to-transparent blur-[8rem]"></div>
        <div className="absolute -right-20 top-40 h-[25rem] w-[50rem] rounded-full bg-gradient-to-br from-secondary/50 via-accent/40 to-transparent blur-[8rem]"></div>
        <div className="absolute right-0 top-60 h-[15rem] w-[30rem] rounded-full bg-gradient-to-br from-accent/50 via-primary/30 to-transparent blur-[8rem]"></div>
        
        {/* Gradient orbs on the left */}
        <div className="absolute -left-40 top-20 h-[18rem] w-[35rem] rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent blur-[8rem]"></div>
        <div className="absolute left-0 top-60 h-[22rem] w-[45rem] rounded-full bg-gradient-to-br from-accent/40 via-primary/30 to-transparent blur-[8rem]"></div>
      </div>
      
      {/* Additional animated gradient orbs for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-40 left-1/2 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 right-1/3 w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1.5s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
      </div>
      
      {/* Grain/noise texture overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.15] dark:opacity-[0.2] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Content container */}
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm border border-primary/20">
          <span className="text-sm font-medium text-primary">
            Professional IT Solutions & SAS Programming
          </span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transform Your Business with Cutting-Edge Technology
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Comprehensive IT solutions including SAS programming, cloud architecture, cybersecurity, and expert support to drive your digital transformation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button 
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get Free IT Consultation
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border border-border px-8 text-base font-medium text-foreground hover:bg-muted"
            >
              <Link href="/services" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                View Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative mx-auto my-20 w-full max-w-6xl"
          >
            <div className="absolute inset-0 rounded-lg shadow-lg bg-primary/10 blur-[10rem] opacity-20" />

            {/* Hero Image */}
            <div className="relative w-full h-auto shadow-2xl rounded-lg overflow-hidden border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center"
                alt="IT Solutions Dashboard"
                className="relative w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
