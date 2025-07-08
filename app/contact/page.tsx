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
import { Mail, Send, Building2, User, MessageCircle } from "lucide-react"

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
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Gradient background with subtle pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-700/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-20 sm:py-28 lg:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-2 font-medium">
            Get in touch with our team to discuss your IT support needs.<br className="hidden sm:block" /> We're here to help you optimize your technology infrastructure.
          </p>
        </div>
        {/* Soft shadow divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900" />
      </section>

      {/* Main Content */}
      <div className="container max-w-full mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 gap-y-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 w-full">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-5 sm:p-8 w-full">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:info@sritsupportservices.co.uk" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      info@sritsupportservices.co.uk
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-3">Business Hours</h3>
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-3">Service Areas</h3>
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <p>London & Greater London</p>
                    <p>Surrounding Counties</p>
                    <p>Remote Support Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 w-full">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-5 sm:p-8 w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Send us a Message
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="h-11 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your email address" 
                              {...field} 
                              className="h-11 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your company name (optional)" 
                            {...field} 
                            className="h-11 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your IT support needs or any questions you have..." 
                            className="min-h-[140px] border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 text-base transition-colors"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
