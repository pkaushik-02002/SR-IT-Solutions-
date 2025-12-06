"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, Shield, AlertTriangle, CheckCircle, XCircle, Info, 
  ExternalLink, ArrowRight, Scale, Clock, Users, Lock, 
  Building, Phone, Mail, MapPin, Calendar
} from "lucide-react";
import Link from "next/link";

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    icon: CheckCircle,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Service Description",
    content: "SR IT Support Services provides IT consulting, website development, mobile app development, cloud solutions, cybersecurity services, and technical support to businesses and individuals.",
    icon: Building,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Intellectual Property Rights",
    content: "All content on this website, including text, graphics, logos, and software, is the property of SR IT Support Services and is protected by UK copyright laws.",
    icon: Shield,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Limitation of Liability",
    content: "SR IT Support Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
    icon: AlertTriangle,
    color: "bg-orange-500/10 text-orange-600"
  }
];

const legalClauses = [
  {
    title: "Data Protection",
    description: "We comply with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.",
    details: [
      "Personal data is processed lawfully, fairly, and transparently",
      "Data is collected for specified, explicit, and legitimate purposes",
      "Data is kept accurate and up-to-date",
      "Data is stored securely and protected against unauthorized access"
    ]
  },
  {
    title: "Service Level Agreements",
    description: "Our services are provided according to agreed service levels and response times.",
    details: [
      "Standard support: Business hours availability",
      "Emergency support: 2-hour response time",
      "Regular maintenance: Scheduled during off-peak hours",
      "Uptime guarantee: 99.9% for hosted services"
    ]
  },
  {
    title: "Payment Terms",
    description: "Payment terms and conditions for our services.",
    details: [
      "Invoices are due within 30 days of issue",
      "Late payments may incur additional charges",
      "All prices are quoted in British Pounds (GBP)",
      "VAT is applicable where required by law"
    ]
  },
  {
    title: "Termination",
    description: "Terms for terminating our services and agreements.",
    details: [
      "Either party may terminate with 30 days written notice",
      "Immediate termination for breach of terms",
      "Data return and deletion upon termination",
      "Outstanding payments remain due upon termination"
    ]
  }
];

export default function TermsPage() {
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
                <FileText className="w-4 h-4 mr-2" />
                <span>TERMS OF SERVICE</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Terms of
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Please read these terms carefully before using our services. These terms govern your use of our website and services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="#legal-terms" className="flex items-center gap-2">
                    Read Full Terms
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
                  <Scale className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Last Updated */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Last Updated: January 1, 2024
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Important Information
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These terms and conditions govern your use of our website and services. 
              By using our services, you agree to these terms in full.
            </p>
          </div>

          {/* Key Terms Overview */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Key Terms
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Essential information about our services and your rights and obligations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {termsSections.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${section.color}`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Legal Terms */}
          <div id="legal-terms" className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Detailed Terms & Conditions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive legal terms that govern our relationship with clients and users.
              </p>
            </div>
            
            <div className="space-y-8">
              {legalClauses.map((clause, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                      <Lock className="w-6 h-6 mr-3 text-blue-600" />
                      {clause.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-lg">{clause.description}</p>
                    <div className="space-y-3">
                      {clause.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Information */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Company Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Legal details about SR IT Support Services Private LTD.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Company Details</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Name:</strong> SR IT Support Services Private LTD</p>
                    <p><strong>Registration:</strong> England and Wales</p>
                    <p><strong>VAT Number:</strong> [Your VAT Number]</p>
                    <p><strong>Company Number:</strong> [Your Company Number]</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Registered Address</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>123 Business Street</p>
                    <p>London, SW1A 1AA</p>
                    <p>United Kingdom</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Phone:</strong> 020 8058 8503</p>
                    <p><strong>Email:</strong> info@sritsupportservices.co.uk</p>
                    <p><strong>Website:</strong> www.sritsupportservices.co.uk</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16 sm:mb-20">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Governing Law
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    These terms and conditions are governed by and construed in accordance with the laws of England and Wales. 
                    Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">Applicable Law</h4>
                      <p className="text-gray-600">English Law</p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">Jurisdiction</h4>
                      <p className="text-gray-600">Courts of England and Wales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these terms and conditions, please contact us. 
                  We're here to help clarify any concerns you may have.
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