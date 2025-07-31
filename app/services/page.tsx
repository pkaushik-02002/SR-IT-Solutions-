import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Check, Code, Cloud, Database, Server, Shield, Zap, 
  Users, Target, Award, Clock, Star, TrendingUp, Globe, Lock,
  BarChart3, PieChart, Activity, Zap as ZapIcon, Shield as ShieldIcon,
  Building, Cpu, Network, HardDrive, Smartphone, Monitor, ChevronRight,
  Play, Eye, Heart, Share2, Filter, SortAsc, Calendar, Phone, Mail, 
  MessageSquare, Video, Download, Upload, ExternalLink, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "SAS Programming",
    description: "Expert SAS programming services for advanced data analysis and statistical computing with enterprise-grade solutions",
    features: [
      "Statistical Analysis & Modeling",
      "Data Management & Processing",
      "Automated Report Generation",
      "Custom SAS Solutions",
      "Performance Optimization",
      "Data Visualization"
    ],
    badge: "Most Popular",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    stats: "500+ Projects"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure setup and management for modern businesses with 99.9% uptime guarantee",
    features: [
      "Cloud Migration Strategy",
      "AWS/Azure/GCP Expertise",
      "Cloud Security Implementation",
      "Performance Optimization",
      "24/7 Cloud Monitoring",
      "Cost Optimization"
    ],
    badge: "Trending",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    stats: "200+ Deployments"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Professional database design, optimization, and maintenance for optimal performance and data integrity",
    features: [
      "Database Architecture Design",
      "Performance Tuning & Optimization",
      "Data Migration & Integration",
      "Backup & Recovery Solutions",
      "Security Implementation",
      "Database Administration"
    ],
    color: "green",
    gradient: "from-green-500 to-green-600",
    stats: "300+ Databases"
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Complete IT infrastructure setup and support services for enterprise solutions with comprehensive planning",
    features: [
      "Network Design & Setup",
      "Server Management & Maintenance",
      "Hardware Solutions",
      "IT Consulting & Strategy",
      "Infrastructure Planning",
      "Disaster Recovery"
    ],
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    stats: "150+ Infrastructures"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from evolving threats with comprehensive protection",
    features: [
      "Security Audits & Assessments",
      "Threat Detection & Protection",
      "Compliance Management",
      "Security Training & Awareness",
      "Incident Response",
      "Penetration Testing"
    ],
    badge: "Critical",
    color: "red",
    gradient: "from-red-500 to-red-600",
    stats: "100% Protection"
  },
  {
    icon: Zap,
    title: "Technical Support",
    description: "24/7 technical support and maintenance services for seamless operations with rapid response times",
    features: [
      "24/7 Help Desk Support",
      "Remote Technical Support",
      "On-site Support Services",
      "System Maintenance",
      "User Training & Documentation",
      "Proactive Monitoring"
    ],
    color: "yellow",
    gradient: "from-yellow-500 to-yellow-600",
    stats: "99.9% Uptime"
  },
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" />, color: "blue" },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" />, color: "green" },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" />, color: "purple" },
  { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" />, color: "orange" },
];

const technologies = [
  { name: "SAS", icon: <Code className="w-8 h-8" />, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "AWS", icon: <Cloud className="w-8 h-8" />, color: "text-orange-400", bg: "bg-orange-500/10" },
  { name: "Azure", icon: <Building className="w-8 h-8" />, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "GCP", icon: <Globe className="w-8 h-8" />, color: "text-green-400", bg: "bg-green-500/10" },
  { name: "SQL", icon: <Database className="w-8 h-8" />, color: "text-purple-400", bg: "bg-purple-500/10" },
  { name: "Security", icon: <Shield className="w-8 h-8" />, color: "text-red-400", bg: "bg-red-500/10" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section - Mobile First */}
      <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-blue-400 border border-blue-500/20 backdrop-blur-sm font-mono">
                <span className="text-center">PREMIUM IT SOLUTIONS & SERVICES</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Enterprise-Grade
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  IT Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your business with our comprehensive IT services. From SAS programming to cloud solutions, we deliver enterprise-grade results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group border border-white/20">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Stats Column */}
            <div className="relative w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <div className={`p-3 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-400`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-4 text-xs sm:text-sm">
              Technologies We Master
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge
              <span className="block text-green-400">Technologies</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-3 rounded-xl ${tech.bg} ${tech.color}`}>
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
              Our Premium Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade
              <span className="block text-blue-400">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to meet your business needs and drive digital transformation with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{service.title}</h3>
                        <div className="text-sm text-gray-400">{service.stats}</div>
                      </div>
                    </div>
                    {service.badge && (
                      <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 text-xs`}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white transition-all duration-300`}>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Started
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

      {/* CTA Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
                Ready to Transform?
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Build Your
                <span className="block text-blue-400">Digital Future</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Ready to take your business to the next level? Our expert team is here to help you achieve your digital transformation goals with proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
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
                    <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Award className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">500+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">99%</div>
                            <div className="text-xs text-gray-400">Success Rate</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">50+</div>
                            <div className="text-xs text-gray-400">Clients</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-400" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">24/7</div>
                            <div className="text-xs text-gray-400">Support</div>
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
