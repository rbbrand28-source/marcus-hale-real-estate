import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Lock, User, ArrowRight, FileText, KeyRound, ShieldCheck,
  Home, TrendingUp, Bell, Eye, Download, ChevronRight, LogOut,
} from "lucide-react";
import { getOffMarketProperties, properties } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Portal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — any credentials work for demo
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <PortalDashboard onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <div className="bg-charcoal min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-6">
              <Lock className="w-7 h-7 text-gold" />
            </div>
            <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-3">
              Client Portal
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Private Access
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Sign in to access exclusive listings, transaction documents, and personalized recommendations.
            </p>
          </div>

          <form onSubmit={handleLogin} className="glass-panel p-8 rounded-lg space-y-5">
            <div>
              <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                Username or Email
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-charcoal-lighter border border-gold/15 pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                Password
              </label>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-charcoal-lighter border border-gold/15 pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground font-body cursor-pointer">
                <input type="checkbox" className="accent-gold w-3.5 h-3.5" />
                Remember me
              </label>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-gold/70 hover:text-gold transition-colors font-body">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3.5 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Secure Login
            </button>
          </form>

          <div className="text-center mt-8 space-y-3">
            <p className="text-xs text-muted-foreground font-body">
              Not a client yet? Request private access below.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all text-sm tracking-wide-luxe uppercase font-body"
            >
              Request Private Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-[10px] text-muted-foreground/50 font-body">
            <ShieldCheck className="w-3 h-3" />
            <span>256-bit SSL Encryption · GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalDashboard({ onLogout }: { onLogout: () => void }) {
  const offMarket = getOffMarketProperties();
  const clientProperties = properties.slice(0, 3);
  const documents = [
    { name: "Purchase Agreement — Azure Horizon Villa", date: "Jan 12, 2026", type: "Legal" },
    { name: "Property Inspection Report", date: "Jan 8, 2026", type: "Inspection" },
    { name: "Title Insurance Documentation", date: "Jan 5, 2026", type: "Insurance" },
    { name: "Mortgage Pre-Approval Letter", date: "Dec 28, 2025", type: "Financial" },
    { name: "Closing Cost Estimate", date: "Dec 20, 2025", type: "Financial" },
  ];
  const recommendations = properties.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Welcome header */}
      <section className="border-b border-gold/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-2">
                Welcome Back
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-foreground">
                Your Private Dashboard
              </h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-5 py-2.5 border border-gold/20 text-foreground/60 hover:text-gold hover:border-gold/40 transition-colors font-body text-sm tracking-wide-luxe uppercase"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Active Transactions */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Home className="w-5 h-5 text-gold" />
                <h2 className="font-display text-xl text-foreground">Active Transactions</h2>
              </div>
              <div className="space-y-4">
                {clientProperties.map((property) => (
                  <div
                    key={property.id}
                    className="flex items-center gap-4 p-5 glass-panel rounded-lg hover:border-gold/30 transition-colors cursor-pointer group"
                  >
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      <img src={property.heroImage} alt={property.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base text-foreground group-hover:text-gold transition-colors truncate">
                        {property.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-body">{property.location}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-gold/10 text-gold text-[10px] tracking-wide font-body">
                          In Progress
                        </span>
                        <span className="text-xs text-muted-foreground font-body">{property.priceDisplay}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>
            </section>

            {/* Documents */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-gold" />
                <h2 className="font-display text-xl text-foreground">Transaction Documents</h2>
              </div>
              <div className="glass-panel rounded-lg overflow-hidden">
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center gap-4 p-4 hover:bg-gold/5 transition-colors cursor-pointer group",
                      i !== documents.length - 1 && "border-b border-gold/5"
                    )}
                  >
                    <div className="w-9 h-9 rounded bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-foreground/80 font-body truncate">{doc.name}</div>
                      <div className="text-xs text-muted-foreground font-body">{doc.date} · {doc.type}</div>
                    </div>
                    <Download className="w-4 h-4 text-gold/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            </section>

            {/* Personalized Recommendations */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-gold" />
                <h2 className="font-display text-xl text-foreground">Personalized for You</h2>
              </div>
              <p className="text-xs text-muted-foreground font-body mb-4">
                AI-curated recommendations based on your preferences and search history.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendations.map((property) => (
                  <Link
                    key={property.id}
                    to={`/property/${property.slug}`}
                    className="group block bg-charcoal-lighter overflow-hidden hover-lift"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={property.heroImage} alt={property.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <div className="absolute bottom-2 left-3 text-gold font-display text-sm">{property.priceDisplay}</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-sm text-foreground group-hover:text-gold transition-colors truncate">{property.title}</h3>
                      <p className="text-xs text-muted-foreground font-body mt-1">{property.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right column: sidebar */}
          <div className="space-y-6">
            {/* Off-Market Exclusive */}
            <section className="glass-panel p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-4 h-4 text-gold" />
                <h3 className="font-display text-sm text-gold tracking-luxe uppercase">Off-Market Exclusive</h3>
              </div>
              <p className="text-xs text-muted-foreground font-body mb-4">
                Properties available only to verified clients.
              </p>
              <div className="space-y-3">
                {offMarket.map((property) => (
                  <Link
                    key={property.id}
                    to={`/property/${property.slug}`}
                    className="group flex gap-3 items-start"
                  >
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                      <img src={property.heroImage} alt={property.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-foreground/80 font-body group-hover:text-gold transition-colors truncate">{property.title}</div>
                      <div className="text-[10px] text-gold font-body mt-0.5">{property.priceDisplay}</div>
                      <div className="text-[10px] text-muted-foreground font-body">{property.location}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Notifications */}
            <section className="glass-panel p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-gold" />
                <h3 className="font-display text-sm text-gold tracking-luxe uppercase">Notifications</h3>
              </div>
              <div className="space-y-3">
                {[
                  "New off-market property matching your criteria",
                  "Document ready for review: Purchase Agreement",
                  "Marcus scheduled a viewing for Friday 2:00 PM",
                ].map((notif, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-foreground/70 font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>{notif}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Concierge */}
            <section className="glass-panel p-6 rounded-lg text-center">
              <h3 className="font-display text-sm text-gold tracking-luxe uppercase mb-3">Direct Line to Marcus</h3>
              <p className="text-xs text-muted-foreground font-body mb-4">
                Your private channel for any question, anytime.
              </p>
              <Link
                to="/contact"
                className="block w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity"
              >
                Contact Marcus
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
                }

