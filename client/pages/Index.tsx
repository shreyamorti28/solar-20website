import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Zap,
  Sparkles,
  Lock,
  Heart,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

// Logo Component
const SolarLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9999 0C19.6818 0 22.6666 2.98477 22.6666 6.66667H9.33325C9.33325 2.98477 12.318 0 15.9999 0Z"
      fill="#1A1A1A"
    />
    <path
      d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
      fill="#1A1A1A"
    />
    <path
      d="M6.66667 9.33334C2.98477 9.33334 0 12.3181 0 16C0 19.6819 2.98477 22.6667 6.66667 22.6667V9.33334Z"
      fill="#1A1A1A"
    />
    <path
      d="M32 16C32 19.6819 29.0152 22.6667 25.3333 22.6667V9.33334C29.0152 9.33334 32 12.3181 32 16Z"
      fill="#1A1A1A"
    />
    <path
      d="M9.33325 25.3333C9.33325 29.0152 12.318 32 15.9999 32C19.6818 32 22.6666 29.0152 22.6666 25.3333H9.33325Z"
      fill="#1A1A1A"
    />
    <path
      d="M25.3333 2.66666C27.5425 2.66666 29.3333 4.45752 29.3333 6.66666H25.3333V2.66666Z"
      fill="#1A1A1A"
    />
    <path
      d="M25.3333 29.3333C27.5425 29.3333 29.3333 27.5425 29.3333 25.3333H25.3333V29.3333Z"
      fill="#1A1A1A"
    />
    <path
      d="M2.66675 6.66666C2.66675 4.45752 4.45761 2.66666 6.66675 2.66666V6.66666H2.66675Z"
      fill="#1A1A1A"
    />
    <path
      d="M2.66675 25.3333C2.66675 27.5425 4.45761 29.3333 6.66675 29.3333V25.3333H2.66675Z"
      fill="#1A1A1A"
    />
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
            <a
              href="#features"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#blog"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Contact
            </a>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-light">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-semibold text-gray-900"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-semibold text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm font-semibold text-gray-900"
              >
                Testimonials
              </a>
              <a href="#blog" className="text-sm font-semibold text-gray-900">
                Blog
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-gray-900"
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="ghost"
                  className="text-sm font-semibold justify-start"
                >
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
    <section className="hero-bg py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Large Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <SolarLogo className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight px-2">
              Harness the Power of Solar Sales Automation
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-black/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Transform your solar business with cutting-edge AI tools that
              streamline lead generation and client interaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-gray-100 border-gray-300 text-black hover:bg-gray-200 w-full sm:w-auto"
              >
                Discover More
              </Button>
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-5xl mx-auto px-2 sm:px-0">
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
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-black mb-8 lg:mb-12">
          Trusted Partners in Solar Innovation
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 opacity-60">
          {/* Partner logos - using placeholder divs for now since original logos might have licensing issues */}
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            VISA
          </div>
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            Google Pay
          </div>
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            Apple Pay
          </div>
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            PayPal
          </div>
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            Stripe
          </div>
          <div className="h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs sm:text-sm font-semibold">
            Bitpay
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section with Testimonial
const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Unlock Your Solar Sales Potential!
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Transform your solar business with SolarMaps AI. Our innovative
                app streamlines lead generation and enhances your sales process.
                Don't miss out on maximizing your efficiency!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
                Get Started Now
              </Button>
            </div>

            {/* Testimonial Card */}
            <div className="p-4 sm:p-6 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 sm:w-7 h-5 sm:h-7 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  5.0
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                "SolarMaps AI has revolutionized our sales strategy!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/28960d0b9d4ff934f644859289b4b0f6434e4c5c?width=64"
                  alt="John Smith"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border border-gray-300 flex-shrink-0"
                />
                <span className="text-sm sm:text-lg text-black">
                  John Smith, CEO of Solar Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:order-last order-first lg:order-none">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6665acf80bc7f4a12611ffeebd78d7ab8c061d11?width=1008"
              alt="SolarMaps Dashboard"
              className="w-full h-auto rounded-lg border border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Lead Generation",
      description:
        "Automate lead generation with AI-driven insights tailored for solar companies.",
    },
    {
      icon: <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Cold Calling",
      description:
        "Leverage AI technology to enhance your cold calling efficiency and effectiveness.",
    },
    {
      icon: <Lock className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Appointment Scheduling",
      description:
        "Seamlessly schedule appointments without the hassle, ensuring you never miss a lead.",
    },
    {
      icon: <Heart className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "CRM Integration",
      description:
        "Sync leads effortlessly with Salesforce and HubSpot to streamline your sales workflow.",
    },
    {
      icon: <Moon className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "User Management",
      description:
        "Control user roles and permissions to optimize team collaboration and productivity.",
    },
    {
      icon: <Sun className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Customizable Dashboard",
      description:
        "Enjoy a professional UI with a customizable dashboard to visualize leads and activity.",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Transform Your Solar Sales Process
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
              Start Automating Today
            </Button>
            <Button
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-gray-50 border-gray-300 text-black hover:bg-gray-100 w-full sm:w-auto"
            >
              Discover More Features
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3 sm:space-y-4">
              <div className="w-9 sm:w-10 h-9 sm:h-10 mx-auto border border-gray-300 rounded-lg bg-white flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily Carter",
      role: "Sales Manager",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d23389ded3093a0ad230f0dfd549161b4e07880?width=128",
      content:
        "The SolarMaps AI app has transformed our lead generation process. It's incredibly easy to use, and the automated calling feature has significantly improved our outreach efficiency. I can't imagine managing our solar sales without it!",
    },
    {
      name: "Joshua Lee",
      role: "Marketing Director",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/304ca4636fcc0e0b2500e6e1dd0fd98f5fdf57d2?width=128",
      content:
        "Since integrating SolarMaps into our workflow, we've seen a 35% increase in our lead conversion rates. The seamless CRM sync has made tracking and managing leads a breeze. Highly recommend for any solar company!",
    },
    {
      name: "Sofia Martinez",
      role: "Operations Lead",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e4bed1c91668bde3cdf0d02a873700bd591a5962?width=128",
      content:
        "I love the dual mode feature! Whether I'm working late at night or during the day, I can switch modes to reduce eye strain. Plus, the appointment scheduling is super intuitive and saves me a lot of time.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-12 sm:mb-16">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center space-y-4 sm:space-y-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full border border-gray-300"
              />

              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 sm:w-6 h-5 sm:h-6 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-2">
                "{testimonial.content}"
              </p>

              <div>
                <p className="text-base sm:text-lg font-medium text-black">
                  {testimonial.name}
                </p>
                <p className="text-base sm:text-lg text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Basic Package",
      price: "$4",
      subtitle: "$29.99/month",
      description: "Ideal for individual solar salespersons",
      features: [
        "Automated lead generation",
        "AI-powered cold calling",
        "Appointment scheduling",
        "Call history tracking",
        "Light/Dark mode toggle",
      ],
      isPopular: false,
    },
    {
      name: "Pro Package",
      price: "$12",
      subtitle: "$99.99/month",
      description: "Perfect for growing solar teams",
      features: [
        "Advanced CRM integration",
        "Role management system",
        "Enhanced call analytics",
        "Customizable user dashboard",
        "Team collaboration tools",
        "Priority customer support",
      ],
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Affordable Solar Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Choose the perfect plan to power your solar sales efforts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 border border-gray-300 rounded-xl ${
                plan.isPopular ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-block px-3 py-2 border border-gray-300 rounded-lg bg-white">
                    <span className="text-base sm:text-lg font-semibold text-black">
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg text-gray-600">
                      {plan.subtitle}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <hr className="border-gray-300" />

                {/* Features */}
                <div className="space-y-4 sm:space-y-5">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-white border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 sm:w-5 h-4 sm:h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg text-black leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full text-base sm:text-lg py-3 ${
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-gray-50 border border-gray-300 text-black hover:bg-gray-100"
                  }`}
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {plan.isPopular ? "Join the Pro Team" : "Get Started Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // Second FAQ open by default

  const faqs = [
    {
      question: "What features does SolarMaps AI offer?",
      answer: "",
    },
    {
      question: "How does automated lead generation work?",
      answer:
        "Automated lead generation in SolarMaps AI leverages advanced algorithms to identify potential customers interested in solar solutions. By analyzing various data points, the app generates high-quality leads, saving you time and improving your sales efficiency.",
    },
    {
      question: "Can I sync SolarMaps with my CRM?",
      answer:
        "Absolutely! SolarMaps AI seamlessly integrates with popular CRM systems like Salesforce and HubSpot, allowing you to sync your leads effortlessly. This ensures that your sales team has access to all necessary information in one place, enhancing collaboration and productivity.",
    },
    {
      question: "Is there support for appointment scheduling?",
      answer:
        "Yes! The app includes a user-friendly appointment scheduling feature that helps you organize meetings with potential clients effectively. You can easily set, manage, and track appointments right from your dashboard.",
    },
    {
      question: "What user roles can I manage?",
      answer:
        "SolarMaps AI allows you to manage various user roles, including Salesperson, Admin, and Manager. This feature ensures that each team member has the appropriate access and permissions, facilitating better team management.",
    },
    {
      question: "How can I customize the app's appearance?",
      answer:
        "Customization is simple with SolarMaps AI. You can toggle between light and dark modes according to your preference, ensuring a comfortable user experience that suits your working environment.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Your Questions Answered
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Everything You Need to Know
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg bg-gray-50"
            >
              <button
                className="w-full p-4 sm:p-6 text-left flex justify-between items-start gap-4"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-medium text-black text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 sm:w-7 h-6 sm:h-7 text-gray-600 transition-transform flex-shrink-0 mt-0.5 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && faq.answer && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e6c1ec88e5c05c64096876ebeead1008065c9771?width=2400"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Left Column */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 sm:mb-8 leading-tight">
                Connect with SolarMaps Team
              </h3>
            </div>

            {/* Middle Column */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
                  SolarMaps Headquarters
                </h4>
                <p className="text-lg sm:text-xl text-gray-900 leading-relaxed">
                  123 Solar Street, Suite 100, Sunnytown, CA 90210. Phone: (123)
                  456-7890. We are here to help you succeed.
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  support@solarmaps.com
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-bold text-gray-900">
                Follow Us
              </h4>
              <p className="text-lg sm:text-xl text-gray-900 leading-relaxed">
                Stay connected with us on our social media platforms for updates
                and tips. Join our community of solar enthusiasts. Let's
                revolutionize solar sales together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PartnerLogos />
      <CTASection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
