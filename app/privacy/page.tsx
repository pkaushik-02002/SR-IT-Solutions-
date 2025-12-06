"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Eye, Lock, AlertTriangle, CheckCircle, XCircle, Info, 
  ExternalLink, ArrowRight, Database, Users, BarChart3, Target, 
  Globe, Clock, FileText, Phone, Mail, MapPin, Calendar, Key, Building
} from "lucide-react";
import Link from "next/link";

const dataCategories = [
  {
    name: "Personal Information",
    description: "Information that identifies you personally",
    examples: ["Name", "Email address", "Phone number", "Company details"],
    icon: Users,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    name: "Technical Data",
    description: "Information about your device and browsing",
    examples: ["IP address", "Browser type", "Device information", "Cookies"],
    icon: Database,
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  {
    name: "Usage Data",
    description: "Information about how you use our services",
    examples: ["Pages visited", "Time spent", "Features used", "Error logs"],
    icon: BarChart3,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    name: "Communication Data",
    description: "Information from your communications with us",
    examples: ["Contact forms", "Support requests", "Email correspondence", "Feedback"],
    icon: Mail,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  }
];

const dataRights = [
  {
    title: "Right to Access",
    description: "You have the right to request a copy of your personal data",
    icon: Eye,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Right to Rectification",
    description: "You can request correction of inaccurate personal data",
    icon: CheckCircle,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Right to Erasure",
    description: "You can request deletion of your personal data",
    icon: XCircle,
    color: "bg-red-500/10 text-red-600"
  },
  {
    title: "Right to Portability",
    description: "You can request your data in a structured format",
    icon: Database,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Right to Object",
    description: "You can object to processing of your personal data",
    icon: AlertTriangle,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Right to Restrict",
    description: "You can request restriction of data processing",
    icon: Lock,
    color: "bg-indigo-500/10 text-indigo-600"
  }
];

const dataPurposes = [
  {
    purpose: "Service Provision",
    description: "To provide and maintain our IT services",
    legalBasis: "Contract performance",
    retention: "Duration of service + 7 years"
  },
  {
    purpose: "Communication",
    description: "To respond to your inquiries and provide support",
    legalBasis: "Legitimate interest",
    retention: "3 years after last contact"
  },
  {
    purpose: "Website Improvement",
    description: "To analyze usage and improve our website",
    legalBasis: "Legitimate interest",
    retention: "2 years"
  },
  {
    purpose: "Legal Compliance",
    description: "To comply with legal and regulatory obligations",
    legalBasis: "Legal obligation",
    retention: "As required by law"
  },
  {
    purpose: "Marketing",
    description: "To send relevant marketing communications (with consent)",
    legalBasis: "Consent",
    retention: "Until consent withdrawn"
  }
];

export default function PrivacyPage() {
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
                <Shield className="w-4 h-4 mr-2" />
                <span>PRIVACY POLICY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Privacy
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We are committed to protecting your privacy and ensuring the security of your personal data in accordance with UK GDPR.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="#data-rights" className="flex items-center gap-2">
                    Your Rights
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
                  <Shield className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-400" />
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
              Your Privacy Matters
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This privacy policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          {/* Data Controller Information */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Controller
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Information about who is responsible for your personal data.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building className="w-6 h-6 mr-2 text-blue-600" />
                      Company Details
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Name:</strong> SR IT Support Services Private LTD</p>
                      <p><strong>Registration:</strong> England and Wales</p>
                      <p><strong>ICO Registration:</strong> [Your ICO Number]</p>
                      <p><strong>Data Protection Officer:</strong> [DPO Contact]</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-green-600" />
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Address:</strong> 123 Business Street, London, SW1A 1AA</p>
                      <p><strong>Phone:</strong> 020 8058 8503</p>
                      <p><strong>Email:</strong> privacy@sritsupportservices.co.uk</p>
                      <p><strong>Website:</strong> www.sritsupportservices.co.uk</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data We Collect */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data We Collect
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We collect different types of personal data to provide our services effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataCategories.map((category, index) => (
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

          {/* How We Use Your Data */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How We Use Your Data
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We process your personal data for specific purposes with appropriate legal bases.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Legal Basis</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {dataPurposes.map((purpose, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{purpose.purpose}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{purpose.description}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{purpose.legalBasis}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{purpose.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Sharing */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Sharing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We may share your data with trusted partners and service providers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Service Providers</h3>
                  </div>
                  <p className="text-gray-600">
                    We work with trusted third-party service providers who help us deliver our services. 
                    All providers are bound by data protection agreements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Legal Requirements</h3>
                  </div>
                  <p className="text-gray-600">
                    We may disclose your data when required by law, regulation, or legal process, 
                    or to protect our rights and safety.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Business Partners</h3>
                  </div>
                  <p className="text-gray-600">
                    We may share data with business partners for joint services, 
                    always with your explicit consent and appropriate safeguards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Your Rights */}
          <div id="data-rights" className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Data Rights
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Under UK GDPR, you have several rights regarding your personal data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataRights.map((right, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${right.color}`}>
                        <right.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {right.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Encryption</h3>
                  </div>
                  <p className="text-gray-600">
                    All data is encrypted in transit and at rest using industry-standard encryption protocols.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Access Controls</h3>
                  </div>
                  <p className="text-gray-600">
                    Strict access controls ensure only authorized personnel can access your personal data.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <Key className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Regular Audits</h3>
                  </div>
                  <p className="text-gray-600">
                    We conduct regular security audits and assessments to maintain data protection standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-16 sm:mb-20">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    International Data Transfers
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Your data is primarily processed within the UK and European Economic Area (EEA). 
                    If we need to transfer data outside the EEA, we ensure adequate protection through:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Adequacy Decisions</h4>
                      <p className="text-gray-600">Transfers to countries with adequate data protection</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Standard Contractual Clauses</h4>
                      <p className="text-gray-600">EU-approved data transfer agreements</p>
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
                  Exercise Your Rights
                </h3>
                <p className="text-gray-600 mb-6">
                  To exercise any of your data rights or if you have questions about this privacy policy, 
                  please contact us using the information below.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      Email
                    </h4>
                    <p className="text-gray-600">privacy@sritsupportservices.co.uk</p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-600" />
                      Phone
                    </h4>
                    <p className="text-gray-600">020 8058 8503</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Link href="/cookies" className="flex items-center gap-2">
                      Cookie Policy
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