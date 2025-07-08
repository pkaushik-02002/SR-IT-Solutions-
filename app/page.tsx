import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Cloud, Database, Server, Shield, ArrowRight, Star, Users, Clock, Play, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { HeroSection } from "@/components/ui/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section */}
      <HeroSection
        title="Enterprise IT Solutions"
        subtitle={{
          regular: "Transform your business with ",
          gradient: "cutting-edge technology.",
        }}
        description="Comprehensive IT solutions including SAS programming, cloud architecture, cybersecurity, and 24/7 expert support to drive your digital transformation."
        ctaText="Get Started"
        ctaHref="/contact"
        bottomImage={{
          light: "/Images/technology.png",
          dark: "/Images/technology.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "hsl(var(--muted-foreground))",
          darkLineColor: "hsl(var(--muted))",
        }}
      />

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 text-sm border border-blue-500/20">
              <span className="text-slate-700 dark:text-slate-300 font-medium">Our Premium Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl">
              Enterprise-Grade Solutions
            </h2>
            <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We provide cutting-edge IT solutions tailored to your business needs with AI-powered insights and 24/7 expert support.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="AI-Powered Analytics"
              description="Advanced SAS programming with machine learning algorithms for predictive analytics and business intelligence."
            />
            <ServiceCard
              icon={<Cloud className="h-10 w-10 text-purple-500" />}
              title="Cloud Architecture"
              description="Scalable cloud infrastructure with microservices architecture and automated deployment pipelines."
            />
            <ServiceCard
              icon={<Database className="h-10 w-10 text-green-500" />}
              title="Data Engineering"
              description="Modern database design with real-time processing, data lakes, and advanced analytics capabilities."
            />
            <ServiceCard
              icon={<Server className="h-10 w-10 text-orange-500" />}
              title="DevOps Excellence"
              description="Complete CI/CD pipelines, infrastructure as code, and automated monitoring solutions."
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10 text-red-500" />}
              title="Zero-Trust Security"
              description="Advanced cybersecurity with threat detection, encryption, and compliance frameworks."
            />
            <ServiceCard
              icon={<Check className="h-10 w-10 text-indigo-500" />}
              title="Managed Services"
              description="24/7 proactive monitoring, automated maintenance, and expert technical support."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 text-sm border border-blue-500/20 w-fit">
                <span className="text-white font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Trusted by Fortune 500 Companies
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our team of certified professionals delivers enterprise-grade solutions that drive digital transformation and business innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-400">Certified professionals with 10+ years of enterprise experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-400">Round-the-clock technical support with SLA guarantees</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-400">Tailored enterprise solutions for your specific business needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-gray-300">Enterprise Clients</div>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Support Available</div>
                  </Card>
                </div>
                <div className="space-y-6 pt-12">
                  <Card className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime Guarantee</div>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm backdrop-blur border border-white/20">
              <span className="text-white font-medium">Ready to Transform?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
              Start Your Digital Transformation Journey
            </h2>
            <p className="max-w-2xl text-gray-100 text-xl leading-relaxed">
              Join hundreds of successful businesses that trust us with their digital infrastructure and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get Started Today <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/services">View Solutions</Link>
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
      <CardContent className="p-8 relative z-10">
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 p-4 w-fit group-hover:scale-110 transition-transform duration-500 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{description}</p>
      </CardContent>
    </Card>
  )
}

