"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { addDoc, collection } from "firebase/firestore"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export function Footer() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50">
      {/* Main Section */}
      <div className="container px-4 py-12 md:py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-lg bg-[#2B3B6B]/10 px-3 py-1 text-sm mb-4">
                <span className="text-[#2B3B6B] font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#2B3B6B] sm:text-4xl">Let's Start a Conversation</h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-xl">
                Have questions about our services? Fill out the form and we'll be in touch shortly.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-[#2B3B6B]">
              <Mail className="h-5 w-5" />
              <Link
                href="mailto:contact@srit.com"
                className="hover:text-[#00B4FF] transition-colors"
              >
                contact@srit.com
              </Link>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#2B3B6B] text-lg">Quick Links</h4>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/about" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-[#2B3B6B] text-lg">Legal</h4>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-gray-600 hover:text-[#2B3B6B] transition-colors flex items-center">
                        <span className="w-1 h-1 bg-[#00B4FF] rounded-full mr-2"></span>
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-white shadow-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2B3B6B]/20 to-[#00B4FF]/20 rounded-bl-full"></div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-semibold text-[#2B3B6B] mb-6">Send us a message</h3>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10 py-2"
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
                        <FormControl>
                          <Input 
                            placeholder="Email Address" 
                            {...field} 
                            className="rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10 py-2"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Your Message" 
                            className="min-h-[120px] resize-none rounded-lg border-gray-300 focus:border-[#00B4FF] focus:ring-[#00B4FF]/10" 
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

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SR IT Support Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#2B3B6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#2B3B6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 00-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 00-.703-1.08 2.884 2.884 0 00-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#2B3B6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#2B3B6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.989 11.572a7.96 7.96 0 00-1.573-4.351 9.749 9.749 0 00-4.62-5.4c-2.684-1.524-5.416-1.173-7.804.753l-.794.68 5.299 1.066-.788.652c-.678.553-1.568 1.16-2.66 1.82-.588 1.53-.026 3.552 1.427 5.13 2.595 2.821 5.953 4.587 10.024 5.28.364-1.061.764-2.234 1.213-3.502a7.969 7.969 0 01-.723-1.128zm-11.724 5.152c-.535-.444-.944-1.044-1.165-1.759-.203.432-.599 1.115-1.2 1.972-.983 1.77-1.152 1.781-1.698 1.413L2 17.216c1.326-1.627 1.99-2.493 1.99-2.601 0-.108-.338-.874-1.011-2.3l1.366-.624 1.977 2.11c.695.738 1.23 1.257 1.655 1.624.824-1.55.885-3.012.193-4.355l-.92-1.788 1.388-.738 1.953 3.95c1.361 2.757 1.588 5.177.674 7.229z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}