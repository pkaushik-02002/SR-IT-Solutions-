import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Code, Cloud, Database, Server, Shield, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "SAS Programming",
    description: "Expert SAS programming services for data analysis and statistical computing",
    features: [
      "Statistical Analysis",
      "Data Management",
      "Report Generation",
      "Process Automation",
      "Custom Solutions",
    ],
    badge: "Most Popular",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure setup and management",
    features: ["Cloud Migration", "AWS/Azure/GCP", "Cloud Security", "Performance Optimization", "24/7 Monitoring"],
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Professional database design, optimization, and maintenance",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup Solutions",
      "Security Implementation",
    ],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Complete IT infrastructure setup and support services",
    features: ["Network Setup", "Server Management", "Hardware Solutions", "IT Consulting", "Infrastructure Planning"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business",
    features: [
      "Security Audits",
      "Threat Protection",
      "Compliance Management",
      "Security Training",
      "Incident Response",
    ],
  },
  {
    icon: Zap,
    title: "Technical Support",
    description: "24/7 technical support and maintenance services",
    features: ["24/7 Help Desk", "Remote Support", "On-site Support", "System Maintenance", "User Training"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#2B3B6B] to-[#1a2544]">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white max-w-3xl">
              Comprehensive IT Solutions for Your Business
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              From SAS programming to cloud solutions, we provide end-to-end IT services to help your business thrive in
              the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#2B3B6B] to-[#00B4FF] text-white border-0">
                    {service.badge}
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-[#2B3B6B]/5 p-2.5 w-fit group-hover:bg-[#2B3B6B]/10 transition-colors">
                    <service.icon className="h-6 w-6 text-[#00B4FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2B3B6B] mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <Check className="h-4 w-4 mr-2 text-[#00B4FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* ✅ Fixed Learn More Button */}
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    className="w-full flex items-center justify-center bg-gradient-to-r from-[#2B3B6B] to-[#00B4FF] hover:opacity-90 transition-opacity"
                  >
                    <Link href="/contact">
                      <span className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
