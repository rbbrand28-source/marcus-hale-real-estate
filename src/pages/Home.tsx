import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, Quote,
  Award, Shield, Users, TrendingUp, Calendar, MapPin, Eye, Star,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties, testimonials, getFeaturedProperties, marcusBio } from "@/data/content";
import { cn } from "@/lib/utils";

const heroSlides = [
  "https://images.unsplash.com/photo-1613492392455-1f1e6e5f1c3a?w=1920&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90",
  "https://images.unsplash.com/photo-1604591172214-6f5a4e5c5e5e?w=1920&q=90",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90",
];

export default function Home() {
  const featured = getFeaturedProperties();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const trustStats = [
    { icon: TrendingUp, value: "€750M+", label: "Career Sales Volume" },
    { icon: Users, value: "120+", label: "Private Clientele" },
    { icon: Shield, value: "100%", label: "Discreet Service" },
    { icon: Award, value: "18 yrs", label: "Solo Advisory" },
  ];

  return (
    <div className="bg-charcoal min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Slideshow */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-[2000ms]",
              i === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={slide}
              alt="Luxury estate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="animate-fade-in-up">
                <div className="text-gold/80 text-xs tracking-luxe uppercase font-body mb-6 flex items-center gap-3">
                  <span className="w-12 h-px bg-gold/50" />
                  Marcus Hale | Private Estates
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6 text-shadow-lux animate-fade-in-delay">
                Curating Extraordinary
                <br />
                <span className="gold-text-gradient italic">Estates</span> for
                <br />
                Visionary Clients
              </h1>

              <p className="text-lg text-foreground/80 font-body mb-2 animate-fade-in-delay-2 max-w-xl">
                €10M+ Properties | Solo Advisory Excellence
              </p>
              <p className="text-sm text-foreground/60 font-body mb-10 animate-fade-in-delay-2 max-w-xl">
                Personalized access to the world's most exclusive off-market opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                <Link
                  to="/listings"
                  className="group flex items-center justify-center gap-3 px-8 py-4 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity"
                >
                  Explore Exclusive Listings
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 px-8 py-4 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-colors font-body text-sm tracking-wide-luxe uppercase backdrop-blur-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Confidential Tour
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "h-1 transition-all duration-500",
                i === currentSlide ? "w-10 bg-gold" : "w-6 bg-foreground/30"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-float">
          <span className="text-[10px] tracking-luxe text-foreground/40 uppercase font-body">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative bg-charcoal border-y border-gold/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <stat.icon className="w-6 h-6 text-gold/60 mb-3 group-hover:text-gold transition-colors" />
                <div className="font-display text-2xl md:text-3xl text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] tracking-wide-luxe text-muted-foreground uppercase font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-6">
              The Marcus Hale Difference
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-8">
              Marcus Hale delivers personalized access to the world's most
              <span className="gold-text-gradient italic"> exclusive</span> off-market opportunities.
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12 max-w-2xl mx-auto">
              No team of junior agents. No franchise model. No volume targets. Just Marcus, his network, and an unwavering commitment to each client. This is solo advisory at its finest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Discretion", desc: "Absolute privacy. Your search, your acquisition, your identity — protected at every step." },
                { title: "Access", desc: "40% of transactions are off-market. Marcus provides entry to properties you won't find anywhere else." },
                { title: "Expertise", desc: "€750M+ in career sales. 18 years of curating extraordinary estates for visionary clients." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-left p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="relative py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
              Find Your Estate
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Quick Search
            </h2>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="relative py-32 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
                Featured Collection
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Extraordinary Estates
              </h2>
            </div>
            <Link
              to="/listings"
              className="group flex items-center gap-2 text-gold hover:gap-3 transition-all duration-300 font-body text-sm tracking-wide-luxe uppercase"
            >
              View All Listings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.slice(0, 6).map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/listings"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 font-body text-sm tracking-wide-luxe uppercase"
            >
              Explore All Properties
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GET VALUATION CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=1920&q=85)`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-6">
              For Property Owners
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              What is your estate truly worth?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-10 leading-relaxed">
              Marcus provides confidential, no-obligation valuations for owners of exceptional properties. Benefit from his 18 years of market intelligence and extensive buyer network.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity"
            >
              Get Your Property Valuation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
              Client Experiences
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Trusted by Visionaries
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    i === testimonialIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  )}
                >
                  <div className="text-center">
                    <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
                    <p className="font-display text-xl md:text-2xl text-foreground/90 leading-relaxed italic mb-8 max-w-3xl mx-auto">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                    <div className="font-body text-gold text-sm tracking-wide-luxe uppercase">
                      {testimonial.clientName}
                    </div>
                    <div className="text-xs text-muted-foreground font-body mt-1">
                      {testimonial.clientRole}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === testimonialIndex ? "w-8 bg-gold" : "w-1.5 bg-foreground/20"
                    )}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-gold/70 hover:text-gold transition-colors text-sm tracking-wide-luxe uppercase font-body"
              >
                Read All Client Experiences
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-32 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={marcusBio.portraitImage}
                  alt="Marcus Hale"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 max-w-[200px] hidden md:block">
                <div className="font-display text-3xl text-gold mb-1">€750M+</div>
                <div className="text-[10px] tracking-wide-luxe text-muted-foreground uppercase font-body">
                  Career Sales Volume
                </div>
              </div>
            </div>

            <div>
              <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-6">
                Your Advisor
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
                Marcus Hale
              </h2>
              <p className="text-lg text-foreground/70 italic font-display mb-6">
                {marcusBio.philosophy}
              </p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">
                {marcusBio.bio[0]} {marcusBio.bio[2]}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-gold hover:gap-4 transition-all duration-300 font-body text-sm tracking-wide-luxe uppercase"
              >
                Discover Marcus's Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS PREVIEW */}
      <section className="relative py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
                Market Insights
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Intelligence & Perspectives
              </h2>
            </div>
            <Link
              to="/insights"
              className="group flex items-center gap-2 text-gold hover:gap-3 transition-all duration-300 font-body text-sm tracking-wide-luxe uppercase"
            >
              All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "2026 Luxury Market Trends in Monteverde Bay", category: "Market Analysis", date: "Jan 8, 2026", image: "https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1600&q=85", slug: "2026-luxury-market-trends-monteverde-bay" },
              { title: "The Art of Discreet Transactions", category: "Industry Insight", date: "Nov 22, 
