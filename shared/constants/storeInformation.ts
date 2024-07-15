import { TIME_WORKING } from "./calendar";

export const STORE_INFORMATION = {
  Location: {
    name: "Nail studio ABC",
    address: "Los Angeles, 8721 M Central Avenue, CA 9003",
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
