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
import { Mail } from "lucide-react"

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
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B3B6B] text-white overflow-hidden py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        <p className="text-lg md:text-xl text-white/80 mt-4">Reach out to us for any inquiries or support</p>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl font-bold text-[#2B3B6B] mb-8">Contact Information</h2>
            <div className="bg-gradient-to-r from-[#2B3B6B] to-[#00B4FF] text-white p-8 rounded-xl shadow-lg flex flex-col space-y-6 border border-gray-200 max-w-md">
              <h3 className="text-2xl font-semibold">Contact Us</h3>
              <hr className="border-t border-white/30" />
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <p className="text-lg">support@example.com</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden">
              <h2 className="text-2xl font-bold text-[#2B3B6B] mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              {...field} 
                              className="rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..." 
                            className="min-h-[150px] rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#2B3B6B] to-[#00B4FF] hover:opacity-90 transition-opacity rounded-lg py-6 text-white font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}