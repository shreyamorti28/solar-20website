import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Zap, Sparkles, Lock, Heart, Moon, Sun, ChevronDown } from 'lucide-react';

// Logo Component
const SolarLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9999 0C19.6818 0 22.6666 2.98477 22.6666 6.66667H9.33325C9.33325 2.98477 12.318 0 15.9999 0Z" fill="#1A1A1A"/>
    <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z" fill="#1A1A1A"/>
    <path d="M6.66667 9.33334C2.98477 9.33334 0 12.3181 0 16C0 19.6819 2.98477 22.6667 6.66667 22.6667V9.33334Z" fill="#1A1A1A"/>
    <path d="M32 16C32 19.6819 29.0152 22.6667 25.3333 22.6667V9.33334C29.0152 9.33334 32 12.3181 32 16Z" fill="#1A1A1A"/>
    <path d="M9.33325 25.3333C9.33325 29.0152 12.318 32 15.9999 32C19.6818 32 22.6666 29.0152 22.6666 25.3333H9.33325Z" fill="#1A1A1A"/>
    <path d="M25.3333 2.66666C27.5425 2.66666 29.3333 4.45752 29.3333 6.66666H25.3333V2.66666Z" fill="#1A1A1A"/>
    <path d="M25.3333 29.3333C27.5425 29.3333 29.3333 27.5425 29.3333 25.3333H25.3333V29.3333Z" fill="#1A1A1A"/>
    <path d="M2.66675 6.66666C2.66675 4.45752 4.45761 2.66666 6.66675 2.66666V6.66666H2.66675Z" fill="#1A1A1A"/>
    <path d="M2.66675 25.3333C2.66675 27.5425 4.45761 29.3333 6.66675 29.3333V25.3333H2.66675Z" fill="#1A1A1A"/>
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SolarLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">Testimonials</a>
            <a href="#blog" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-semibold">
              Sign In
            </Button>
            <Button className="text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-light">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-semibold text-gray-900">Features</a>
              <a href="#pricing" className="text-sm font-semibold text-gray-900">Pricing</a>
              <a href="#testimonials" className="text-sm font-semibold text-gray-900">Testimonials</a>
              <a href="#blog" className="text-sm font-semibold text-gray-900">Blog</a>
              <a href="#contact" className="text-sm font-semibold text-gray-900">Contact</a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="text-sm font-semibold justify-start">
                  Sign In
                </Button>
                <Button className="text-sm font-semibold bg-primary hover:bg-primary/90 text-white justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Large Logo */}
          <div className="flex justify-center mb-8">
            <SolarLogo className="w-11 h-11" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
              Harness the Power of Solar Sales Automation
            </h1>
            <p className="text-lg lg:text-xl text-black/80 mb-8 max-w-3xl mx-auto">
              Transform your solar business with cutting-edge AI tools that streamline lead generation and client interaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 bg-gray-100 border-gray-300 text-black hover:bg-gray-200"
              >
                Discover More
              </Button>
              <Button 
                size="lg"
                className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-white"
              >
                Start Your Journey
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-5xl mx-auto">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d131264dd3fedd05b4865478fe77a01e528369f0?width=2400" 
              alt="SolarMaps AI Dashboard"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Partner Logos Component
const PartnerLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-black mb-12">
          Trusted Partners in Solar Innovation
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {/* Partner logos - using placeholder divs for now since original logos might have licensing issues */}
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">VISA</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">Google Pay</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">Apple Pay</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">PayPal</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">Stripe</div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center text-sm font-semibold">Bitpay</div>
        </div>
      </div>
    </section>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PartnerLogos />
      
      {/* Placeholder for remaining sections */}
      <div className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-gray-600">
            Additional sections (CTA, Features, Testimonials, Pricing, FAQ, Footer) will be implemented next...
          </p>
        </div>
      </div>
    </div>
  );
}
