"use client";
import type { ListingStatus } from "@/data/listings";
const tabs:[ListingStatus,string][]= [["sale","For Sale"],["lease","For Lease"],["sold","Sold"]];
export function Tabs({value,onChange}:{value:ListingStatus;onChange:(value:ListingStatus)=>void}){
 return <div role="tablist" aria-label="Property status" className="flex gap-1 border-b border-line">
  {tabs.map(([key,label])=><button key={key} type="button" role="tab" aria-selected={value===key} onClick={()=>onChange(key)} className={"min-h-11 border-b-2 px-4 text-sm font-bold "+(value===key?"border-teal text-navy":"border-transparent text-muted hover:text-navy")}>{label}</button>)}
 </div>;
}
