"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Users, Target, Award, Clock, Star, TrendingUp, Globe, 
  Lightbulb, CheckCircle, ShieldCheck, HeartHandshake, Building, 
  Cpu, Network, HardDrive, Smartphone, Monitor, ChevronRight,
  Play, Eye, Heart, Share2, Filter, SortAsc, Calendar, Phone, Mail, 
  MessageSquare, Video, Download, Upload, ExternalLink, ArrowUpRight,
  Zap, Shield, Code, Cloud, Database, Server
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring cutting-edge technologies to provide forward-thinking solutions that drive business transformation and competitive advantage.",
    color: "primary"
  },
  {
    icon: CheckCircle,
    title: "Excellence",
    description: "Upholding the highest standards in every project to ensure superior quality, performance, and client satisfaction.",
    color: "secondary"
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Committed to transparency, honesty, and ethical business practices in all our client relationships and solutions.",
    color: "accent"
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centricity",
    description: "Placing clients at the core of our solutions to exceed expectations and deliver measurable business value.",
    color: "primary"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: Award, color: "primary" },
  { number: "50+", label: "Happy Clients", icon: Users, color: "primary" },
  { number: "15", label: "Min Response", icon: Clock, color: "primary" },
  { number: "99%", label: "Client Satisfaction", icon: Star, color: "primary" },
];

const services = [
  { name: "SAS Programming", icon: Code },
  { name: "Cloud Solutions", icon: Cloud },
  { name: "Database Management", icon: Database },
  { name: "IT Infrastructure", icon: Server },
  { name: "Cybersecurity", icon: Shield },
  { name: "Technical Support", icon: Zap },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section - Mobile First */}
      <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-primary border border-primary/20 backdrop-blur-sm font-mono">
                <span className="text-center">ABOUT SR IT SUPPORT SERVICES</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Leading IT
                <span className="block bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                  Solutions Provider
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                SR IT Support Services is a premier technology solutions provider, helping businesses thrive in the digital era with innovative IT services and expert consulting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border bg-muted/50 backdrop-blur-sm text-foreground hover:bg-muted px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="/services" className="flex items-center gap-2">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Stats Column */}
            <div className="relative w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
                Our Story
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Building Digital
                <span className="block text-primary">Excellence</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Founded with a vision to transform businesses through innovative technology solutions, SR IT Support Services has grown from a small startup to a trusted partner for organizations across the UK and beyond.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Our journey began with a simple mission: to make enterprise-grade IT solutions accessible to businesses of all sizes. Today, we continue to push the boundaries of what's possible in technology, helping our clients achieve digital transformation and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
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
                            <div className="text-lg font-bold text-foreground">2018</div>
                            <div className="text-xs text-muted-foreground">Founded</div>
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
                            <div className="text-lg font-bold text-foreground">500+</div>
                            <div className="text-xs text-muted-foreground">Projects</div>
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
                            <div className="text-lg font-bold text-foreground">15</div>
                            <div className="text-xs text-muted-foreground">Min Response</div>
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

      {/* Our Values Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Principles
              <span className="block text-primary">That Drive Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values are the foundation of everything we do, guiding our decisions and shaping our relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-lg mx-auto mb-4">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Our Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive
              <span className="block text-primary">IT Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a full spectrum of IT services to meet all your technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">{service.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
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
                Let's Build Your
                <span className="block text-primary">Digital Future</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Ready to transform your business with cutting-edge IT solutions? Our expert team is here to help you achieve your digital transformation goals.
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
                            <div className="text-lg font-bold text-foreground">15</div>
                            <div className="text-xs text-muted-foreground">Min Response</div>
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
