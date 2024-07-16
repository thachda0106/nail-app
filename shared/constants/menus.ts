import {
  BANNER_ID_HREF,
  BOOKING_ID_HREF,
  CONTACT_ID_HREF,
  PRICE_ID_HREF,
} from "./common";

export const MENUS = [
  {
    name: "HOME",
    id: BANNER_ID_HREF,
  },
  {
    name: "OUR SERVICES",
    id: PRICE_ID_HREF,
  },
  {
    name: "CONTACT",
    id: CONTACT_ID_HREF,
  },
  {
    name: "BOOKING",
    id: BOOKING_ID_HREF,
    isLastMenu: true,
  },
];
