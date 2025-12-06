"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { 
  Cookie, Shield, Settings, BarChart3, Target, 
  CheckCircle, XCircle, Info, ExternalLink, ArrowRight,
  Download, Upload, RefreshCw, Save, Trash2, Eye
} from "lucide-react";
import Link from "next/link";
import { useCookiePreferences } from "@/hooks/use-cookie-preferences";

const cookieCategories = [
  {
    id: "essential",
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    examples: ["Session management", "Security", "Load balancing"],
    icon: Shield,
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    required: true
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Google Analytics", "Page views", "User behavior"],
    icon: BarChart3,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    required: false
  },
  {
    id: "functional",
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
    examples: ["Language preferences", "Form data", "User settings"],
    icon: Settings,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    required: false
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    examples: ["Social media", "Advertising networks", "Retargeting"],
    icon: Target,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    required: false
  }
];

export default function CookieSettingsPage() {
  const {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
    clearAllCookies,
    exportPreferences,
    importPreferences
  } = useCookiePreferences();

  const [importText, setImportText] = useState("");
  const [showImport, setShowImport] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [importError, setImportError] = useState("");

  const handlePreferenceChange = (category: keyof typeof preferences, value: boolean) => {
    const newPreferences = {
      ...preferences,
      [category]: value
    };
    updatePreferences(newPreferences);
  };

  const handleImport = () => {
    if (importText.trim()) {
      const success = importPreferences(importText);
      if (success) {
        setImportSuccess(true);
        setImportError("");
        setImportText("");
        setTimeout(() => setImportSuccess(false), 3000);
      } else {
        setImportError("Invalid preferences format. Please check your JSON data.");
        setImportSuccess(false);
      }
    }
  };

  const handleExport = () => {
    const data = exportPreferences();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cookie-preferences.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
                <Settings className="w-4 h-4 mr-2" />
                <span>COOKIE SETTINGS</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Cookie
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Settings
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Manage your cookie preferences and control how we use your data to enhance your browsing experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={acceptAll}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Accept All
                </Button>
                <Button 
                  onClick={rejectAll}
                  size="lg" 
                  variant="outline"
                  className="border-gray-300 text-gray-300 hover:bg-gray-800 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Reject All
                </Button>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <Settings className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Current Status */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Current Settings
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Review and modify your current cookie preferences.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Consent Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Consent Given:</span>
                        <Badge variant={hasConsent ? "default" : "secondary"} className={hasConsent ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {hasConsent ? "Yes" : "No"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Essential Cookies:</span>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Always Active
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button onClick={acceptAll} className="w-full bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Accept All Cookies
                      </Button>
                      <Button onClick={rejectAll} variant="outline" className="w-full">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject Non-Essential
                      </Button>
                      <Button onClick={clearAllCookies} variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Clear All Cookies
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cookie Categories */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cookie Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Customize your preferences for each type of cookie we use.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cookieCategories.map((category) => (
                <Card key={category.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                          {category.required && (
                            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                              Always Active
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Switch
                        checked={preferences[category.id as keyof typeof preferences]}
                        onCheckedChange={(checked) => 
                          handlePreferenceChange(category.id as keyof typeof preferences, checked)
                        }
                        disabled={category.required}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Import/Export */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Backup & Restore
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Export your preferences or import them from a backup file.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Download className="w-6 h-6 mr-2 text-blue-600" />
                    Export Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Download your current cookie preferences as a JSON file for backup or transfer.
                  </p>
                  <Button onClick={handleExport} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Export Settings
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Upload className="w-6 h-6 mr-2 text-green-600" />
                    Import Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Import cookie preferences from a previously exported JSON file.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setShowImport(!showImport)} 
                      variant="outline" 
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {showImport ? "Hide Import" : "Show Import"}
                    </Button>
                    
                    {showImport && (
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Paste your JSON preferences here..."
                          value={importText}
                          onChange={(e) => setImportText(e.target.value)}
                          className="min-h-[100px]"
                        />
                        <div className="flex gap-2">
                          <Button onClick={handleImport} className="flex-1 bg-green-600 hover:bg-green-700">
                            <Upload className="w-4 h-4 mr-2" />
                            Import
                          </Button>
                          <Button 
                            onClick={() => {
                              setImportText("");
                              setImportError("");
                              setImportSuccess(false);
                            }} 
                            variant="outline" 
                            className="flex-1"
                          >
                            Clear
                          </Button>
                        </div>
                        {importSuccess && (
                          <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                            Preferences imported successfully!
                          </div>
                        )}
                        {importError && (
                          <div className="p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                            {importError}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center">
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need More Information?
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn more about how we use cookies and your data protection rights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Link href="/cookies" className="flex items-center gap-2">
                      Cookie Policy
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