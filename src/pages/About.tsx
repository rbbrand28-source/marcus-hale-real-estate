import { Link } from "react-router-dom";
import { ArrowRight, Award, TrendingUp, Users, Shield, Quote } from "lucide-react";
import { marcusBio } from "@/data/content";

export default function About() {
  const stats = [
    { icon: TrendingUp, value: marcusBio.careerSales, label: "Career Sales Volume" },
    { icon: Users, value: marcusBio.clientCount, label: "Private Clients Served" },
    { icon: Shield, value: marcusBio.offMarketDeals, label: "Of Transactions Off-Market" },
    { icon: Award, value: `${marcusBio.yearsExperience} years`, label: "Solo Advisory" },
  ];

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img
          src={marcusBio.portraitImage}
          alt="Marcus Hale"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-12">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
              Your Advisor
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2 text-shadow-lux">
              Marcus Hale
            </h1>
            <p className="font-display text-lg md:text-xl text-foreground/70 italic">
              {marcusBio.title} · {marcusBio.company}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal-light border-y border-gold/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <stat.icon className="w-6 h-6 text-gold/60 mb-3 group-hover:text-gold transition-colors" />
                <div className="font-display text-2xl md:text-3xl text-gold mb-1">{stat.value}</div>
                <div className="text-[10px] tracking-wide-luxe text-muted-foreground uppercase font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-6">
              The Journey
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 leading-tight">
              A self-made millionaire redefining<br />ultra-luxury advisory
            </h2>
            <div className="space-y-6">
              {marcusBio.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base text-foreground/75 font-body leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-light" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl text-foreground/90 italic leading-relaxed mb-6">
              {marcusBio.philosophy}
            </blockquote>
            <div className="text-gold text-sm tracking-luxe uppercase font-body">
              — Marcus Hale
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Images */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marcusBio.lifestyleImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={img}
                  alt={`Marcus Hale lifestyle ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
              Recognition
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Key Achievements
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {marcusBio.achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-charcoal-lighter border border-gold/10 hover:border-gold/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm text-foreground/80 font-body">{achievement}</span>
              </div>
            ))}
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
              Work with Marcus
            </h2>
            <p className="text-lg text-charcoal/80 font-body mb-10 leading-relaxed">
              Experience the difference of solo advisory. Your search for the extraordinary begins with a private conversation.
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
    </div>
  );
}

