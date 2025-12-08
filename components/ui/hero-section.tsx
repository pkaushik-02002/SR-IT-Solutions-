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
      <div className="relative z-10 flex items-center min-h-[90vh] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/services" className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-5 py-2.5 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-primary tracking-wide">
                  Professional IT Solutions & SAS Programming
                </span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground tracking-tight max-w-5xl mx-auto">
                Transform Your Business with
                <span className="block mt-3 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                Comprehensive IT solutions including SAS programming, cloud architecture, cybersecurity, and expert support to drive your digital transformation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free IT Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-border px-8 py-6 text-base font-semibold text-foreground hover:bg-muted shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  View Our Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 w-full max-w-2xl pt-8 border-t border-border/30"
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Clients Served</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">99%</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Success Rate</div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-5xl mt-8 sm:mt-12"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center"
                  alt="IT Solutions Dashboard"
                  className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
