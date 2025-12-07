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
    color: "primary"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our IT experts",
    contact: "+44 (0) 20 8058 8503",
    response: "Available during business hours",
    color: "secondary"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support for urgent technical issues",
    contact: "Available on website",
    response: "Real-time response",
    color: "accent"
  }
];

const businessHours = [
  { 
    day: "Monday - Friday", 
    hours: "9:00 AM - 6:00 PM", 
    status: "Open",
    icon: Calendar,
    color: "primary",
    description: "Full support available"
  },
  { 
    day: "Saturday", 
    hours: "10:00 AM - 4:00 PM", 
    status: "Open",
    icon: Calendar,
    color: "primary",
    description: "Limited support"
  },
  { 
    day: "Sunday", 
    hours: "Closed", 
    status: "Closed",
    icon: Calendar,
    color: "muted",
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
                <span className="text-center">GET IN TOUCH</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Let's Start
                <span className="block bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                  Your Project
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ready to transform your IT infrastructure? Get in touch with our expert team for a free consultation and personalized solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <a href="#contact-form" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border bg-muted/50 backdrop-blur-sm text-foreground hover:bg-muted px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
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
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Min Response</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Contact Methods
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Multiple Ways to
              <span className="block text-primary">Get in Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the most convenient way to reach our expert IT support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              let gradientClass = "from-primary to-primary/80";
              if (method.color === "secondary") {
                gradientClass = "from-secondary to-secondary/80";
              } else if (method.color === "accent") {
                gradientClass = "from-accent to-accent/80";
              }
              
              return (
                <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-primary-foreground shadow-lg mx-auto mb-4`}>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{method.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">{method.description}</p>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-foreground">{method.contact}</div>
                        <div className="text-sm text-muted-foreground">Response: {method.response}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile First */}
      <section id="contact-form" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 text-xs sm:text-sm">
              Contact Form
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Send Us a
              <span className="block text-primary">Message</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a personalized solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Enhanced Business Hours */}
            <div className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur-sm border border-border h-fit">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg mb-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">We're here to help during these hours</p>
                  </div>
                  
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => {
                      const IconComponent = schedule.icon;
                      let gradientClass = "from-primary to-primary/80";
                      if (schedule.color === "muted") {
                        gradientClass = "from-muted to-muted/80";
                      }
                      
                      return (
                        <div key={index} className="group relative overflow-hidden rounded-lg bg-muted/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center text-primary-foreground shadow-sm flex-shrink-0`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-foreground font-semibold text-sm sm:text-base">{schedule.day}</div>
                                <div className="text-muted-foreground text-xs sm:text-sm">{schedule.hours}</div>
                                <div className="text-muted-foreground/80 text-xs mt-1">{schedule.description}</div>
                              </div>
                            </div>
                            <Badge className={`text-xs font-medium ${
                              schedule.status === 'Open' 
                                ? 'bg-primary/10 text-primary border-primary/20' 
                                : 'bg-muted/10 text-muted-foreground border-border'
                            }`}>
                              {schedule.status}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-destructive to-destructive/80 flex items-center justify-center text-destructive-foreground shadow-sm">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-foreground font-semibold text-sm">Emergency Support</div>
                        <div className="text-muted-foreground text-xs">Business hours for critical issues</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-sm">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-foreground font-semibold text-sm">Remote Support</div>
                        <div className="text-muted-foreground text-xs">Available worldwide</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border border-border">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Send us a Message</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium text-sm">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 backdrop-blur-sm rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-destructive text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium text-sm">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your email address" 
                                  {...field} 
                                  className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 backdrop-blur-sm rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-destructive text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium text-sm">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company name (optional)" 
                                {...field} 
                                className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 backdrop-blur-sm rounded-lg"
                              />
                            </FormControl>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium text-sm">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your IT support needs or any questions you have..." 
                                className="min-h-[140px] border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none backdrop-blur-sm rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
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
