"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories"
import { ShieldCheck, HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  // IT Services
  {
    question: "What IT support services do you offer?",
    answer:
      "We offer a comprehensive range of IT support services including SAS programming, cloud solutions, database management, IT infrastructure setup, cybersecurity, website development, mobile app development, API development, and 24/7 technical support. Our services are tailored to meet the specific needs of businesses of all sizes.",
    category: "IT Services",
  },
  {
    question: "How quickly can you respond to IT issues?",
    answer:
      "Our team is committed to rapid response times. For critical issues, we aim to respond within 15-30 minutes. For non-critical issues, we typically respond within 2-4 hours. Our 24/7 support ensures that we're always available to address your IT concerns.",
    category: "IT Services",
  },
  {
    question: "Do you offer remote IT support?",
    answer:
      "Yes, we offer comprehensive remote IT support. Our advanced tools allow us to diagnose and resolve many issues without the need for on-site visits, ensuring quick and efficient problem resolution. However, for issues that require physical intervention, we also provide on-site support.",
    category: "IT Services",
  },
  {
    question: "Can you help with cloud migration?",
    answer:
      "We specialize in cloud migration services. Our team can help you choose the right cloud platform (such as AWS, Azure, or Google Cloud), plan your migration strategy, execute the migration with minimal downtime, and provide ongoing support and optimization for your cloud infrastructure.",
    category: "IT Services",
  },
  {
    question: "What cybersecurity measures do you implement?",
    answer:
      "We implement a multi-layered approach to cybersecurity. This includes firewalls, antivirus software, regular security audits, employee training, data encryption, multi-factor authentication, and continuous monitoring for threats. We also keep all systems updated with the latest security patches.",
    category: "IT Services",
  },
  {
    question: "Do you provide IT consulting services?",
    answer:
      "Yes, we offer IT consulting services to help businesses align their IT strategies with their business goals. This includes IT infrastructure planning, technology roadmapping, digital transformation strategies, and advice on emerging technologies that could benefit your business.",
    category: "IT Services",
  },
  {
    question: "How do you handle data backup and recovery?",
    answer:
      "We implement robust data backup and recovery solutions. This typically involves regular automated backups, both on-site and off-site (cloud) backups, and periodic testing of the recovery process. We ensure that your critical data is always protected and can be quickly restored in case of any data loss incidents.",
    category: "IT Services",
  },
  {
    question: "Can you support both Windows and Mac environments?",
    answer:
      "Yes, our team is proficient in supporting both Windows and Mac environments. We can help with system setup, troubleshooting, software installation, and general support for both operating systems. We also support mixed environments where both Windows and Mac systems are used.",
    category: "IT Services",
  },
  {
    question: "What website development services do you provide?",
    answer:
      "We offer comprehensive website development services including custom website design, e-commerce solutions, content management systems (CMS), responsive design, SEO optimization, and ongoing maintenance. We use modern technologies like React, Next.js, and Node.js to create fast, secure, and scalable websites.",
    category: "IT Services",
  },
  {
    question: "Do you provide mobile app development services?",
    answer:
      "Yes, we develop mobile applications for both iOS and Android platforms. Our mobile development services include native app development, cross-platform solutions using React Native or Flutter, app maintenance, updates, and integration with existing systems.",
    category: "IT Services",
  },
  {
    question: "What cloud solutions do you offer?",
    answer:
      "We provide comprehensive cloud solutions including cloud infrastructure setup, migration services, cloud security, cost optimization, and ongoing management. We work with major cloud providers like AWS, Azure, and Google Cloud Platform to deliver scalable and reliable cloud solutions.",
    category: "IT Services",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement strict data security measures including encryption, secure access controls, regular security audits, and compliance with UK GDPR and Data Protection Act 2018. We also provide data protection training and ensure all our processes follow best practices for data security.",
    category: "IT Services",
  },
  
  // Privacy & Cookies
  {
    question: "What cookies do you use on your website?",
    answer:
      "We use essential cookies for website functionality, analytics cookies to understand user behavior, functional cookies for personalization, and marketing cookies for targeted advertising. You can manage your cookie preferences through our cookie banner or visit our dedicated cookie settings page.",
    category: "Privacy & Cookies",
  },
  {
    question: "How can I manage my cookie preferences?",
    answer:
      "You can manage your cookie preferences through our cookie banner that appears when you first visit our website, or by visiting our dedicated cookie settings page. You can accept all cookies, reject non-essential cookies, or customize your preferences for each category.",
    category: "Privacy & Cookies",
  },
  {
    question: "What are my data protection rights?",
    answer:
      "Under UK GDPR, you have several rights including the right to access your data, request corrections, request deletion, data portability, object to processing, and restrict processing. You can exercise these rights by contacting us at privacy@sritsupportservices.co.uk.",
    category: "Privacy & Cookies",
  },
  {
    question: "How do you handle personal data?",
    answer:
      "We process personal data lawfully, fairly, and transparently in accordance with UK GDPR. We only collect data for specified purposes, keep it accurate and up-to-date, store it securely, and protect it against unauthorized access. We never sell your personal data to third parties.",
    category: "Privacy & Cookies",
  },
  {
    question: "Can I export my cookie preferences?",
    answer:
      "Yes, you can export your cookie preferences as a JSON file from our cookie settings page. This allows you to backup your preferences or transfer them to another device. You can also import preferences from a previously exported file.",
    category: "Privacy & Cookies",
  },
  
  // Business & Support
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve London and the surrounding areas, but we also provide remote IT support and services to businesses across the UK. Our cloud-based solutions allow us to support clients nationwide and internationally.",
    category: "Business & Support",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Yes, we provide 24/7 IT support for critical issues and emergency situations. Our support team is available around the clock to ensure your business operations continue smoothly without interruption.",
    category: "Business & Support",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies based on the services required and the size of your business. We offer flexible packages including pay-as-you-go support, managed IT services, and project-based pricing. Contact us for a free consultation and customized quote.",
    category: "Business & Support",
  },
  {
    question: "Do you provide training for staff?",
    answer:
      "Yes, we offer IT training services to help your staff understand and effectively use your IT systems. This includes cybersecurity awareness training, software training, and best practices for data protection and IT security.",
    category: "Business & Support",
  },
  {
    question: "How do you handle emergency IT issues?",
    answer:
      "For emergency IT issues, we have a dedicated emergency response team available 24/7. We prioritize critical issues that affect business operations and aim to resolve them as quickly as possible, often within minutes to hours depending on the complexity.",
    category: "Business & Support",
  },
  {
    question: "Do you provide ongoing IT maintenance?",
    answer:
      "Yes, we offer comprehensive IT maintenance services including regular system updates, security patches, performance monitoring, backup verification, and proactive maintenance to prevent issues before they occur.",
    category: "Business & Support",
  },
  {
    question: "Can you help with IT infrastructure planning?",
    answer:
      "Absolutely. We provide IT infrastructure planning services to help you design, implement, and maintain a robust IT infrastructure that supports your business goals. This includes network design, server planning, and technology roadmapping.",
    category: "Business & Support",
  },
  {
    question: "What happens if I need to cancel my service?",
    answer:
      "You can cancel your service with 30 days written notice. We'll help you transition smoothly and ensure all your data is properly backed up and transferred. Please refer to our Terms of Service for detailed cancellation procedures.",
    category: "Business & Support",
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
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
                <HelpCircle className="w-4 h-4 mr-2" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Find Answers
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  to Common Questions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get comprehensive answers about our IT services, privacy policies, and support options. Everything you need to know about working with SR IT Support Services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl transition-all duration-300 group">
                  <Link href="#faq-section" className="flex items-center gap-2">
                    Browse Questions
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-300 hover:bg-gray-800 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Support
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <HelpCircle className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="bg-white dark:bg-slate-900">
        <FaqSectionWithCategories
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT services, privacy policies, and support options"
          items={faqs}
          contactInfo={{
            title: "Still have questions?",
            description: "Our team is here to help with personalized assistance",
            buttonText: "Contact Us",
            onContact: () => window.location.href = "/contact",
          }}
        />
      </section>
    </div>
  )
}

