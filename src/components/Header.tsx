import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const handleNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-charcoal/95 backdrop-blur-xl border-b border-gold/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 rounded-sm border border-gold/40 flex items-center justify-center bg-charcoal/50 group-hover:border-gold transition-colors duration-300">
              <span className="font-display text-gold text-xl font-light">MH</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-foreground text-lg leading-tight tracking-wide">
                Marcus Hale
              </div>
              <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body">
                Private Estates
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={cn(
                  "text-sm font-body tracking-wide-luxe uppercase transition-colors duration-300 relative py-1",
                  isActive(item.path)
                    ? "text-gold"
                    : "text-foreground/70 hover:text-gold"
                )}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold/60" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav("/contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Private Consultation
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/98 backdrop-blur-xl animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="relative flex flex-col items-center justify-center h-full gap-6 px-8">
            {navItems.map((item, i) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={cn(
                  "font-display text-2xl tracking-wide transition-all duration-500 animate-fade-in-up",
                  isActive(item.path) ? "text-gold" : "text-foreground/80 hover:text-gold"
                )}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("/contact")}
              className="mt-4 px-8 py-3.5 gold-gradient text-charcoal font-body text-sm font-semibold tracking-luxe uppercase animate-fade-in-up"
              style={{ animationDelay: `${navItems.length * 0.08}s` }}
            >
              Private Consultation
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

