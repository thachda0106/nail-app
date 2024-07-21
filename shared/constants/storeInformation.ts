import type { Metadata } from "next";
import { TIME_WORKING } from "./calendar";

export const STORE_INFORMATION = {
  Location: {
    name: "Floral Crush Beauty",
    address: "4093 rue principale, Tracadie, NB, Canada, New Brunswick",
    description:
      "Enjoy personalized treatments and meticulous care designed to leave you feeling rejuvenated and beautiful.",
  },
  Contacts: {
    phoneNumber: "+1 506-210-4191",
    email: "floral_crush_beauty@gmail.com",
  },
  OpeningHours: TIME_WORKING.map((item) => `${item.label}: ${item.value}`),
  Socials: {
    Facebook: "https://web.facebook.com/profile.php?id=61561852982077",
    Instagram: "https://web.facebook.com/profile.php?id=61561852982077",
    Twitter: "https://web.facebook.com/profile.php?id=61561852982077",
  },
};

export const META_DATA: Metadata = {
  title: STORE_INFORMATION.Location.name,
  description: STORE_INFORMATION.Location.description,
  keywords:
    "Floral Crush Beauty, manicure, hand care, nail care, premium services, beauty treatments, rejuvenation",
  authors: { name: STORE_INFORMATION.Location.name },
  openGraph: {
    title: STORE_INFORMATION.Location.name,
    type: "website",
    url: "https://nail-app.thachda0106.com",
    images: "https://nail-app.thachda0106.com/assets/images/logo-black.png",
    description: STORE_INFORMATION.Location.description,
  },
};
