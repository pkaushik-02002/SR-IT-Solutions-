"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShieldCheck } from "lucide-react"

const faqs = [
  {
    question: "What IT support services do you offer?",
    answer:
      "We offer a comprehensive range of IT support services including SAS programming, cloud solutions, database management, IT infrastructure setup, cybersecurity, and 24/7 technical support. Our services are tailored to meet the specific needs of businesses of all sizes.",
  },
  {
    question: "How quickly can you respond to IT issues?",
    answer:
      "Our team is committed to rapid response times. For critical issues, we aim to respond within 15-30 minutes. For non-critical issues, we typically respond within 2-4 hours. Our 24/7 support ensures that we're always available to address your IT concerns.",
  },
  {
    question: "Do you offer remote IT support?",
    answer:
      "Yes, we offer comprehensive remote IT support. Our advanced tools allow us to diagnose and resolve many issues without the need for on-site visits, ensuring quick and efficient problem resolution. However, for issues that require physical intervention, we also provide on-site support.",
  },
  {
    question: "Can you help with cloud migration?",
    answer:
      "We specialize in cloud migration services. Our team can help you choose the right cloud platform (such as AWS, Azure, or Google Cloud), plan your migration strategy, execute the migration with minimal downtime, and provide ongoing support and optimization for your cloud infrastructure.",
  },
  {
    question: "What cybersecurity measures do you implement?",
    answer:
      "We implement a multi-layered approach to cybersecurity. This includes firewalls, antivirus software, regular security audits, employee training, data encryption, multi-factor authentication, and continuous monitoring for threats. We also keep all systems updated with the latest security patches.",
  },
  {
    question: "Do you provide IT consulting services?",
    answer:
      "Yes, we offer IT consulting services to help businesses align their IT strategies with their business goals. This includes IT infrastructure planning, technology roadmapping, digital transformation strategies, and advice on emerging technologies that could benefit your business.",
  },
  {
    question: "How do you handle data backup and recovery?",
    answer:
      "We implement robust data backup and recovery solutions. This typically involves regular automated backups, both on-site and off-site (cloud) backups, and periodic testing of the recovery process. We ensure that your critical data is always protected and can be quickly restored in case of any data loss incidents.",
  },
  {
    question: "Can you support both Windows and Mac environments?",
    answer:
      "Yes, our team is proficient in supporting both Windows and Mac environments. We can help with system setup, troubleshooting, software installation, and general support for both operating systems. We also support mixed environments where both Windows and Mac systems are used.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-700/10 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 p-4 shadow-lg">
              <ShieldCheck className="w-8 h-8 text-blue-700 dark:text-blue-300" />
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-2 font-medium">
            Find answers to common questions about our IT support services
          </p>
        </div>
        {/* Soft shadow divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900" />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 flex justify-center bg-slate-50 dark:bg-slate-900">
        <div className="w-full max-w-2xl px-2 sm:px-4">
          <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-8">
            <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 dark:divide-slate-700">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}
                  className="py-2">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="w-full flex justify-center px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center w-full max-w-xl mx-auto">
            <div className="space-y-2 w-full">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white drop-shadow-lg">
                Still Have Questions?
              </h2>
              <p className="mx-auto max-w-xl text-blue-100 md:text-xl">
                Our team is here to help. Contact us for personalized assistance.
              </p>
            </div>
            <div className="w-full max-w-xs space-y-2 mx-auto">
              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg shadow-md">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

