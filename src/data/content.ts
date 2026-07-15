export type PropertyType = 'Villa' | 'Penthouse' | 'Estate' | 'Mansion' | 'Chateau';

export type Location = 'Monteverde Bay' | 'Ridge Highlands' | 'Coastal Enclave';

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  priceDisplay: string;
  location: Location;
  address: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  lotSize: string;
  yearBuilt: number;
  featured: boolean;
  offMarket: boolean;
  hasVirtualTour: boolean;
  hasDroneFootage: boolean;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  amenities: string[];
  sustainability: string[];
  floorPlanName: string;
  neighborhood: {
    name: string;
    description: string;
    highlights: string[];
  };
  coordinates: { lat: number; lng: number };
  privateInfo: {
    passwordHint: string;
    documents: string[];
    qualificationRequirements: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientType: string;
  quote: string;
  fullStory: string;
  outcome: string;
  rating: number;
  hasVideo: boolean;
  propertyType: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}

export const locations: Location[] = ['Monteverde Bay', 'Ridge Highlands', 'Coastal Enclave'];
export const propertyTypes: PropertyType[] = ['Villa', 'Penthouse', 'Estate', 'Mansion', 'Chateau'];
export const allAmenities = [
  'Infinity Pool', 'Wine Cellar', 'Helipad', 'Smart Home', 'Ocean View',
  'Private Beach', 'Home Theater', 'Spa & Wellness', 'Tennis Court', 'Private Gym',
  'Staff Quarters', 'Underground Garage', 'Rooftop Terrace', 'Climate Cellar',
  'Private Dock', 'Solar Panels', 'Garden Estate', 'Security System', 'Elevator',
  'Library', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Guest House', 'Fountain Courtyard',
];

