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
      icon: <Users className="w-8 h-8 text-blue-400" />,
      features: ["C-Level Positions", "Board Members", "Senior Management"]
    },
    {
      title: "Contract Staffing",
      description: "Flexible contract solutions for project-based IT requirements",
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      features: ["Short-term Projects", "Long-term Contracts", "Specialized Skills"]
    },
    {
      title: "Permanent Placement",
      description: "Full-time recruitment services for IT professionals",
      icon: <Target className="w-8 h-8 text-purple-400" />,
      features: ["Technical Roles", "Management Positions", "Specialized Skills"]
    },
    {
      title: "RPO Services",
      description: "End-to-end recruitment process outsourcing for IT departments",
      icon: <Search className="w-8 h-8 text-orange-400" />,
      features: ["Process Optimization", "Technology Integration", "Compliance Management"]
    }
  ]

  const industries = [
    { name: "Technology", icon: <Zap className="w-10 h-10 text-blue-400" /> },
    { name: "Healthcare", icon: <Shield className="w-10 h-10 text-green-400" /> },
    { name: "Finance", icon: <TrendingUp className="w-10 h-10 text-purple-400" /> },
    { name: "Retail", icon: <ShoppingCart className="w-10 h-10 text-orange-400" /> },
    { name: "Education", icon: <Book className="w-10 h-10 text-teal-400" /> },
    { name: "Transportation", icon: <Car className="w-10 h-10 text-gray-400" /> },
    { name: "Energy", icon: <Lightbulb className="w-10 h-10 text-yellow-400" /> },
    { name: "Real Estate", icon: <Home className="w-10 h-10 text-teal-400" /> },
    { name: "Manufacturing", icon: <Factory className="w-10 h-10 text-gray-400" /> }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section - Mobile First */}
      <section className="w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column - Always First on Mobile */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-blue-400 border border-blue-500/20 backdrop-blur-sm font-mono">
                <span className="text-center">PREMIUM IT RECRUITMENT & JOB CONSULTANCY SERVICES</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                All your global IT recruitment needs in
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  one place
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                SR IT Support specializes in connecting exceptional IT professionals with innovative organizations worldwide. From SAS programming to cloud architecture, we deliver comprehensive recruitment solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group border border-slate-200">
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    Find Your Next Role
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image Column - Second on Mobile, Right on Desktop */}
            <div className="relative w-full">
              <div className="relative w-full h-full">
                <img 
                  src="/Images/ukrecruting.png" 
                  alt="UK Recruiting Services" 
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl transition-transform duration-500"
                  loading="lazy"
                />
                {/* Optional overlay for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 sm:mb-12">
            <div className="text-center sm:text-left">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
                Featured Opportunities
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Latest Job
                <span className="block text-blue-400">Openings</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                Discover exciting opportunities with leading technology companies.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-slate-800 w-full sm:w-auto">
              <Link href="/contact">View All Jobs</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Header with company logo and urgent badge */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-slate-700/50 flex items-center justify-center">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-400">{job.company}</p>
                      </div>
                    </div>
                    {job.urgent && (
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>

                  {/* Job details */}
                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold text-green-400">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-700/50 text-gray-300 border-slate-600/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Apply button - positioned at bottom */}
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive
              <span className="block text-blue-400">Recruitment Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From executive search to contract staffing, we provide end-to-end recruitment services tailored to your IT needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-4 text-xs sm:text-sm">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Expertise Across
              <span className="block text-green-400">Multiple Sectors</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We have successfully placed IT professionals across diverse industries, understanding the unique requirements of each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 mb-4 text-xs sm:text-sm">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How We
              <span className="block text-purple-400">Deliver Results</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven recruitment process ensures the perfect match between candidates and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We thoroughly understand your technical requirements, company culture, and long-term goals.",
                icon: <Search className="w-8 h-8 text-blue-400" />
              },
              {
                step: "02",
                title: "Talent Sourcing",
                description: "Our extensive network and advanced sourcing techniques identify the best candidates.",
                icon: <Users className="w-8 h-8 text-green-400" />
              },
              {
                step: "03",
                title: "Screening & Assessment",
                description: "Rigorous technical and cultural assessment ensures candidate quality and fit.",
                icon: <Target className="w-8 h-8 text-purple-400" />
              },
              {
                step: "04",
                title: "Placement & Support",
                description: "We facilitate smooth onboarding and provide ongoing support for successful integration.",
                icon: <CheckCircle className="w-8 h-8 text-orange-400" />
              }
            ].map((process, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4 mx-auto">
                      {process.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3">{process.step}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{process.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{process.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
                Ready to Partner?
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Build Your Global
                <span className="block text-blue-400">IT Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Join hundreds of companies that trust SR IT Support for their IT recruitment needs. Let's build your dream team together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Speak to Expert
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-full">
                <img 
                  src="/footer-CTA.png" 
                  alt="Global IT Team Building" 
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 