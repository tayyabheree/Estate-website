export type Listing = {
  id: string;
  address: string;
  suburb: string;
  price: string;
  type: string;
  status: "For Sale";
};

const listings: Listing[] = [
  {
    id: "01",
    address: "11 Angaston Circuit",
    suburb: "Bacchus Marsh VIC",
    price: "$425,000",
    type: "Land",
    status: "For Sale"
  }
];

export function getListings(): Listing[] {
  return listings;
}
