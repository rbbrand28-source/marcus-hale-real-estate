import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle2, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingStep, setBookingStep] = useState<"select" | "confirm">("select");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
  const nextDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      value: d.toISOString().split("T")[0],
      label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    };
  });

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 border-b border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
            Private Consultation
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Contact Marcus
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Schedule a confidential consultation. Whether you're seeking an extraordinary estate or considering the sale of your property, Marcus is at your service.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Form + Booking */}
          <div className="space-y-12">
            {/* Consultation Form */}
            <section>
              <h2 className="font-display text-2xl text-foreground mb-6">
                Request a Private Consultation
              </h2>
              {submitted ? (
                <div className="glass-panel p-8 rounded-lg text-center animate-scale-in">
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl text-foreground mb-2">Thank You</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Your request has been received. Marcus will personally respond within 24 hours to arrange your private consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                      I am interested in
                    </label>
                    <select
                      className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none font-body appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option>Acquiring a property</option>
                      <option>Selling a property</option>
                      <option>Property valuation</option>
                      <option>Off-market opportunities</option>
                      <option>Investment advisory</option>
                      <option>Other inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body resize-none"
                      placeholder="Tell Marcus about your aspirations and requirements..."
                    />
                  </div>

                  <label className="flex items-start gap-2 text-xs text-muted-foreground font-body cursor-pointer">
                    <input type="checkbox" required className="accent-gold w-3.5 h-3.5 mt-0.5" />
                    <span>I agree to the privacy policy and consent to being contacted regarding my inquiry. All information is kept strictly confidential.</span>
                  </label>

                  <button
                    type="submit"
                    className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3.5 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Send Private Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </section>

            {/* Booking Widget */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-gold" />
                <h2 className="font-display text-2xl text-foreground">
                  Book a Confidential Tour
                </h2>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-6">
                Select a preferred date and time. Marcus will confirm personally.
              </p>

              {bookingStep === "select" ? (
                <div className="glass-panel p-6 rounded-lg space-y-6">
                  <div>
                    <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mb-3">
                      Select a Date
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {nextDays.map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDate(day.value)}
                          className={cn(
                            "p-2 text-center border text-xs font-body transition-all",
                            selectedDate === day.value
                              ? "gold-gradient text-charcoal border-gold"
                              : "border-gold/15 text-foreground/60 hover:border-gold/40"
                          )}
                        >
                          {day.label.split(" ")[0]}
                          <div className="text-sm font-display mt-1">{day.label.split(" ")[2]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="animate-fade-in">
                      <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mb-3">
                        Select a Time
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "p-2 text-center border text-xs font-body transition-all",
                              selectedTime === time
                                ? "gold-gradient text-charcoal border-gold"
                                : "border-gold/15 text-foreground/60 hover:border-gold/40"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <button
                      onClick={() => setBookingStep("confirm")}
                      className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity animate-fade-in flex items-center justify-center gap-2"
                    >
                      Confirm Booking
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                <div className="glass-panel p-8 rounded-lg text-center animate-scale-in">
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl text-foreground mb-2">Booking Requested</h3>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {nextDays.find((d) => d.value === selectedDate)?.label} at {selectedTime}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    Marcus will confirm your appointment within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setBookingStep("select");
                      setSelectedDate("");
                      setSelectedTime("");
                    }}
                    className="mt-4 text-xs text-gold/70 hover:text-gold transition-colors font-body tracking-wide-luxe uppercase"
                  >
                    Book Another Time
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Right: Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-panel p-8 rounded-lg">
              <h2 className="font-display text-xl text-foreground mb-6">
                Direct Contact
              </h2>
              <div className="space-y-5">
                <ContactRow icon={Mail} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
                <ContactRow icon={Phone} label="Phone" value={contactInfo.phone} />
                <ContactRow icon={MapPin} label="Office" value={contactInfo.address} />
                <ContactRow icon={Clock} label="Hours" value={contactInfo.officeHours} />
              </div>

              <div className="luxury-divider my-6" />

              <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mb-4">
                Connect Privately
              </div>
              <div className="flex items-center gap-3">
                <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:border-gold hover:text-gold transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <span className="text-xs text-muted-foreground font-body ml-2">
                  {contactInfo.social.instagram}
                </span>
              </div>
            </div>

            {/* Map Embed */}
            <div className="glass-panel rounded-lg overflow-hidden">
              <div className="relative aspect-[4/3] bg-charcoal-lighter">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(197,165,114,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,114,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold/40 mx-auto mb-3" />
                    <p className="font-display text-lg text-foreground/60">{contactInfo.address}</p>
                    <p className="text-xs text-muted-foreground font-body mt-2">Interactive Map · Monteverde Bay</p>
                  </div>
                </div>
                {/* Decorative pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-gold rounded-full border-2 border-charcoal shadow-lg animate-pulse-gold" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-foreground font-body">Marcus Hale | Private Estates</div>
                  <div className="text-xs text-muted-foreground font-body">{contactInfo.address}</div>
                </div>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-gold tracking-wide-luxe uppercase font-body hover:gap-3 transition-all flex items-center gap-2"
                >
                  Directions <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GDPR Notice */}
            <div className="glass-panel p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <ShieldIcon className="w-5 h-5 text-gold/60 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-sm text-gold tracking-wide-luxe uppercase mb-2">
                    Privacy & GDPR
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    Your privacy is paramount. All communications are encrypted and confidential. We comply with GDPR and never share your information with third parties. You may request deletion of your data at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-gold" />
      </div>
      <div>
        <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body">{label}</div>
        <div className="text-sm text-foreground/80 font-body">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a> : content;
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

