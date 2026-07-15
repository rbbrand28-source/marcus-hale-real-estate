import { useState } from "react";
import { Quote, Star, Video, ArrowRight, Award, Lock } from "lucide-react";
import { testimonials } from "@/data/content";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const clientTypes = ["All", ...new Set(testimonials.map((t) => t.clientType))];

  const filtered = filter === "All"
    ? testimonials
    : testimonials.filter((t) => t.clientType === filter);

  const selectedTestimonial = selected !== null ? testimonials[selected] : null;

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 border-b border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
            Discreet Success Stories
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Client Experiences
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Anonymized accounts from the visionary clients who trust Marcus Hale with their most significant property decisions.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clientTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "px-4 py-2 text-xs font-body tracking-wide transition-all duration-300 border",
                  filter === type
                    ? "gold-gradient text-charcoal border-gold"
                    : "border-gold/15 text-foreground/60 hover:border-gold/40 hover:text-gold"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((testimonial, i) => (
              <article
                key={testimonial.id}
                className="glass-panel p-8 rounded-lg hover-lift cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => setSelected(testimonials.indexOf(testimonial))}
              >
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-8 h-8 text-gold/30 flex-shrink-0" />
                  {testimonial.hasVideo && (
                    <span className="flex items-center gap-1.5 text-gold text-[10px] tracking-wide-luxe uppercase font-body">
                      <Video className="w-3.5 h-3.5" />
                      Video
                    </span>
                  )}
                </div>

                <p className="font-display text-lg text-foreground/85 italic leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <div>
                    <div className="font-body text-gold text-sm tracking-wide-luxe uppercase">
                      {testimonial.clientName}
                    </div>
                    <div className="text-xs text-muted-foreground font-body mt-0.5">
                      {testimonial.clientRole}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-body">
                    {testimonial.propertyType}
                  </span>
                </div>

                <button className="mt-4 flex items-center gap-2 text-gold text-xs tracking-wide-luxe uppercase font-body hover:gap-3 transition-all">
                  Read Full Story
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Summary */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-10 h-10 text-gold/50 mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Relationships That Endure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { value: "7+ years", label: "Average Client Relationship" },
                { value: "15", label: "Countries Represented" },
                { value: "100%", label: "Client Discretion Maintained" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl text-gold mb-2">{stat.value}</div>
                  <div className="text-[10px] tracking-wide-luxe text-muted-foreground uppercase font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight mb-6">
              Become the Next Success Story
            </h2>
            <p className="text-lg text-charcoal/80 font-body mb-10 leading-relaxed">
              Join a clientele that spans continents and industries. Your extraordinary estate awaits.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-gold font-body text-sm font-semibold tracking-wide-luxe uppercase hover:bg-charcoal-light transition-colors"
            >
              Request Private Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelected(null)}
          />
          <div className="relative glass-panel rounded-lg max-w-2xl w-full p-8 md:p-12 max-h-[90vh] overflow-y-auto scrollbar-hide animate-scale-in">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
              aria-label="Close"
            >
              ✕
            </button>

            <Quote className="w-10 h-10 text-gold/40 mb-6" />
            <p className="font-display text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
              "{selectedTestimonial.quote}"
            </p>

            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: selectedTestimonial.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>

            <div className="luxury-divider mb-6" />

            <h3 className="font-display text-lg text-gold tracking-wide-luxe uppercase mb-4">
              The Full Story
            </h3>
            <p className="text-sm text-foreground/70 font-body leading-relaxed mb-6">
              {selectedTestimonial.fullStory}
            </p>

            <div className="p-4 bg-emerald/10 border border-emerald/20 rounded-sm mb-6">
              <div className="text-[10px] tracking-luxe text-emerald-light uppercase font-body mb-2 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                Anonymized Outcome
              </div>
              <p className="text-sm text-foreground/80 font-body">{selectedTestimonial.outcome}</p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gold/10">
              <div>
                <div className="font-body text-gold text-sm tracking-wide-luxe uppercase">
                  {selectedTestimonial.clientName}
                </div>
                <div className="text-xs text-muted-foreground font-body mt-0.5">
                  {selectedTestimonial.clientRole}
                </div>
              </div>
              {selectedTestimonial.hasVideo && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold text-[10px] tracking-wide-luxe uppercase font-body">
                  <Video className="w-3.5 h-3.5" />
                  Video Available
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

