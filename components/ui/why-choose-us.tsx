import React from 'react';
import { Shield, Clock, Users, Award, Zap, HeadphonesIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, highlight }) => {
  return (
    <Card className="relative p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          {highlight && (
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              {highlight}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, suffix = "" }) => {
  return (
    <div className="text-center p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
        {number}{suffix}
      </div>
      <div className="text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Advanced cybersecurity measures with 24/7 monitoring, threat detection, and data protection protocols to keep your business safe from evolving digital threats.",
      highlight: "ISO Certified"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Rapid Response",
      description: "Round-the-clock technical support with guaranteed response times. Our expert team ensures minimal downtime and maximum productivity for your operations.",
      highlight: "< 15 min"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated IT Experts",
      description: "Certified professionals with extensive experience across all major platforms and technologies. Your dedicated team becomes an extension of your business.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Over a decade of excellence serving businesses of all sizes. Our solutions have helped companies reduce IT costs by up to 40% while improving efficiency.",
      highlight: "10+ Years"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Future-ready infrastructure that grows with your business. From startups to enterprises, our solutions adapt to your changing needs seamlessly.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Proactive Monitoring",
      description: "AI-powered monitoring systems that identify and resolve issues before they impact your business. Prevention is always better than cure.",
    }
  ];

  const stats = [
    { number: "500", label: "Happy Clients", suffix: "+" },
    { number: "99.9", label: "Uptime Guarantee", suffix: "%" },
    { number: "24", label: "Hour Support", suffix: "/7" },
    { number: "15", label: "Avg Response Time", suffix: " min" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Why Choose SR IT Support
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted IT Partner for
            <span className="text-blue-400 block mt-2">Business Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled IT support services designed to accelerate your business growth. 
            We combine cutting-edge technology with human expertise to deliver solutions that matter.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        {/* REMOVED: The following block has been removed as per user request. */}
        {/* <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust SR IT Support for their technology needs. 
              Let's discuss how we can optimize your IT operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-3 border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 