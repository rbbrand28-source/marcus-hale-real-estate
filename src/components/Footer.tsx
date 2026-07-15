import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { contactInfo, navItems } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm border border-gold/40 flex items-center justify-center">
                <span className="font-display text-gold text-xl font-light">MH</span>
              </div>
              <div>
                <div className="font-display text-foreground text-lg leading-tight">
                  Marcus Hale
                </div>
                <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body">
                  Private Estates
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Curating extraordinary estates for visionary clients. Solo advisory excellence in ultra-luxury real estate.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-gold text-sm tracking-luxe uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300 font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold text-sm tracking-luxe uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-body">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-body">{contactInfo.address}</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/60 font-body mt-4 italic">
              {contactInfo.officeHours}
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-gold text-sm tracking-luxe uppercase mb-6">
              Exclusive Market Reports
            </h4>
            <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
              Receive private market insights and off-market opportunities directly.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                if (input?.value) {
                  input.value = '';
                  window.dispatchEvent(new CustomEvent('toast', { detail: { message: 'Thank you. Marcus will be in touch privately.', type: 'success' } }));
                }
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Your private email"
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 gold-gradient text-charcoal text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity font-body"
              >
                Subscribe Privately
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="luxury-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50 font-body">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Marcus Hale | Private Estates. All rights reserved.</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">GDPR Notice</a>
          </div>
          <div className="text-muted-foreground/40">
            All properties, names, and data are fictional. For demonstration purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
}

