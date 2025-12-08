"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Cookie, Settings, Eye, Lock, AlertTriangle, 
  CheckCircle, XCircle, Info, ExternalLink, ArrowRight,
  Database, Users, BarChart3, Target, Globe, Clock
} from "lucide-react";
import Link from "next/link";

const cookieCategories = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    examples: ["Session management", "Security", "Load balancing"],
    necessary: true,
    icon: Shield,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Google Analytics", "Page views", "User behavior"],
    necessary: false,
    icon: BarChart3,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
    examples: ["Language preferences", "Form data", "User settings"],
    necessary: false,
    icon: Settings,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    examples: ["Social media", "Advertising networks", "Retargeting"],
    necessary: false,
    icon: Target,
    color: "bg-primary/10 text-primary border-primary/20"
  }
];

const cookieTable = [
  {
    name: "session_id",
    purpose: "Maintains your session across the website",
    duration: "Session",
    type: "Essential",
    provider: "SR IT Support Services"
  },
  {
    name: "_ga",
    purpose: "Used by Google Analytics to distinguish unique users",
    duration: "2 years",
    type: "Analytics",
    provider: "Google Analytics"
  },
  {
    name: "_gid",
    purpose: "Used by Google Analytics to distinguish users",
    duration: "24 hours",
    type: "Analytics",
    provider: "Google Analytics"
  },
  {
    name: "language_pref",
    purpose: "Remembers your language preference",
    duration: "1 year",
    type: "Functional",
    provider: "SR IT Support Services"
  },
  {
    name: "fbp",
    purpose: "Used by Facebook to deliver advertisements",
    duration: "3 months",
    type: "Marketing",
    provider: "Facebook"
  }
];

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-primary border border-primary/20 backdrop-blur-sm font-mono">
                <Cookie className="w-4 h-4 mr-2" />
                <span>COOKIE POLICY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Cookie
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Learn how we use cookies to enhance your browsing experience and ensure our website functions properly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="#cookie-settings" className="flex items-center gap-2">
                    Manage Cookie Settings
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Cookie className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* What are Cookies */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                What are Cookies?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Data Storage</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Cookies store information about your preferences and browsing behavior to improve your experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Essential cookies help maintain security and prevent unauthorized access to your account.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Personalization</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Functional cookies remember your preferences to provide a more personalized experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We use different types of cookies for various purposes. You can control which types you allow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <Card key={index} className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${category.color}`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {category.name}
                          </CardTitle>
                          {category.necessary && (
                            <Badge variant="secondary" className="mt-2 bg-primary/20 text-primary border-primary/30">
                              Always Active
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Examples:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cookie Table */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Detailed Cookie Information
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Below is a detailed list of cookies we use and their specific purposes.
              </p>
            </div>
            
            <Card className="border border-border bg-card/50 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Cookie Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Provider</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {cookieTable.map((cookie, index) => (
                        <tr key={index} className="hover:bg-muted/50">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{cookie.name}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <Badge 
                              variant="secondary" 
                              className="bg-primary/20 text-primary border-primary/30"
                            >
                              {cookie.type}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{cookie.provider}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cookie Settings */}
          <div id="cookie-settings" className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                You can control which cookies you allow. Essential cookies cannot be disabled as they are necessary for the website to function.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-primary" />
                    Essential Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    These cookies are necessary for the website to function and cannot be disabled.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-sm font-medium text-primary">Always Active</span>
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-primary" />
                    Analytics Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Help us understand how visitors use our website to improve your experience.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-foreground border-border hover:bg-muted">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <Settings className="w-6 h-6 mr-2 text-primary" />
                    Functional Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Remember your preferences and provide enhanced functionality.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-foreground border-border hover:bg-muted">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <Target className="w-6 h-6 mr-2 text-primary" />
                    Marketing Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Used to deliver relevant advertisements and track marketing campaigns.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-foreground border-border hover:bg-muted">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Legal Information */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Legal Information
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our cookie policy complies with UK GDPR and PECR regulations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">GDPR Compliance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We comply with the UK General Data Protection Regulation (GDPR) and ensure your data is processed lawfully.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Transparency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We are transparent about how we use cookies and provide clear information about their purposes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">User Control</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You have the right to control which cookies you accept and can change your preferences at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <Card className="border border-border bg-card/50 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Questions About Our Cookie Policy?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about how we use cookies or would like to exercise your data rights, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                    <Link href="/privacy" className="flex items-center gap-2">
                      Privacy Policy
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 