import { PRICES } from "./services";

export const PLACE_HOLDER_BOOKING = {
  FIRST_NAME: "First Name *",
  LAST_NAME: "Last Name *",
  EMAIL: "Email *",
  PHONE_NUMBER: "Phone Number *",
  SERVICES: "Select Services",
  STAFF_NAME: "Select Staff",
  TIME_BOOKING: "Appointment Date *",
};

export const SERVICES = PRICES.map((item) =>
  item.services.map((service) => service.label)
).flat();

export const STAFFS = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const MESSAGE_BOOKING_SUCCESSFULLY =
  "Booking successfully, please check your email !";
export const MESSAGE_BOOKING_FAILED =
  "Booking failed, please try again later !";
