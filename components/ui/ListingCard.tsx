import Image from "next/image";
import { BedDouble, Bath, Car } from "lucide-react";
import type { Listing } from "@/data/listings";
import { StatusBadge } from "./StatusBadge";
const blur="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PSc4Jz48cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nOCcgZmlsbD0nI2U3ZTllYycgLz48L3N2Zz4=";
export function ListingCard({listing}:{listing:Listing}){
 return <article className="group relative min-w-[87%] snap-start border border-line bg-white transition-shadow hover:shadow-[0_12px_30px_rgba(11,31,58,.08)] sm:min-w-[48%] lg:min-w-[calc((100%-48px)/3)]">
  <div className="relative aspect-[3/2] overflow-hidden bg-paper"><Image src={listing.image} alt={listing.address+", "+listing.suburb} fill sizes="(max-width:768px) 87vw,(max-width:1024px) 48vw,380px" className="object-cover" placeholder="blur" blurDataURL={blur}/><StatusBadge status={listing.status}/>{process.env.NODE_ENV==="development"&&listing.isPlaceholder&&<span className="absolute right-3 top-3 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">Sample</span>}</div>
  <div className="p-5"><h3 className="font-serif text-2xl leading-tight text-navy">{listing.address}</h3><p className="mt-1 text-sm text-muted">{listing.suburb}</p><p className="mt-4 font-bold text-ink">{listing.price}</p>
  {(listing.beds||listing.baths||listing.cars)&&<div className="mt-4 flex gap-5 border-t border-line pt-4 text-sm text-muted">{listing.beds&&<span className="flex items-center gap-1.5"><BedDouble size={17}/>{listing.beds}</span>}{listing.baths&&<span className="flex items-center gap-1.5"><Bath size={17}/>{listing.baths}</span>}{listing.cars&&<span className="flex items-center gap-1.5"><Car size={17}/>{listing.cars}</span>}</div>}
  <p className="mt-3 text-xs font-bold uppercase tracking-[.12em] text-muted">{listing.type}</p></div>
 </article>;
}
