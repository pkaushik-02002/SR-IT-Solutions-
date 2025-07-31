import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Cloud, Database, Server, Shield, ArrowRight, Star, Users, Clock, Play, Zap, Target, TrendingUp, Globe, Smartphone, Network, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { HeroSection } from "@/components/ui/hero-section"
import { Badge } from "@/components/ui/badge"
import WhyChooseUsSection from "@/components/ui/why-choose-us"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Professional IT Services London</Badge>
            </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left text-white">
                  Leading IT Support Services London
            </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-300 text-left">
                  Expert IT support services in London. Professional website development, mobile app development, cloud solutions, and cybersecurity services. Call 02080588503 for free consultation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col hover:bg-slate-800/70 transition-all duration-300">
                <Globe className="w-8 h-8 stroke-1 text-blue-400" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-white mb-2 font-semibold">Website Development London</h3>
                  <p className="text-gray-300 max-w-xs text-base leading-relaxed">
                    Professional website development services in London. Custom React and Next.js websites with responsive design, SEO optimization, and modern UI/UX. Expert web development company.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md">React Development</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md">Next.js London</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md">Web Design</span>
                  </div>
                </div>
                  </article>
              <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl aspect-square p-6 flex justify-between flex-col hover:bg-slate-800/70 transition-all duration-300">
                <Smartphone className="w-8 h-8 stroke-1 text-green-400" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-white mb-2 font-semibold">Mobile App Development London</h3>
                  <p className="text-gray-300 max-w-xs text-base leading-relaxed">
                    Professional mobile app development in London. iOS and Android app development with React Native and Flutter. Cross-platform mobile applications for businesses.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md">React Native</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md">Flutter Apps</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md">iOS Android</span>
                  </div>
                </div>
                  </article>

              <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl aspect-square p-6 flex justify-between flex-col hover:bg-slate-800/70 transition-all duration-300">
                <Cloud className="w-8 h-8 stroke-1 text-purple-400" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-white mb-2 font-semibold">Cloud Solutions London</h3>
                  <p className="text-gray-300 max-w-xs text-base leading-relaxed">
                    Professional cloud solutions in London. AWS and Azure cloud services, Docker containerization, and Kubernetes orchestration. Cloud migration and optimization.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md">AWS Cloud London</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md">Azure Services</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md">Docker Kubernetes</span>
                  </div>
                </div>
              </article>
              <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col hover:bg-slate-800/70 transition-all duration-300">
                <Shield className="w-8 h-8 stroke-1 text-red-400" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-white mb-2 font-semibold">Cybersecurity Services London</h3>
                  <p className="text-gray-300 max-w-xs text-base leading-relaxed">
                    Professional cybersecurity services in London. Penetration testing, security audits, vulnerability assessments, and compliance services. Protect your business with expert security solutions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-md">Penetration Testing</span>
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-md">Security Audits</span>
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-md">Cyber Security</span>
                </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
            <div className="inline-flex items-center rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-blue-500 border border-white font-medium backdrop-blur">
              <span>Professional IT Support London</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl px-4 sm:px-0">
              Leading IT Support Services in London
            </h2>
            <p className="max-w-2xl text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed px-4 sm:px-0">
              Trusted by hundreds of businesses in London for professional IT support, website development, and digital transformation services. Call 02080588503 for expert IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2 sm:gap-3">
                  Get Free IT Consultation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <a href="tel:+442080588503" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call IT Support London
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-6 sm:p-8 relative z-10">
        <div className="mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 p-3 sm:p-4 w-fit group-hover:scale-110 transition-transform duration-500 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

