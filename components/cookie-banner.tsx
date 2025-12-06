"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Cookie, Shield, Settings, BarChart3, Target, 
  CheckCircle, XCircle, Info, ExternalLink, ArrowRight,
  ChevronDown, ChevronUp, Lock, Eye, Database
} from "lucide-react";
import Link from "next/link";
import { cookieManager, type CookiePreferences } from "@/lib/cookie-manager";



interface CookieBannerProps {
  onAccept?: (preferences: CookiePreferences) => void;
  onReject?: () => void;
  onCustomize?: (preferences: CookiePreferences) => void;
}

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

export default function CookieBanner({ onAccept, onReject, onCustomize }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    if (!cookieManager.hasConsent()) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    cookieManager.setPreferences(allAccepted);
    setIsVisible(false);
    onAccept?.(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    cookieManager.setPreferences(onlyEssential);
    setIsVisible(false);
    onReject?.();
  };

  const handleCustomize = () => {
    cookieManager.setPreferences(preferences);
    setIsVisible(false);
    onCustomize?.(preferences);
  };

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
            <CardContent className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Cookie Preferences
                    </h3>
                    <p className="text-sm text-gray-600">
                      We use cookies to enhance your browsing experience
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  GDPR Compliant
                </Badge>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to provide, protect, and improve our services. 
                  By clicking "Accept All", you consent to our use of cookies for analytics and marketing purposes. 
                  You can customize your preferences below.
                </p>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex-1"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept All
                  </Button>
                  <Button 
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject All
                  </Button>
                  <Button 
                    onClick={() => setShowDetails(!showDetails)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    {showDetails ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Customize
                      </>
                    )}
                  </Button>
                </div>

                {/* Detailed Preferences */}
                {showDetails && (
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Cookie Categories</h4>
                    
                    <div className="space-y-4">
                      {cookieCategories.map((category) => (
                        <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${category.color}`}>
                                <category.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 flex items-center gap-2">
                                  {category.name}
                                  {category.required && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                      Always Active
                                    </Badge>
                                  )}
                                </h5>
                                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                              </div>
                            </div>
                            <Switch
                              checked={preferences[category.id as keyof CookiePreferences]}
                              onCheckedChange={(checked) => 
                                handlePreferenceChange(category.id as keyof CookiePreferences, checked)
                              }
                              disabled={category.required}
                            />
                          </div>
                          
                          <div className="ml-11">
                            <p className="text-xs font-medium text-gray-700 mb-2">Examples:</p>
                            <div className="flex flex-wrap gap-2">
                              {category.examples.map((example, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Customize Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        onClick={handleCustomize}
                        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white flex-1"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Save Preferences
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <Link href="/cookies" className="flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          Learn More
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Footer Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-blue-600 transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: January 1, 2024
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
} 