export const site = {
  nav: [
    ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
    ["Properties", "#properties"], ["Offers", "#offers"], ["Contact", "#contact"]
  ],
  contact: {
    phones: ["0470 378 505", "0451 272 257"],
    emails: ["navin@woodridgere.com.au", "yogesh@woodridgere.com.au"],
    address: "11 Hyams Way, Truganina VIC 3029",
    locality: "Truganina VIC",
    openingHours: "TODO: CLIENT TO CONFIRM"
  },
  principals: ["Navin Chugh", "Yogesh Bhatia"],
  services: [
    { title: "Sales", image: "/images/service-sales.jpg", description: "Clear advice, careful presentation and hands-on campaign management for residential property sales.", link: "View Sales →", href: "#properties" },
    { title: "Leasing & Property Management", image: "/images/service-leasing.jpg", description: "Tenant selection, leasing and day-to-day management with direct principal oversight.", link: "View Leasing →", href: "#offers" },
    { title: "New Homes & House and Land", image: "/images/service-newhomes.jpg", description: "Practical guidance on new builds and house-and-land options across Melbourne growth areas.", link: "Explore New Homes →", href: "#contact" },
    { title: "Investment & Project Management", image: "/images/service-invest.jpg", description: "Support from acquisition and finance coordination through construction, maintenance and delivery.", link: "Discuss Investment →", href: "#contact" }
  ],
  trustPoints: [
    "Sales and leasing under one roof",
    "Two principals you deal with directly",
    "Finance to construction project management",
    "Melbourne west local knowledge"
  ],
  stats: [
    { label: "CLIENT TO CONFIRM", value: "" },
    { label: "CLIENT TO CONFIRM", value: "" }
  ],
  offers: [
    { title: "Free conveyancing when you sell with WoodRidge", terms: "Available on eligible sales campaigns. Full terms to be confirmed.", validUntil: "2026-12-31" },
    { title: "Leasing fee 4% + GST for your first 12 months", terms: "Available for eligible new management appointments. Full terms to be confirmed.", validUntil: "2026-12-31" }
  ]
} as const;
