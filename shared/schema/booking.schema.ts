import * as yup from "yup";
import { phoneRegExp } from "../constants/regex";

export type BookingForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  services?: string;
  staff_name?: string;
  time_booking: string;
};

export const BookingSchema: yup.ObjectSchema<BookingForm> = yup.object().shape({
  first_name: yup.string().required("Please enter first name"),
  last_name: yup.string().required("Please enter last name"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Please enter a valid email address"),
  phone_number: yup
    .string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  services: yup.string().optional(),
  staff_name: yup.string().optional(),
  time_booking: yup.string().required("Please select date time booking"),
});

export const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  services: "",
  staff_name: "",
  time_booking: "",
};
