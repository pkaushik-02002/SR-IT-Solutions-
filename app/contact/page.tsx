"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { 
  Mail, Send, Building2, User, MessageCircle, Phone, Clock, 
  ArrowRight, CheckCircle, Shield, Zap, Users, Award, Calendar,
  MapPin, Globe, Star
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get in touch via email for detailed inquiries",
    contact: "info@sritsupportservices.co.uk",
    response: "Within 24 hours",
    color: "blue",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our IT experts",
    contact: "+44 (0) 20 8058 8503",
    response: "Available during business hours",
    color: "green",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support for urgent technical issues",
    contact: "Available on website",
    response: "Real-time response",
    color: "purple",
    gradient: "from-purple-500 to-purple-600"
  }
];

const businessHours = [
  { 
    day: "Monday - Friday", 
    hours: "9:00 AM - 6:00 PM", 
    status: "Open",
    icon: Calendar,
    color: "green",
    description: "Full support available"
  },
  { 
    day: "Saturday", 
    hours: "10:00 AM - 4:00 PM", 
    status: "Open",
    icon: Calendar,
    color: "blue",
    description: "Limited support"
  },
  { 
    day: "Sunday", 
    hours: "Closed", 
    status: "Closed",
    icon: Calendar,
    color: "gray",
    description: "Emergency support only"
  },
];

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addDoc(collection(db, "contacts"), {
        ...values,
        createdAt: new Date().toISOString(),
      })

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
  }

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
                <span className="text-center">GET IN TOUCH</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Let's Start
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Your Project
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ready to transform your IT infrastructure? Get in touch with our expert team for a free consultation and personalized solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <a href="#contact-form" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group border border-white/20">
                  <a href="tel:+442080588503" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Stats Column */}
            <div className="relative w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Card className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                        <Users className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-sm text-gray-400">Clients</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-4 text-xs sm:text-sm">
              Contact Methods
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Multiple Ways to
              <span className="block text-green-400">Get in Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the most convenient way to reach our expert IT support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg mx-auto mb-4`}>
                      <method.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-white">{method.contact}</div>
                      <div className="text-sm text-gray-400">Response: {method.response}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile First */}
      <section id="contact-form" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 text-xs sm:text-sm">
              Contact Form
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Send Us a
              <span className="block text-blue-400">Message</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a personalized solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Enhanced Business Hours */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 h-fit">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg mb-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300 text-sm">We're here to help during these hours</p>
                  </div>
                  
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-lg bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                              schedule.color === 'green' ? 'from-green-500 to-green-600' :
                              schedule.color === 'blue' ? 'from-blue-500 to-blue-600' :
                              'from-gray-500 to-gray-600'
                            } flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                              <schedule.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-sm sm:text-base">{schedule.day}</div>
                              <div className="text-gray-400 text-xs sm:text-sm">{schedule.hours}</div>
                              <div className="text-gray-500 text-xs mt-1">{schedule.description}</div>
                            </div>
                          </div>
                          <Badge className={`text-xs font-medium ${
                            schedule.status === 'Open' 
                              ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                              : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                          }`}>
                            {schedule.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-sm">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Emergency Support</div>
                        <div className="text-gray-400 text-xs">24/7 for critical issues</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Remote Support</div>
                        <div className="text-gray-400 text-xs">Available worldwide</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-gray-300 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-medium text-sm">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  className="h-12 border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 backdrop-blur-sm rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-medium text-sm">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your email address" 
                                  {...field} 
                                  className="h-12 border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 backdrop-blur-sm rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium text-sm">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company name (optional)" 
                                {...field} 
                                className="h-12 border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 backdrop-blur-sm rounded-lg"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-medium text-sm">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your IT support needs or any questions you have..." 
                                className="min-h-[140px] border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none backdrop-blur-sm rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold h-12 text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
