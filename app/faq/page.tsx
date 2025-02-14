"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#2B3B6B] to-[#00B4FF]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Find answers to common questions about our IT support services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#2B3B6B] to-[#00B4FF]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Still Have Questions?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is here to help. Contact us for personalized assistance.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button asChild className="w-full bg-white text-[#2B3B6B] hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

