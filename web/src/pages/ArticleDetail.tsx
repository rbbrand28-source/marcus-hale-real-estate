import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/content";
import { useEffect } from "react";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="bg-charcoal min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/insights" className="inline-flex items-center gap-2 px-6 py-3 gold-gradient text-charcoal font-body text-sm tracking-wide-luxe uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);
  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 2);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Back bar */}
      <div className="container mx-auto px-6 py-4">
        <button
          onClick={() => navigate("/insights")}
          className="flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Market Insights
        </button>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-12">
            <span className="inline-block px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-gold text-[10px] tracking-wide-luxe uppercase font-body mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-foreground max-w-4xl leading-tight text-shadow-lux">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-y border-gold/10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-body">
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-gold/60" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gold/60" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold/60" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-xl font-display text-foreground/80 italic leading-relaxed mb-10 pb-10 border-b border-gold/10">
              {article.excerpt}
            </div>
            <div className="space-y-8">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base text-foreground/75 font-body leading-relaxed first-letter:text-3xl first-letter:font-display first-letter:text-gold first-letter:mr-1 [&:not(:first-child)]:first-letter:text-base [&:not(:first-child)]:first-letter:font-body [&:not(:first-child)]:first-letter:text-foreground/75 [&:not(:first-child)]:first-letter:mr-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-gold/10">
              <Tag className="w-4 h-4 text-gold/50" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-gold/15 text-foreground/60 text-xs font-body tracking-wide hover:border-gold/40 hover:text-gold transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-12 p-8 glass-panel rounded-lg flex items-center gap-6">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="font-display text-charcoal text-2xl">MH</span>
              </div>
              <div>
                <div className="font-display text-lg text-foreground">Marcus Hale</div>
                <div className="text-xs text-gold/70 tracking-wide-luxe uppercase font-body mb-2">Founder & Principal Advisor</div>
                <p className="text-sm text-muted-foreground font-body">
                  €750M+ in career sales. 18 years of curating extraordinary estates for visionary clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 border-t border-gold/10">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl text-foreground mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  className="group flex gap-4 items-start"
                >
                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] tracking-wide-luxe text-gold/70 uppercase font-body mb-2">
                      {rel.category}
                    </div>
                    <h3 className="font-display text-base text-foreground group-hover:text-gold transition-colors leading-snug mb-2">
                      {rel.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-body">{rel.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

