export type ListingStatus = "sale" | "lease" | "sold";
export type Listing = {
  id: string; status: ListingStatus; address: string; suburb: string; price: string;
  beds?: number; baths?: number; cars?: number; type: string; image: string; isPlaceholder?: boolean;
};

const listings: Listing[] = [
  { id:"01",status:"sale",address:"11 Angaston Circuit",suburb:"Bacchus Marsh VIC",price:"$425,000",type:"Land",image:"/images/listing-01.jpg" },
  { id:"02",status:"sale",address:"28 Sample Street",suburb:"Truganina VIC",price:"Contact agent",beds:4,baths:2,cars:2,type:"House",image:"/images/listing-02.jpg",isPlaceholder:true },
  { id:"03",status:"lease",address:"7 Sample Avenue",suburb:"Tarneit VIC",price:"$560 per week",beds:3,baths:2,cars:1,type:"Townhouse",image:"/images/listing-03.jpg",isPlaceholder:true },
  { id:"04",status:"lease",address:"15 Sample Road",suburb:"Williams Landing VIC",price:"$620 per week",beds:4,baths:2,cars:2,type:"House",image:"/images/listing-04.jpg",isPlaceholder:true },
  { id:"05",status:"sold",address:"42 Sample Crescent",suburb:"Point Cook VIC",price:"Sold",beds:4,baths:2,cars:2,type:"House",image:"/images/listing-05.jpg",isPlaceholder:true },
  { id:"06",status:"sold",address:"9 Sample Lane",suburb:"Hoppers Crossing VIC",price:"Sold",beds:3,baths:1,cars:1,type:"House",image:"/images/listing-06.jpg",isPlaceholder:true }
];

export function getListings(status: ListingStatus): Listing[] {
  return listings.filter((listing) => listing.status === status);
}
