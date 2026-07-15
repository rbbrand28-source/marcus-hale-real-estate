import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, Video, Camera, Eye, Lock } from "lucide-react";
import type { Property } from "@/data/content";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <Link
      to={`/property/${property.slug}`}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="relative bg-charcoal-light overflow-hidden hover-lift cursor-pointer">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
          <img
            src={property.heroImage}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {property.offMarket && (
              <span className="px-3 py-1 bg-charcoal/80 backdrop-blur-sm border border-gold/40 text-gold text-[10px] tracking-luxe uppercase font-body flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                Off-Market
              </span>
            )}
            <span className="px-3 py-1 bg-charcoal/60 backdrop-blur-sm text-foreground/90 text-[10px] tracking-wide-luxe uppercase font-body">
              {property.type}
            </span>
          </div>

          {/* Tour icons */}
          <div className="absolute top-4 right-4 flex gap-2">
            {property.hasVirtualTour && (
              <span className="w-8 h-8 bg-charcoal/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gold/80" title="Virtual Tour Available">
                <Video className="w-3.5 h-3.5" />
              </span>
            )}
            {property.hasDroneFootage && (
              <span className="w-8 h-8 bg-charcoal/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gold/80" title="Drone Footage">
                <Camera className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          {/* Price overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-gold font-display text-xl text-shadow-lux">
              {property.priceDisplay}
            </div>
            <div className="flex items-center gap-1 text-foreground/70 text-xs font-body mt-0.5">
              <MapPin className="w-3 h-3" />
              {property.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-1">
            {property.subtitle}
          </p>

          {/* Specs */}
          <div className="flex items-center gap-5 text-xs text-foreground/60 font-body border-t border-gold/10 pt-4">
            <span className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-gold/60" />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-gold/60" />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize className="w-3.5 h-3.5 text-gold/60" />
              {property.sqm} sqm
            </span>
            <span className="ml-auto flex items-center gap-1 text-gold group-hover:gap-2 transition-all duration-300">
              <Eye className="w-3.5 h-3.5" />
              <span className="text-[10px] tracking-wide-luxe uppercase">View</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

