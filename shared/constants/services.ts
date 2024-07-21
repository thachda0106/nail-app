import { EYESLASH_ID_HREF, MANICURE_ID_HREF, WAXING_ID_HREF } from "./common";

export const PRICES = [
  {
    type: "EYESLASH - NEW SET",
    href: EYESLASH_ID_HREF,
    services: [
      {
        label: "Classic new set",
        value: "$100",
      },
      {
        label: "Hybrid new set",
        value: "$120",
      },
      {
        label: "Volume new set",
        value: "$130",
      },
      {
        label: "Wipsy new set",
        value: "$135",
      },
    ],
  },
  {
    type: "EYESLASH - REFILL",
    services: [
      {
        label: "2 weeks",
        value: "$55",
      },
      {
        label: "3 weeks",
        value: "$65",
      },
      {
        label: "4 weeks",
        value: "$75",
      },
      {
        label: "Last removal",
        value: "$20",
      },
    ],
  },
  {
    type: "WAXING",
    href: WAXING_ID_HREF,
    services: [
      {
        label: "Eyebrows",
        value: "$12",
      },
      {
        label: "Eyebrows wax+tint",
        value: "$30",
      },
      {
        label: "Upper lips",
        value: "$8",
      },
      {
        label: "Chin",
        value: "$15",
      },
      {
        label: "Eyebrows+upper lips+chin",
        value: "$30",
      },
      {
        label: "Full face",
        value: "$40",
      },
      {
        label: "Under arms",
        value: "$20",
      },
      {
        label: "Half arms",
        value: "$40",
      },
      {
        label: "Full arms",
        value: "$55",
      },
      {
        label: "Full legs",
        value: "$60",
      },
      {
        label: "Half legs",
        value: "$45",
      },
      {
        label: "Bikini line",
        value: "$60",
      },
    ],
  },
  {
    type: "LASH LIFT - TINT",
    services: [
      {
        label: "Last lift",
        value: "$70",
      },
      {
        label: "Last tint",
        value: "$25",
      },
      {
        label: "Last lift and tint",
        value: "$100",
      },
      {
        label: "Brown lamination",
        value: "$60",
      },
    ],
  },
  {
    type: "NAILS SERVICES",
    services: [
      {
        label: "Acrylic/ UV gel new set",
        value: "$65",
      },
      {
        label: "Acrylic/ UV gel refill",
        value: "$55",
      },
      {
        label: "Biogel new set",
        value: "$75",
      },
      {
        label: "Nails removal",
        value: "$10-15",
      },
    ],
  },
  {
    type: "PEDICURE",
    services: [
      {
        label: "Regular pedicure",
        value: "$45",
      },
      {
        label: "Shellac pedicure",
        value: "$55",
      },
      {
        label: "Luxury pedicure",
        value: "$65",
      },
      {
        label: "Special pedicure",
        value: "$75",
      },
      {
        label: "Spa-Tacular pedicure",
        value: "$75",
      },
      {
        label: "Collagen pedicure",
        value: "$85",
      },
    ],
  },
  {
    type: "MANICURE",
    href: MANICURE_ID_HREF,
    services: [
      {
        label: "Regular manicure",
        value: "$30",
      },
      {
        label: "Shellac manicure",
        value: "$40",
      },
      {
        label: "Luxury manicure",
        value: "$50",
      },
      {
        label: "Shellac color change",
        value: "$30",
      },
      {
        label: "Regular color change",
        value: "$20",
      },
    ],
  },
  {
    type: "COMBO",
    services: [
      {
        label: "Regular mani-pedi",
        value: "$67",
      },
      {
        label: "Shellac mani-pedi",
        value: "$90",
      },
      {
        label: "Full-set and pedi",
        value: "$120",
      },
      {
        label: "Nails removal",
        value: "$110",
      },
    ],
  },
  {
    type: "DESIGN NAILS ART",
    services: [
      {
        label: "French tips",
        value: "+$10",
      },
      {
        label: "Ombre",
        value: "+15",
      },
      {
        label: "Chrome",
        value: "+15",
      },
      {
        label: "Cat eyes",
        value: "15",
      },
      {
        label: "Nails art",
        value: "+5",
      },
    ],
  },
  {
    type: "KIDS (11 UNDER)",
    description: "Free a cute design for kids",
    services: [
      {
        label: "Manicure regular/gel",
        value: "$20-30",
      },
      {
        label: "Pedicure regular/gel",
        value: "$30-41",
      },
      {
        label: "Combo mani+pedi regular",
        value: "$48",
      },
      {
        label: "Combo mani+pedi shellac",
        value: "$65",
      },
      {
        label: "Color change regular/shellac",
        value: "$15-20",
      },
    ],
  },
];
