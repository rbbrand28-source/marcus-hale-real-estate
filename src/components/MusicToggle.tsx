import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a soft ambient tone using Web Audio API since we don't have an audio file
    if (playing) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filterNode = ctx.createBiquadFilter();

      oscillator.type = "sine";
      oscillator.frequency.value = 220;
      filterNode.type = "lowpass";
      filterNode.frequency.value = 400;
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2);

      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start();

      audioRef.current = { oscillator, ctx, gainNode } as any;

      // Slowly modulate frequency for ambient effect
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.1;
      lfoGain.gain.value = 20;
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();

      (audioRef.current as any).lfo = lfo;
    } else if (audioRef.current) {
      const { ctx, gainNode, oscillator, lfo } = audioRef.current as any;
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      setTimeout(() => {
        oscillator.stop();
        lfo.stop();
        ctx.close();
      }, 600);
    }

    return () => {
      if (audioRef.current) {
        try {
          const { ctx, oscillator, lfo } = audioRef.current as any;
          oscillator?.stop();
          lfo?.stop();
          ctx?.close();
        } catch (e) {
          // already closed
        }
      }
    };
  }, [playing]);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      <button
        onClick={() => {
          setPlaying(!playing);
          setShowHint(false);
        }}
        className={cn(
          "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 glass-panel hover:border-gold/40",
          playing && "border-gold/40 animate-pulse-gold"
        )}
        aria-label={playing ? "Mute ambient music" : "Play ambient music"}
      >
        {playing ? (
          <Volume2 className="w-4 h-4 text-gold" />
        ) : (
          <VolumeX className="w-4 h-4 text-gold/60" />
        )}
      </button>
      {showHint && !playing && (
        <div className="glass-panel px-3 py-2 rounded text-xs text-foreground/70 font-body whitespace-nowrap animate-fade-in">
          <Music className="w-3 h-3 inline mr-1 text-gold" />
          Ambient experience
        </div>
      )}
    </div>
  );
}