export const properties: Property[] = [
  {
    id: '1',
    slug: 'azure-horizon-villa',
    title: 'Azure Horizon Villa',
    subtitle: 'A waterfront masterpiece suspended between sky and sea',
    price: 45000000,
    priceDisplay: '€45,000,000',
    location: 'Coastal Enclave',
    address: '7 Cliffside Terrace, Coastal Enclave',
    type: 'Villa',
    bedrooms: 7,
    bathrooms: 9,
    sqm: 1450,
    lotSize: '2.4 hectares',
    yearBuilt: 2024,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1613492392455-1f1e6e5f1c3a?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1613492392455-1f1e6e5f1c3a?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
    ],
    description: 'A sculptural waterfront villa with panoramic ocean views, private beach access, and architectural significance that rivals the world\'s finest residences.',
    longDescription: 'Azure Horizon Villa is a triumph of contemporary architecture, where every line and surface is designed to frame the horizon. Spanning 1,450 square meters across three levels, the residence cascades down the cliffside in a series of cantilevered terraces that dissolve the boundary between interior and exterior. Floor-to-ceiling glass walls retract seamlessly, inviting the ocean breeze and golden light into every room. The infinity pool appears to merge with the sea beyond, creating an optical phenomenon that must be experienced to be understood. Designed by the acclaimed architect Soren Lindqvist, this is not merely a home — it is a meditation on the relationship between luxury and nature.',
    amenities: ['Infinity Pool', 'Ocean View', 'Private Beach', 'Wine Cellar', 'Smart Home', 'Home Theater', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Helipad', 'Rooftop Terrace', 'Private Dock'],
    sustainability: ['Solar Panels', 'Geothermal heating & cooling', 'Rainwater harvesting', 'Locally sourced stone & timber', 'LEED Platinum certified'],
    floorPlanName: 'Azure Horizon — Full Floor Plans',
    neighborhood: {
      name: 'Coastal Enclave',
      description: 'An ultra-private stretch of coastline reserved for fewer than thirty estates. The Coastal Enclave offers unparalleled seclusion with private beach access, a guarded single-entry road, and proximity to the Monteverde Bay Yacht Club.',
      highlights: ['Private beach access', '24/7 security patrol', 'Yacht Club membership eligible', '10 minutes to Monteverde Bay marina', 'Exclusive coastal restaurants nearby'],
    },
    coordinates: { lat: 42.4250, lng: 8.5630 },
    privateInfo: {
      passwordHint: 'Provided after NDA execution',
      documents: ['Full architectural plans', 'Structural engineering report', 'Appliance inventory', 'Staff retention options', 'Financing arrangements'],
      qualificationRequirements: 'Proof of funds or pre-approval letter required. NDA must be executed prior to private showing. Minimum qualification: €50M liquid assets verified.',
    },
  },
  {
    id: '2',
    slug: 'celeste-penthouse',
    title: 'Celeste Penthouse',
    subtitle: 'The crown jewel of Monteverde Bay\'s skyline',
    price: 28000000,
    priceDisplay: '€28,000,000',
    location: 'Monteverde Bay',
    address: '1 Marina Crest Tower, Monteverde Bay',
    type: 'Penthouse',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 680,
    lotSize: 'Full floor + rooftop terrace',
    yearBuilt: 2023,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600304550793-2c7f1c5e5c5e?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=1600&q=85',
      'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4f1c6e5b9d8c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A full-floor penthouse with 360-degree views, private rooftop terrace with plunge pool, and the finest finishes available in any residential property.',
    longDescription: 'Occupying the entire 42nd floor of the prestigious Marina Crest Tower, the Celeste Penthouse is a statement of arrival. The private elevator opens directly into a grand salon with double-height ceilings and unobstructed views of the bay, the marina, and the distant mountains. Italian marble floors flow throughout, while walls are clad in silk and hand-finished plaster. The rooftop terrace — accessible via a sculptural floating staircase — features a heated plunge pool, outdoor kitchen, and fire lounge. This is the most significant penthouse to become available in Monteverde Bay in over a decade.',
    amenities: ['Infinity Pool', 'Ocean View', 'Wine Cellar', 'Smart Home', 'Home Theater', 'Private Gym', 'Elevator', 'Climate Cellar', 'Rooftop Terrace', 'Security System', 'Chef\'s Kitchen', 'Butler\'s Pantry'],
    sustainability: ['Solar Panels', 'Triple-glazed thermal windows', 'Energy recovery ventilation', 'Green roof terrace', 'BREEAM Excellent certified'],
    floorPlanName: 'Celeste Penthouse — Floor Plans',
    neighborhood: {
      name: 'Marina Crest District',
      description: 'The most coveted address in Monteverde Bay, the Marina Crest District is home to only twelve ultra-luxury towers, each limited to a single residence per floor. Walking distance to the marina, fine dining, and the cultural quarter.',
      highlights: ['Private elevator access', 'Concierge & valet service', 'Walk to Marina & fine dining', 'Helipad access on tower roof', 'Cultural quarter 5 minutes away'],
    },
    coordinates: { lat: 42.4400, lng: 8.5800 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Floor plans & elevations', 'HOA financials', 'Appliance & finish schedule', 'Concierge service agreement', 'Parking & storage assignments'],
      qualificationRequirements: 'Proof of funds required. Building board approval necessary. Minimum qualification: €30M liquid assets verified with bank reference.',
    },
  },
  {
    id: '3',
    slug: 'highland-manor-estate',
    title: 'Highland Manor Estate',
    subtitle: 'A generational estate on the Ridge Highlands',
    price: 38000000,
    priceDisplay: '€38,000,000',
    location: 'Ridge Highlands',
    address: '42 Ridgecrest Road, Ridge Highlands',
    type: 'Estate',
    bedrooms: 9,
    bathrooms: 11,
    sqm: 2200,
    lotSize: '12 hectares',
    yearBuilt: 2021,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1604591172214-6f5a4e5c5e5e?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1604591172214-6f5a4e5c5e5e?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
    ],
    description: 'A sprawling 12-hectare estate with a main manor, guest house, equestrian facilities, and a championship tennis court set against mountain ridge views.',
    longDescription: 'Highland Manor Estate is a property of rare scale and ambition. The main manor, inspired by the great country houses of Europe, spans 2,200 square meters and has been meticulously restored with every modern convenience concealed behind hand-crafted period details. The estate includes a separate four-bedroom guest house, a professional equestrian center with stabling for eight horses, an all-weather tennis pavilion, and manicured gardens designed by the landscape architect Elise Moreau. A long private drive approaches through an avenue of century-old oaks, ensuring absolute privacy and a sense of theatrical arrival.',
    amenities: ['Tennis Court', 'Wine Cellar', 'Smart Home', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Underground Garage', 'Garden Estate', 'Security System', 'Library', 'Guest House', 'Fountain Courtyard', 'Helipad'],
    sustainability: ['Solar Panels', 'Ground-source heat pump', 'Natural spring water supply', 'Organic gardens & orchard', 'Biodiversity-certified grounds'],
    floorPlanName: 'Highland Manor — Complete Estate Plans',
    neighborhood: {
      name: 'Ridge Highlands',
      description: 'The Ridge Highlands is an exclusive hillside community of large-lot estates, each with minimum 8-hectare parcels. Known for its privacy, equestrian trails, and panoramic views of the valley below.',
      highlights: ['Equestrian trail network', 'Private gated access', 'Panoramic ridge views', '15 minutes to Monteverde Bay', 'Helipad permitted'],
    },
    coordinates: { lat: 42.4600, lng: 8.5500 },
    privateInfo: {
      passwordHint: 'Provided after NDA',
      documents: ['Estate survey & boundaries', 'Equestrian facility plans', 'Staff contracts', 'Garden maintenance records', 'Historical restoration documentation'],
      qualificationRequirements: 'Proof of funds required. NDA executed prior to viewing. Minimum qualification: €50M liquid assets. Estate viewing by appointment only.',
    },
  },
  {
    id: '4',
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    subtitle: 'A modernist chateau bathed in golden light',
    price: 32000000,
    priceDisplay: '€32,000,000',
    location: 'Monteverde Bay',
    address: '18 Lumière Lane, Monteverde Bay',
    type: 'Chateau',
    bedrooms: 8,
    bathrooms: 10,
    sqm: 1850,
    lotSize: '5 hectares',
    yearBuilt: 2022,
    featured: true,
    offMarket: true,
    hasVirtualTour: true,
    hasDroneFootage: false,
    heroImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
    ],
    description: 'An off-market modernist chateau with a glass atrium, formal gardens, and a climate-controlled wine cellar holding 3,000 bottles.',
    longDescription: 'Maison Lumière is a private off-market offering, available exclusively through Marcus Hale\'s network. The residence is a bold reinterpretation of the French chateau form, rendered in limestone, glass, and bronze. The central atrium — a five-story glass rotunda — floods the interior with natural light throughout the day, creating an ever-changing play of shadow and warmth. The formal gardens, designed in the classical French style, extend over 3 hectares and include a labyrinth, a rose garden with 200 varieties, and a reflecting pool that mirrors the chateau\'s façade.',
    amenities: ['Wine Cellar', 'Smart Home', 'Home Theater', 'Spa & Wellness', 'Private Gym', 'Staff Quarters', 'Garden Estate', 'Security System', 'Library', 'Chef\'s Kitchen', 'Butler\'s Pantry', 'Fountain Courtyard', 'Elevator'],
    sustainability: ['Solar Panels', 'Passive solar design', 'Rainwater collection', 'Heritage limestone construction', 'Organic garden & vineyard'],
    floorPlanName: 'Maison Lumière — Architectural Plans',
    neighborhood: {
      name: 'Old Monteverde',
      description: 'The historic heart of Monteverde Bay, characterized by tree-lined lanes, heritage estates, and proximity to the cultural district, museums, and the Grand Opera House.',
      highlights: ['Walk to Grand Opera House', 'Heritage district protection', 'Private lane access', '5 minutes to fine dining', 'Cultural institutions nearby'],
    },
    coordinates: { lat: 42.4350, lng: 8.5750 },
    privateInfo: {
      passwordHint: 'Off-market — NDA required',
      documents: ['Architectural drawings', 'Wine cellar inventory', 'Garden & landscape plans', 'Staff arrangements', 'Heritage compliance records'],
      qualificationRequirements: 'Strictly off-market. NDA mandatory. Proof of funds €40M minimum. Introduction via existing client referral or Marcus Hale direct screening.',
    },
  },
  {
    id: '5',
    slug: 'the-pavilion-residence',
    title: 'The Pavilion Residence',
    subtitle: 'Architectural minimalism meets coastal serenity',
    price: 18500000,
    priceDisplay: '€18,500,000',
    location: 'Coastal Enclave',
    address: '23 Serenity Cove, Coastal Enclave',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 720,
    lotSize: '1.8 hectares',
    yearBuilt: 2023,
    featured: true,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-748fe5b5a9d8?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A minimalist villa defined by clean lines, a 25-meter lap pool, and seamless indoor-outdoor living spaces overlooking a private cove.',
    longDescription: 'The Pavilion Residence is an exercise in restraint and precision. Every element has been considered, every material selected for its honesty and longevity. The home unfolds as a series of pavilions connected by covered walkways, each oriented to capture specific views and light conditions. The great room — a single 180-square-meter space — opens entirely to the pool deck and ocean beyond through a 12-meter sliding glass wall. Materials are deliberately limited: travertine, white oak, blackened steel, and hand-troweled plaster. The result is a home that feels both monumental and intimate.',
    amenities: ['Infinity Pool', 'Ocean View', 'Smart Home', 'Wine Cellar', 'Private Gym', 'Rooftop Terrace', 'Security System', 'Chef\'s Kitchen', 'Solar Panels'],
    sustainability: ['Solar Panels', 'Cross-ventilation design', 'Recycled aggregate concrete', 'Native drought-tolerant landscaping', 'Net-zero energy capable'],
    floorPlanName: 'Pavilion Residence — Plans',
    neighborhood: {
      name: 'Serenity Cove',
      description: 'A secluded cove within the Coastal Enclave, home to ten architecturally significant villas. Shared private path to a sheltered beach with crystal-clear water.',
      highlights: ['Private cove beach', 'Architecturally significant community', 'Walking trails', '8 minutes to Monteverde Bay', 'Protected marine reserve adjacent'],
    },
    coordinates: { lat: 42.4280, lng: 8.5610 },
    privateInfo: {
      passwordHint: 'Provided after qualification',
      documents: ['Architectural plans', 'Material specifications', 'Smart home system docs', 'Pool & landscape plans', 'Energy performance certificate'],
      qualificationRequirements: 'Proof of funds or pre-approval required. Minimum qualification: €25M liquid assets.',
    },
  },
  {
    id: '6',
    slug: 'meridian-tower-mansion',
    title: 'Meridian Tower Mansion',
    subtitle: 'A vertical mansion with private sky garden',
    price: 22500000,
    priceDisplay: '€22,500,000',
    location: 'Monteverde Bay',
    address: '88 Meridian Boulevard, Monteverde Bay',
    type: 'Mansion',
    bedrooms: 6,
    bathrooms: 8,
    sqm: 950,
    lotSize: 'Two full floors',
    yearBuilt: 2024,
    featured: false,
    offMarket: false,
    hasVirtualTour: true,
    hasDroneFootage: true,
    heroImage: 'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1920&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600565753376-42c2a858c78c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600598547878-4976f5e9e5c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=85',
    ],
    description: 'A two-floor vertical mansion in the new Meridian Tower, featuring a private internal elevator, sky garden, and dual-kitchen configuration.',
    longDescription: 'The Meridian Tower Mansion redefines high-rise living by combining the space and privacy of a ground-level mansion with the security and views of a tower residence. Occupying the 35th and 36th floors, the home is connected by a private glass elevator and internal staircase. The lower floor is dedicated to entertaining — a grand salon, formal dining room, and chef\'s kitchen with 
