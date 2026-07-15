import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "bot" | "user";
  text: string;
}

const botResponses = [
  "Thank you for your interest. Marcus personally reviews all inquiries. Could you share what type of property you're considering?",
  "That's a wonderful area of interest. I can arrange a private consultation with Marcus to discuss properties matching your criteria. Would you prefer morning or afternoon?",
  "Many of our finest properties are off-market. Marcus can provide access once a brief qualification is complete. Shall I connect you directly?",
  "Excellent. Marcus will reach out to you privately within 24 hours. Your discretion is our highest priority.",
  "For properties in that range, Marcus typically curates 3-5 private viewings. I'll note your interest and he'll be in touch personally.",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Welcome to Marcus Hale Private Estates. I'm Marcus's AI assistant. How may I help you discover extraordinary properties today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: "user", text: input.trim() };
    const botMessage: Message = {
      role: "bot",
      text: botResponses[responseIndex % botResponses.length],
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setResponseIndex((prev) => prev + 1);

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-charcoal shadow-2xl transition-all duration-300 hover:scale-110",
          open && "rotate-90"
        )}
        aria-label="Open chat"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 animate-scale-in origin-bottom-right">
          <div className="glass-panel rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-charcoal/80 px-5 py-4 border-b border-gold/15 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-charcoal" />
              </div>
              <div>
                <div className="font-display text-foreground text-sm">Ask Marcus AI</div>
                <div className="text-[10px] text-gold/70 tracking-wide-luxe uppercase font-body">
                  Luxury Property Concierge
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-light animate-pulse" />
                <span className="text-[10px] text-muted-foreground font-body">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-charcoal/60 max-h-80 overflow-y-auto scrollbar-hide px-5 py-4 space-y-4 min-h-[200px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex animate-fade-in-up",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] px-4 py-2.5 text-sm font-body leading-relaxed rounded-lg",
                      msg.role === "user"
                        ? "gold-gradient text-charcoal"
                        : "bg-charcoal-lighter text-foreground/90 border border-gold/10"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="bg-charcoal/80 border-t border-gold/15 px-4 py-3 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about luxury properties..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-body"
              />
              <button
                onClick={sendMessage}
                className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center text-charcoal hover:opacity-90 transition-opacity flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

