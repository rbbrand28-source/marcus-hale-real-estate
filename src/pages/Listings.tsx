import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Map as MapIcon, LayoutGrid, ChevronDown, X, SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties, locations, propertyTypes, allAmenities } from "@/data/content";
import { cn } from "@/lib/utils";

type SortOption = "price-desc" | "price-asc" | "newest" | "largest";

export default function Listings() {
  const [searchParams] = useSearchParams();
  const [view, setView] = useState<"grid" | "map">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [sort, setSort] = useState<SortOption>("price-desc");

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    propertyType: searchParams.get("type") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    amenities: searchParams.get("amenities")?.split(",").filter(Boolean) || [],
    search: "",
    offMarketOnly: false,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      location: searchParams.get("location") || "",
      propertyType: searchParams.get("type") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      amenities: searchParams.get("amenities")?.split(",").filter(Boolean) || [],
    }));
  }, [searchParams]);

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (filters.location) result = result.filter((p) => p.location === filters.location);
    if (filters.propertyType) result = result.filter((p) => p.type === filters.propertyType);
    if (filters.minPrice) result = result.filter((p) => p.price >= parseInt(filters.minPrice));
    if (filters.maxPrice) result = result.filter((p) => p.price <= parseInt(filters.maxPrice));
    if (filters.offMarketOnly) result = result.filter((p) => p.offMarket);
    if (filters.amenities.length) {
      result = result.filter((p) =>
        filters.amenities.every((a) => p.amenities.includes(a))
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        result.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      case "largest":
        result.sort((a, b) => b.sqm - a.sqm);
        break;
      default:
        result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, sort]);

  const toggleAmenity = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      amenities: [],
      search: "",
      offMarketOnly: false,
    });
  };

  const activeFilterCount =
    (filters.location ? 1 : 0) +
    (filters.propertyType ? 1 : 0) +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    filters.amenities.length +
    (filters.offMarketOnly ? 1 : 0);

  return (
    <div className="bg-charcoal min-h-screen pt-24">
      {/* Page Header */}
      <section className="relative py-16 border-b border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gold/70 text-xs tracking-luxe uppercase font-body mb-4">
            Curated Portfolio
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Exclusive Listings
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A curated selection of extraordinary estates. Many of our finest properties are available exclusively through private consultation.
          </p>
        </div>
      </section>

      {/* Search & Sort Bar */}
      <section className="sticky top-16 z-30 bg-charcoal/95 backdrop-blur-xl border-b border-gold/10 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                placeholder="Search by name, location, or feature..."
                className="w-full bg-charcoal-lighter border border-gold/15 pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors font-body"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-charcoal-lighter border border-gold/15 pl-4 pr-10 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors font-body cursor-pointer"
              >
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="newest">Newest</option>
                <option value="largest">Largest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
            </div>

            {/* View toggle */}
            <div className="flex border border-gold/15 rounded-sm overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={cn(
                  "px-4 py-3 transition-colors",
                  view === "grid" ? "bg-gold/15 text-gold" : "text-foreground/60 hover:text-gold"
                )}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("map")}
                className={cn(
                  "px-4 py-3 transition-colors border-l border-gold/15",
                  view === "map" ? "bg-gold/15 text-gold" : "text-foreground/60 hover:text-gold"
                )}
                aria-label="Map view"
              >
                <MapIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 border font-body text-sm tracking-wide-luxe uppercase transition-colors",
                showFilters || activeFilterCount > 0
                  ? "border-gold/40 text-gold"
                  : "border-gold/15 text-foreground/60 hover:text-gold"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-gold text-charcoal text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="w-72 flex-shrink-0 hidden lg:block animate-fade-in">
              <div className="sticky top-40 glass-panel p-6 rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-foreground">Refine</h3>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gold/70 hover:text-gold transition-colors font-body flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Clear
                    </button>
                  )}
                </div>

                <div className="luxury-divider" />

                {/* Location */}
                <div>
                  <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-3">Location</label>
                  <div className="space-y-2">
                    {locations.map((loc) => (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="location"
                          checked={filters.location === loc}
                          onChange={() => setFilters({ ...filters, location: loc })}
                          className="accent-gold w-3.5 h-3.5"
                        />
                        <span className={cn("text-sm font-body transition-colors", filters.location === loc ? "text-gold" : "text-foreground/60 group-hover:text-gold")}>
                          {loc}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="location"
                        checked={filters.location === ""}
                        onChange={() => setFilters({ ...filters, location: "" })}
                        className="accent-gold w-3.5 h-3.5"
                      />
                      <span className={cn("text-sm font-body", filters.location === "" ? "text-gold" : "text-foreground/60 group-hover:text-gold")}>
                        All Locations
                      </span>
                    </label>
                  </div>
                </div>

                <div className="luxury-divider" />

                {/* Property Type */}
                <div>
                  <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-3">Property Type</label>
                  <div className="space-y-2">
                    {propertyTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={filters.propertyType === type}
                          onChange={() => setFilters({ ...filters, propertyType: type })}
                          className="accent-gold w-3.5 h-3.5"
                        />
                        <span className={cn("text-sm font-body transition-colors", filters.propertyType === type ? "text-gold" : "text-foreground/60 group-hover:text-gold")}>
                          {type}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="propertyType"
                        checked={filters.propertyType === ""}
                        onChange={() => setFilters({ ...filters, propertyType: "" })}
                        className="accent-gold w-3.5 h-3.5"
                      />
                      <span className="text-sm font-body text-foreground/60 group-hover:text-gold">All Types</span>
                    </label>
                  </div>
                </div>

                <div className="luxury-divider" />

                {/* Price Range */}
                <div>
                  <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-3">Price Range</label>
                  <div className="space-y-3">
                    <select
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-full bg-charcoal-lighter border border-gold/15 px-3 py-2.5 text-sm text-foreground focus:border-gold/50 focus:outline-none font-body"
                    >
                      <option value="">No Min</option>
                      <option value="10000000">€10M</option>
                      <option value="15000000">€15M</option>
                      <option value="20000000">€20M</option>
                      <option value="30000000">€30M</option>
                      <option value="40000000">€40M</option>
                    </select>
                    <select
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full bg-charcoal-lighter border border-gold/15 px-3 py-2.5 text-sm text-foreground focus:border-gold/50 focus:outline-none font-body"
                    >
                      <option value="">No Max</option>
                      <option value="20000000">€20M</option>
                      <option value="30000000">€30M</option>
                      <option value="40000000">€40M</option>
                      <option value="50000000">€50M+</option>
                    </select>
                  </div>
                </div>

                <div className="luxury-divider" />

                {/* Off Market */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.offMarketOnly}
                      onChange={(e) => setFilters({ ...filters, offMarketOnly: e.target.checked })}
                      className="accent-gold w-4 h-4"
                    />
                    <span className="text-sm font-body text-foreground/80">Off-Market Only</span>
                  </label>
                </div>

                <div className="luxury-divider" />

                {/* Amenities */}
                <div>
                  <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-3">Amenities</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                    {allAmenities.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="accent-gold w-3.5 h-3.5"
                        />
                        <span className={cn("text-xs font-body transition-colors", filters.amenities.includes(amenity) ? "text-gold" : "text-foreground/60 group-hover:text-gold")}>
                          {amenity}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Results */}
          <div className="flex-1">
            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground font-body">
                <span className="text-gold font-semibold">{filteredProperties.length}</span> {filteredProperties.length === 1 ? "property" : "properties"} found
              </p>
            </div>

            {view === "grid" ? (
              filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProperties.map((property, i) => (
                    <PropertyCard key={property.id} property={property} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <p className="font-display text-2xl text-foreground mb-4">No properties match your criteria</p>
                  <p className="text-sm text-muted-foreground font-body mb-6">Marcus may have off-market opportunities that match. Consider a private consultation.</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal transition-all font-body text-sm tracking-wide-luxe uppercase"
                  >
                    Clear Filters
                  </button>
                </div>
              )
            ) : (
              /* Map View (simplified placeholder) */
              <div className="relative aspect-[16/10] bg-charcoal-lighter border border-gold/10 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(rgba(197,165,114,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,114,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-12 h-12 text-gold/30 mx-auto mb-4" />
                    <p className="font-display text-xl text-foreground/60">Interactive Map View</p>
                    <p className="text-sm text-muted-foreground font-body mt-2">Full map integration with MLS/IDX data</p>
                  </div>
                </div>
                {filteredProperties.map((p, i) => (
                  <div
                    key={p.id}
                    className="absolute group"
                    style={{
                      left: `${20 + (i * 12) % 70}%`,
                      top: `${25 + (i * 18) % 50}%`,
                    }}
                  >
                    <div className="w-4 h-4 bg-gold rounded-full border-2 border-charcoal shadow-lg animate-pulse-gold group-hover:scale-150 transition-transform" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap glass-panel px-3 py-2 rounded pointer-events-none">
                      <div className="text-gold text-xs font-display">{p.priceDisplay}</div>
                      <div className="text-foreground/70 text-[10px] font-body">{p.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
          }

