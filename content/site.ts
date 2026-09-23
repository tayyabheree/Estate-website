export const site = {
  nav: [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Properties", "#properties"],
    ["Appraisal", "#appraisal"],
    ["Contact", "#contact"]
  ],
  contact: {
    phones: ["0470 378 505", "0451 272 257"],
    emails: ["navin@woodridgere.com.au", "yogesh@woodridgere.com.au"],
    address: "11 Hyams Way, Truganina VIC 3029",
    locality: "Truganina VIC"
  },
  principals: ["Navin Chugh", "Yogesh Bhatia"],
  services: [
    {
      title: "Residential Sales",
      image: "/images/service-sales.jpg",
      description:
        "Practical pricing, presentation and campaign management for homes and land across Melbourne's west.",
      link: "Discuss selling →",
      href: "#appraisal"
    },
    {
      title: "Leasing & Property Management",
      image: "/images/service-leasing.jpg",
      description:
        "Leasing, tenant care and day-to-day management with clear communication and direct oversight.",
      link: "Discuss management →",
      href: "#appraisal"
    },
    {
      title: "New Homes & House and Land",
      image: "/images/service-newhomes.jpg",
      description:
        "Guidance through new-home and house-and-land options in Melbourne's western growth corridors.",
      link: "Explore new homes →",
      href: "#contact"
    },
    {
      title: "Investment & Project Management",
      image: "/images/service-invest.jpg",
      description:
        "Support across acquisition, finance coordination, construction, maintenance and project delivery.",
      link: "Discuss investment →",
      href: "#contact"
    }
  ],
  trustPoints: [
    "Sales, leasing and management in one team",
    "Direct access to both principals",
    "Property advice from acquisition to completion",
    "Focused on Melbourne's western suburbs"
  ],
  offers: [
    {
      title: "Free conveyancing when you sell with WoodRidge",
      terms:
        "Ask our team about eligibility and the current terms for this seller offer."
    },
    {
      title: "Reduced leasing fee for new managements",
      terms:
        "Ask about the current 4% + GST introductory leasing offer for eligible new appointments."
    }
  ]
} as const;
