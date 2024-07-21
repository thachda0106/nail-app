import { TIME_WORKING } from "./calendar";

export const STORE_INFORMATION = {
  Location: {
    name: "Floral Crush Beauty",
    address: "4093 rue principale, Tracadie- Sheila, NB, E1X 1B8",
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
