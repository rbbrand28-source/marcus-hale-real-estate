import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-6 pt-20">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl md:text-9xl gold-text-gradient mb-6">404</div>
        <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-muted-foreground font-body mb-10 leading-relaxed">
          The page you are looking for may have been moved, or perhaps it exists as an off-market opportunity — available only through private consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/30 text-gold hover:border-gold/50 transition-colors font-body text-sm tracking-wide-luxe uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Private Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

