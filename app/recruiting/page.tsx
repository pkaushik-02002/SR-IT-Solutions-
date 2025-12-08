import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, Briefcase, Search, Target, Award, Clock, CheckCircle, ArrowRight,
  Building, Globe, Shield, Zap, TrendingUp, Star, ChevronRight, MapPin,
  DollarSign, BriefcaseIcon, Play, Eye, Heart, Share2, Filter, SortAsc,
  Calendar, Phone, Mail, MessageSquare, Video, Download, Upload, Check,
  X, Plus, Minus, ExternalLink, ArrowUpRight, Users2, Target as TargetIcon,
  BarChart3, PieChart, Activity, Zap as ZapIcon, Shield as ShieldIcon,
  ShoppingCart, Lightbulb, Car, Book, Home, Factory
} from "lucide-react"
import Link from "next/link"

export default function RecruitingPage() {
  const featuredJobs = [
    {
      title: "Senior SAS Developer",
      company: "TechCorp UK",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
      location: "London, UK",
      salary: "£65,000 - £85,000",
      type: "Full-time",
      urgent: true,
      tags: ["SAS", "Analytics", "SQL"]
    },
    {
      title: "Cloud Solutions Architect",
      company: "CloudTech Solutions",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
      location: "Manchester, UK",
      salary: "£75,000 - £95,000",
      type: "Full-time",
      urgent: false,
      tags: ["AWS", "Azure", "DevOps"]
    },
    {
      title: "Data Scientist",
      company: "DataFlow Analytics",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
      location: "Remote (UK)",
      salary: "£70,000 - £90,000",
      type: "Full-time",
      urgent: true,
      tags: ["Python", "Machine Learning", "R"]
    }
  ]

  const services = [
    {
      title: "Executive Search",
      description: "Specialized recruitment for senior IT positions and leadership roles",
      icon: <Users className="w-8 h-8 text-primary" />,
      features: ["C-Level Positions", "Board Members", "Senior Management"]
    },
    {
      title: "Contract Staffing",
      description: "Flexible contract solutions for project-based IT requirements",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      features: ["Short-term Projects", "Long-term Contracts", "Specialized Skills"]
    },
    {
      title: "Permanent Placement",
      description: "Full-time recruitment services for IT professionals",
      icon: <Target className="w-8 h-8 text-primary" />,
      features: ["Technical Roles", "Management Positions", "Specialized Skills"]
    },
    {
      title: "RPO Services",
      description: "End-to-end recruitment process outsourcing for IT departments",
      icon: <Search className="w-8 h-8 text-primary" />,
      features: ["Process Optimization", "Technology Integration", "Compliance Management"]
    }
  ]

  const industries = [
    { name: "Technology", icon: <Zap className="w-10 h-10 text-primary" /> },
    { name: "Healthcare", icon: <Shield className="w-10 h-10 text-primary" /> },
    { name: "Finance", icon: <TrendingUp className="w-10 h-10 text-primary" /> },
    { name: "Retail", icon: <ShoppingCart className="w-10 h-10 text-primary" /> },
    { name: "Education", icon: <Book className="w-10 h-10 text-primary" /> },
    { name: "Transportation", icon: <Car className="w-10 h-10 text-primary" /> },
    { name: "Energy", icon: <Lightbulb className="w-10 h-10 text-primary" /> },
    { name: "Real Estate", icon: <Home className="w-10 h-10 text-primary" /> },
    { name: "Manufacturing", icon: <Factory className="w-10 h-10 text-primary" /> }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section - Mobile First */}
      <section className="w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-primary border border-primary/20 backdrop-blur-sm font-mono">
              <span>PREMIUM IT RECRUITMENT & JOB CONSULTANCY SERVICES</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
                All your global IT recruitment needs in
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent mt-2 sm:mt-4">
                  one place
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              SR IT Support specializes in connecting exceptional IT professionals with innovative organizations worldwide. From SAS programming to cloud architecture, we deliver comprehensive recruitment solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group hover:scale-105">
                <Link href="/contact" className="flex items-center gap-3">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background text-foreground hover:bg-muted px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300 group border-2 border-border hover:scale-105">
                <Link href="/contact" className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  Find Your Next Role
                </Link>
              </Button>
            </div>

            {/* Stats or Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-16 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Companies Served</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Successful Placements</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">24/7</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 sm:mb-12">
            <div className="text-center sm:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
                Featured Opportunities
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Latest Job
                <span className="block text-primary">Openings</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Discover exciting opportunities with leading technology companies.
              </p>
            </div>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted w-full sm:w-auto">
              <Link href="/contact">View All Jobs</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Header with company logo and urgent badge */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    {job.urgent && (
                      <Badge className="bg-destructive/20 text-destructive border-destructive/30 text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>

                  {/* Job details */}
                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="w-4 h-4 text-primary" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-muted/50 text-foreground border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Apply button - positioned at bottom */}
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive
              <span className="block text-primary">Recruitment Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              From executive search to contract staffing, we provide end-to-end recruitment services tailored to your IT needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Expertise Across
              <span className="block text-primary">Multiple Sectors</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We have successfully placed IT professionals across diverse industries, understanding the unique requirements of each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We
              <span className="block text-primary">Deliver Results</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven recruitment process ensures the perfect match between candidates and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We thoroughly understand your technical requirements, company culture, and long-term goals.",
                icon: <Search className="w-8 h-8 text-primary" />
              },
              {
                step: "02",
                title: "Talent Sourcing",
                description: "Our extensive network and advanced sourcing techniques identify the best candidates.",
                icon: <Users className="w-8 h-8 text-primary" />
              },
              {
                step: "03",
                title: "Screening & Assessment",
                description: "Rigorous technical and cultural assessment ensures candidate quality and fit.",
                icon: <Target className="w-8 h-8 text-primary" />
              },
              {
                step: "04",
                title: "Placement & Support",
                description: "We facilitate smooth onboarding and provide ongoing support for successful integration.",
                icon: <CheckCircle className="w-8 h-8 text-primary" />
              }
            ].map((process, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      {process.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">{process.step}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{process.description}</p>
                  </div>
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
                Ready to Partner?
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Build Your Global
                <span className="block text-primary">IT Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Join hundreds of companies that trust SR IT Support for their IT recruitment needs. Let's build your dream team together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started Today
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
                <img 
                  src="Images/footer-CTA.png" 
                  alt="Global IT Team Building" 
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 