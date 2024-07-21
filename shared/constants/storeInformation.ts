import { TIME_WORKING } from "./calendar";

export const STORE_INFORMATION = {
  Location: {
    name: "Floral Crush Beauty",
    address: "4093 rue principale, Tracadie, NB, Canada, New Brunswick",
    description: 'Enjoy personalized treatments and meticulous care designed to leave you feeling rejuvenated and beautiful.',
  },
  Contacts: {
    phoneNumber: "+84906303704",
    email: "thachda010600@gmail.com",
  },
  OpeningHours: TIME_WORKING.map((item) => `${item.label}: ${item.value}`),
  Socials: {
    Facebook: "facebook.com",
    Instagram: "instagram.com",
    Twitter: "twitter.com",
  },
};


export const META_DATA =  { 
  title: STORE_INFORMATION.Location.name,
  description: STORE_INFORMATION.Location.description,
  keywords: 'Floral Crush Beauty, manicure, hand care, nail care, premium services, beauty treatments, rejuvenation',
  author: STORE_INFORMATION.Location.name,
  openGraph: {
    title: STORE_INFORMATION.Location.name,
    type: 'website',
    url: 'https://nail-app.thachda0106.com',
    image: 'https://nail-app.thachda0106.com/assets/images/logo-black.png',
    description: STORE_INFORMATION.Location.description,
  }
};
