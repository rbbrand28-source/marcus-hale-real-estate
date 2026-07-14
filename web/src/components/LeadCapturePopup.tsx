import { useState, useEffect } from "react";
import { X, Download, Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(handleClose, 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      <div className="relative glass-panel rounded-lg max-w-md w-full p-8 animate-scale-in shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4">
              <Download className="w-7 h-7 text-charcoal" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">Report Sent</h3>
            <p className="text-sm text-muted-foreground font-body">
              The 2026 Ultra-Luxury Investment Report has been sent to your email. Marcus will be in touch privately.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <Lock className="w-4 h-4 text-gold" />
              </div>
              <span className="text-[10px] tracking-luxe text-gold uppercase font-body">Exclusive Report</span>
            </div>

            <h3 className="font-display text-2xl text-foreground mb-3 leading-tight">
              The 2026 Ultra-Luxury Investment Report
            </h3>

            <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
              48 pages of proprietary market analysis, off-market trends, and investment frameworks for high-net-wouth buyers. Available privately.
            </p>

            <div className="flex items-center gap-2 mb-6 text-xs text-gold/70 font-body">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated by Marcus Hale · €750M+ in career sales</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Full name"
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
              />
              <input
                type="email"
                required
                placeholder="Private email address"
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </form>

            <p className="text-[10px] text-muted-foreground/50 font-body mt-4 text-center">
              Your information remains strictly confidential. No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

