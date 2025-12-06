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
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Google Analytics", "Page views", "User behavior"],
    necessary: false,
    icon: BarChart3,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
    examples: ["Language preferences", "Form data", "User settings"],
    necessary: false,
    icon: Settings,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    examples: ["Social media", "Advertising networks", "Retargeting"],
    necessary: false,
    icon: Target,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
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
      <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left w-full">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-blue-400 border border-blue-500/20 backdrop-blur-sm font-mono">
                <Cookie className="w-4 h-4 mr-2" />
                <span>COOKIE POLICY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Cookie
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Learn how we use cookies to enhance your browsing experience and ensure our website functions properly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <Cookie className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* What are Cookies */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What are Cookies?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Data Storage</h3>
                  </div>
                  <p className="text-gray-600">
                    Cookies store information about your preferences and browsing behavior to improve your experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Security</h3>
                  </div>
                  <p className="text-gray-600">
                    Essential cookies help maintain security and prevent unauthorized access to your account.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Personalization</h3>
                  </div>
                  <p className="text-gray-600">
                    Functional cookies remember your preferences to provide a more personalized experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We use different types of cookies for various purposes. You can control which types you allow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${category.color}`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-gray-900">
                            {category.name}
                          </CardTitle>
                          {category.necessary && (
                            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                              Always Active
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Examples:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Detailed Cookie Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Below is a detailed list of cookies we use and their specific purposes.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {cookieTable.map((cookie, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{cookie.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <Badge 
                              variant="secondary" 
                              className={
                                cookie.type === "Essential" ? "bg-green-100 text-green-800" :
                                cookie.type === "Analytics" ? "bg-blue-100 text-blue-800" :
                                cookie.type === "Functional" ? "bg-purple-100 text-purple-800" :
                                "bg-orange-100 text-orange-800"
                              }
                            >
                              {cookie.type}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.provider}</td>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                You can control which cookies you allow. Essential cookies cannot be disabled as they are necessary for the website to function.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-green-600" />
                    Essential Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function and cannot be disabled.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">Always Active</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
                    Analytics Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Help us understand how visitors use our website to improve your experience.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-800">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Settings className="w-6 h-6 mr-2 text-purple-600" />
                    Functional Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Remember your preferences and provide enhanced functionality.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-purple-800">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-orange-600" />
                    Marketing Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Used to deliver relevant advertisements and track marketing campaigns.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-orange-800">Currently Active</span>
                    <Button size="sm" variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Legal Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our cookie policy complies with UK GDPR and PECR regulations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">GDPR Compliance</h3>
                  </div>
                  <p className="text-gray-600">
                    We comply with the UK General Data Protection Regulation (GDPR) and ensure your data is processed lawfully.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Transparency</h3>
                  </div>
                  <p className="text-gray-600">
                    We are transparent about how we use cookies and provide clear information about their purposes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">User Control</h3>
                  </div>
                  <p className="text-gray-600">
                    You have the right to control which cookies you accept and can change your preferences at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About Our Cookie Policy?
                </h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about how we use cookies or would like to exercise your data rights, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
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