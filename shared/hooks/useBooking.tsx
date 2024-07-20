"use client";

import { Resolver, useForm } from "react-hook-form";
import {
  BookingSchema,
  initialValue,
} from "@/shared/schema/booking.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBookingForm } from "../types/bookingInfo";
import { ENDPOINTS } from "../constants/endpoints";
import { Fetcher } from "../helpers/fetch";

const useBooking = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: initialValue,
    resolver: yupResolver(BookingSchema) as Resolver<IBookingForm>,
  });

  const { isValid, isSubmitting } = formState;

  const onSubmit = async  (data: IBookingForm) => {
    try {
      const res = await Fetcher.post(ENDPOINTS.Api.Booking, JSON.stringify(data))

      alert('post success')
    } catch (error) {
      console.log(error);
    }
  }

  return {
    control,
    isValid,
    onSubmit,
    handleSubmit,
    isSubmitting,
  };
};

export default useBooking;
