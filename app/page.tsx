import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Cloud, Database, Server, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type React from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#2B3B6B] via-[#1a2544] to-[#2B3B6B]">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur">
                🚀 <span className="ml-2 text-white">Professional IT Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Transform Your Business with Expert IT Support
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-200 md:text-xl">
                Comprehensive IT solutions to help your business grow. From SAS programming to cloud solutions, we've
                got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00B4FF] hover:bg-[#0090cc] text-white shadow-lg shadow-blue-500/20"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#2B3B6B] shadow-lg shadow-white/20"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative lg:pl-8">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/20 to-[#2B3B6B]/20 rounded-2xl backdrop-blur-sm" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hand-drawn-flat-design-api-illustration_23-2149379500.jpg-2MR0J289pyqKQVcUfOD3aIkmnRfZYv.jpeg"
                  alt="IT Support Services Illustration"
                  fill
                  className="object-contain p-4 z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2B3B6B]/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <span className="text-[#2B3B6B]">Our Services</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2B3B6B]">
              Comprehensive IT Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide end-to-end IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Code className="h-12 w-12 text-[#00B4FF]" />}
              title="SAS Programming"
              description="Expert SAS programming services for data analysis and statistical computing"
            />
            <ServiceCard
              icon={<Cloud className="h-12 w-12 text-[#00B4FF]" />}
              title="Cloud Solutions"
              description="Secure and scalable cloud infrastructure setup and management"
            />
            <ServiceCard
              icon={<Database className="h-12 w-12 text-[#00B4FF]" />}
              title="Database Management"
              description="Professional database design, optimization, and maintenance"
            />
            <ServiceCard
              icon={<Server className="h-12 w-12 text-[#00B4FF]" />}
              title="IT Infrastructure"
              description="Complete IT infrastructure setup and support services"
            />
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-[#00B4FF]" />}
              title="Cybersecurity"
              description="Advanced security solutions to protect your business"
            />
            <ServiceCard
              icon={<Check className="h-12 w-12 text-[#00B4FF]" />}
              title="Technical Support"
              description="24/7 technical support and maintenance services"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-[#2B3B6B] to-[#00B4FF]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="text-white">Ready to Get Started?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Transform Your IT Infrastructure
            </h2>
            <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed">
              Get in touch with us today for a free consultation
            </p>
            <Button asChild size="lg" className="mt-4 bg-white text-[#2B3B6B] hover:bg-gray-100">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B3B6B]/5 to-[#00B4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardContent className="p-6">
        <div className="mb-4 rounded-full bg-[#2B3B6B]/5 p-2.5 w-fit group-hover:bg-[#2B3B6B]/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2B3B6B] mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}

