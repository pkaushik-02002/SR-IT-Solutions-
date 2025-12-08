"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Eye, Lock, AlertTriangle, CheckCircle, XCircle, Info, 
  ExternalLink, ArrowRight, Database, Users, BarChart3, Target, 
  Globe, Clock, FileText, Phone, Mail, Calendar, Key
} from "lucide-react";
import Link from "next/link";

const dataCategories = [
  {
    name: "Personal Information",
    description: "Information that identifies you personally",
    examples: ["Name", "Email address", "Phone number", "Company details"],
    icon: Users,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Technical Data",
    description: "Information about your device and browsing",
    examples: ["IP address", "Browser type", "Device information", "Cookies"],
    icon: Database,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Usage Data",
    description: "Information about how you use our services",
    examples: ["Pages visited", "Time spent", "Features used", "Error logs"],
    icon: BarChart3,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Communication Data",
    description: "Information from your communications with us",
    examples: ["Contact forms", "Support requests", "Email correspondence", "Feedback"],
    icon: Mail,
    color: "bg-primary/10 text-primary border-primary/20"
  }
];

const dataRights = [
  {
    title: "Right to Access",
    description: "You have the right to request a copy of your personal data",
    icon: Eye,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Right to Rectification",
    description: "You can request correction of inaccurate personal data",
    icon: CheckCircle,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Right to Erasure",
    description: "You can request deletion of your personal data",
    icon: XCircle,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Right to Portability",
    description: "You can request your data in a structured format",
    icon: Database,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Right to Object",
    description: "You can object to processing of your personal data",
    icon: AlertTriangle,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Right to Restrict",
    description: "You can request restriction of data processing",
    icon: Lock,
    color: "bg-primary/10 text-primary"
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
                <Shield className="w-4 h-4 mr-2" />
                <span>PRIVACY POLICY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Privacy
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We are committed to protecting your privacy and ensuring the security of your personal data in accordance with UK GDPR.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Last Updated */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground mb-6">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Last Updated: January 1, 2024
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Privacy Matters
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This privacy policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          {/* Data We Collect */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data We Collect
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We collect different types of personal data to provide our services effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataCategories.map((category, index) => (
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

          {/* How We Use Your Data */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                How We Use Your Data
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We process your personal data for specific purposes with appropriate legal bases.
              </p>
            </div>
            
            <Card className="border border-border bg-card/50 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Legal Basis</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dataPurposes.map((purpose, index) => (
                        <tr key={index} className="hover:bg-muted/50">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{purpose.purpose}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{purpose.description}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{purpose.legalBasis}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{purpose.retention}</td>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data Sharing
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We may share your data with trusted partners and service providers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Service Providers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We work with trusted third-party service providers who help us deliver our services. 
                    All providers are bound by data protection agreements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Legal Requirements</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We may disclose your data when required by law, regulation, or legal process, 
                    or to protect our rights and safety.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Business Partners</h3>
                  </div>
                  <p className="text-muted-foreground">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Data Rights
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Under UK GDPR, you have several rights regarding your personal data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataRights.map((right, index) => (
                <Card key={index} className="border border-border bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${right.color}`}>
                        <right.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {right.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data Security
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Encryption</h3>
                  </div>
                  <p className="text-muted-foreground">
                    All data is encrypted in transit and at rest using industry-standard encryption protocols.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Access Controls</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Strict access controls ensure only authorized personnel can access your personal data.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Key className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Regular Audits</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We conduct regular security audits and assessments to maintain data protection standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-16 sm:mb-20">
            <Card className="border border-border bg-card/50 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    International Data Transfers
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Your data is primarily processed within the UK and European Economic Area (EEA). 
                    If we need to transfer data outside the EEA, we ensure adequate protection through:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Adequacy Decisions</h4>
                      <p className="text-muted-foreground">Transfers to countries with adequate data protection</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Standard Contractual Clauses</h4>
                      <p className="text-muted-foreground">EU-approved data transfer agreements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <Card className="border border-border bg-card/50 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Exercise Your Rights
                </h3>
                <p className="text-muted-foreground mb-6">
                  To exercise any of your data rights or if you have questions about this privacy policy, 
                  please contact us using the information below.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-primary" />
                      Email
                    </h4>
                    <p className="text-muted-foreground">privacy@sritsupportservices.co.uk</p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Phone
                    </h4>
                    <p className="text-muted-foreground">020 8058 8503</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
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