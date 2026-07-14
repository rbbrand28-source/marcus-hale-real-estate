import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, TrendingUp } from "lucide-react";
import { articles } from "@/data/content";
import { useState } from "react";

export default function Insights() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const featured = articles[0];
  const rest = articles.slice(1);

  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <div className="bg-charcoal min-h-screen pt-24">
      {/* Header */}
      <section className="relative py-16 border-b border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
            Intelligence & Perspectives
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Market Insights
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Proprietary analysis, investment frameworks, and lifestyle perspectives from Marcus Hale's 18 years at the pinnacle of ultra-luxury real estate.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Link
            to={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-gold text-[10px] tracking-wide-luxe uppercase font-body">
                Featured · {featured.category}
              </span>
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-body mb-3">
                {featured.date} · {featured.readTime}
              </div>
              <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 group-hover:text-gold transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-gold text-sm tracking-wide-luxe uppercase font-body group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Category filter strip */}
      <section className="py-8 border-y border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mr-2">Categories:</span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 border border-gold/15 text-foreground/60 text-xs font-body tracking-wide cursor-default hover:border-gold/40 hover:text-gold transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <article className="bg-charcoal-light overflow-hidden hover-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-gold text-[10px] tracking-wide-luxe uppercase font-body">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground font-body mb-3">
                      {article.date} · {article.readTime}
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-gold text-xs tracking-wide-luxe uppercase font-body flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-light" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold text-xs tracking-luxe uppercase font-body mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Exclusive Market Reports
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Receive Private Market Intelligence
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Quarterly market reports, off-market opportunity alerts, and investment analysis — delivered privately to your inbox.
            </p>
            {emailSubmitted ? (
              <div className="glass-panel p-8 rounded-lg animate-scale-in">
                <div className="w-12 h-12 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-charcoal" />
                </div>
                <p className="font-display text-xl text-foreground">Welcome to the inner circle.</p>
                <p className="text-sm text-muted-foreground font-body mt-2">Your first report will arrive within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmailSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Your private email"
                  className="flex-1 bg-charcoal-lighter border border-gold/15 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[10px] text-muted-foreground/50 font-body mt-4">
              Strictly confidential. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

