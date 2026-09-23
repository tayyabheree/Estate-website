import type { ListingStatus } from "@/data/listings";
const labels:Record<ListingStatus,string>={sale:"FOR SALE",lease:"FOR LEASE",sold:"SOLD"};
export function StatusBadge({status}:{status:ListingStatus}){const danger=status==="sold"||status==="lease";return <span className={"absolute left-4 top-4 z-10 rounded-[2px] px-3 py-1 text-[11px] font-bold tracking-[.12em] text-white "+(danger?"bg-[#7A1F26]":"bg-navy")}>{labels[status]}</span>;}
