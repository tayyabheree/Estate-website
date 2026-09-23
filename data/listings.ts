export type PropertyActivity = {
  id: string;
  address: string;
  suburb: string;
  price: string;
  type: string;
  status: "For Sale" | "For Lease" | "Sold" | "Leased";
  beds?: number;
  baths?: number;
  cars?: number;
};

const activity: PropertyActivity[] = [
  {
    id: "01",
    address: "11 Angaston Circuit",
    suburb: "Bacchus Marsh VIC",
    price: "$425,000",
    type: "Land",
    status: "For Sale"
  },
  {
    id: "02",
    address: "17 Oasis Ave",
    suburb: "Mickleham VIC 3064",
    price: "$590 per week",
    type: "House",
    status: "For Lease",
    beds: 4,
    baths: 2
  },
  {
    id: "03",
    address: "10 Cousens Street",
    suburb: "Tarneit VIC 3029",
    price: "$560,000",
    type: "House",
    status: "Sold",
    beds: 3,
    baths: 2
  },
  {
    id: "04",
    address: "98 Waterhaven Boulevard",
    suburb: "Point Cook VIC 3030",
    price: "$540 per week",
    type: "House",
    status: "Leased",
    beds: 3,
    baths: 2,
    cars: 1
  }
];

export function getPropertyActivity(): PropertyActivity[] {
  return activity;
}
