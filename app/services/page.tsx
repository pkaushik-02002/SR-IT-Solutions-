"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Building, Cpu, Network, HardDrive, Smartphone, Monitor, ChevronRight,
  Play, Eye, Heart, Share2, Filter, SortAsc, Calendar, Phone, Mail,
  ArrowRight, Award, Users, Clock, Globe, Shield, Database, Cloud, Code, Zap, TrendingUp
} from "lucide-react"

const services = [
  {
    title: "Website Development",
    description: "Custom website development with modern technologies including React, Next.js, and responsive design. We create professional, fast-loading websites that convert visitors into customers.",
    icon: <Globe className="w-8 h-8" />,
    color: "primary",
    gradient: "from-muted to-muted/80",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile app development for iOS and Android. We build scalable, user-friendly applications with modern frameworks and best practices.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "secondary",
    gradient: "from-primary/20 to-secondary/40",
    features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Ready"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud infrastructure setup and management. We help businesses migrate to the cloud, optimize costs, and ensure high availability and scalability.",
    icon: <Cloud className="w-8 h-8" />,
    color: "accent",
    gradient: "from-primary/20 to-accent/40",
    features: ["AWS/Azure/GCP", "Serverless", "Auto-scaling", "Cost Optimization"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
  },
  {
    title: "Database Management",
    description: "Database design, optimization, and management services. We handle everything from data modeling to performance tuning and backup strategies.",
    icon: <Database className="w-8 h-8" />,
    color: "primary",
    gradient: "from-muted to-muted/80",
    features: ["Data Modeling", "Performance Tuning", "Backup & Recovery", "Migration"],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions including penetration testing, vulnerability assessments, and security infrastructure setup to protect your business assets.",
    icon: <Shield className="w-8 h-8" />,
    color: "primary",
    gradient: "from-muted to-muted/80",
    features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Compliance"],
    technologies: ["OWASP", "NIST", "ISO 27001", "GDPR"]
  },
  {
    title: "IT Infrastructure",
    description: "Complete IT infrastructure setup and management including networking, servers, and system administration. We ensure your technology foundation is robust and scalable.",
    icon: <Network className="w-8 h-8" />,
    color: "secondary",
    gradient: "from-secondary to-secondary/80",
    features: ["Network Setup", "Server Management", "System Administration", "Monitoring"],
    technologies: ["Linux", "Windows Server", "Cisco", "VMware"]
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL API development with comprehensive documentation and testing. We build robust, scalable APIs that power modern applications.",
    icon: <Code className="w-8 h-8" />,
    color: "accent",
    gradient: "from-accent to-accent/80",
    features: ["REST APIs", "GraphQL", "API Documentation", "Testing"],
    technologies: ["Node.js", "Python", "FastAPI", "Swagger"]
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and DevOps practices to streamline your development process. We implement continuous integration and deployment for faster delivery.",
    icon: <Zap className="w-8 h-8" />,
    color: "primary",
    gradient: "from-muted to-muted/80",
    features: ["CI/CD Pipelines", "Automated Testing", "Infrastructure as Code", "Monitoring"],
    technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible"]
  }
];

const technologies = [
  { name: "React", icon: "⚛️", color: "blue" },
  { name: "Node.js", icon: "🟢", color: "green" },
  { name: "Python", icon: "🐍", color: "yellow" },
  { name: "AWS", icon: "☁️", color: "orange" },
  { name: "Docker", icon: "🐳", color: "blue" },
  { name: "PostgreSQL", icon: "🐘", color: "indigo" },
  { name: "TypeScript", icon: "📘", color: "blue" },
  { name: "Kubernetes", icon: "⚓", color: "purple" },
  { name: "MongoDB", icon: "🍃", color: "green" },
  { name: "Flutter", icon: "📱", color: "cyan" },
  { name: "Terraform", icon: "🏗️", color: "orange" },
  { name: "Redis", icon: "🔴", color: "red" }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-primary border border-primary/20 backdrop-blur-sm font-mono">
                <span className="text-center">OUR SERVICES</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Professional
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Comprehensive IT solutions tailored to your business needs. From website development to cloud infrastructure, we deliver results that drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-muted/50 backdrop-blur-sm text-foreground hover:bg-muted px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group border border-border">
                  <a href="tel:+442080588503" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">2</div>
                    <div className="text-sm text-muted-foreground">Hour Response</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive
              <span className="block text-primary">IT Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end IT services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-4`}>
                      <div className="[&>svg]:w-full [&>svg]:h-full [&>svg]:text-primary [&>svg]:stroke-2">
                      {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => {
                          let badgeClass = "px-2 py-1 text-xs rounded-md font-medium border ";
                          if (service.color === "primary") {
                            badgeClass += "bg-primary/20 text-primary border-primary/30";
                          } else if (service.color === "secondary") {
                            badgeClass += "bg-primary/20 text-primary border-primary/30";
                          } else if (service.color === "accent") {
                            badgeClass += "bg-primary/20 text-primary border-primary/30";
                          } else if (service.color === "destructive") {
                            badgeClass += "bg-destructive/20 text-destructive border-destructive/30";
                          } else {
                            badgeClass += "bg-primary/20 text-primary border-primary/30";
                          }
                          return (
                            <span key={idx} className={badgeClass}>
                            {feature}
                          </span>
                          );
                        })}
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs font-medium text-foreground/60 mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-muted/80 text-foreground/80 text-xs rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Technologies
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Modern
              <span className="block text-primary">Tech Stack</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
                Ready to Transform?
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Let's Build Your
                <span className="block text-primary">Digital Future</span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Ready to take your business to the next level? Our expert team is here to help you achieve your digital transformation goals with proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <a href="tel:+442080588503" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="bg-card/50 border-border backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Award className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-foreground">500+</div>
                            <div className="text-xs text-muted-foreground">Projects</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-border backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-foreground">99%</div>
                            <div className="text-xs text-muted-foreground">Success Rate</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-card/50 border-border backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-foreground">50+</div>
                            <div className="text-xs text-muted-foreground">Clients</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-border backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-foreground">2</div>
                            <div className="text-xs text-muted-foreground">Hour Response</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
