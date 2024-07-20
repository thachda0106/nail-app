"use client";

import { Resolver, useForm } from "react-hook-form";
import { BookingSchema, initialValue } from "@/shared/schema/booking.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBookingForm } from "../types/bookingInfo";
import { ENDPOINTS } from "../constants/endpoints";
import { Fetcher } from "../helpers/fetch";
import { toast } from "react-toastify";
import {
  MESSAGE_BOOKING_FAILED,
  MESSAGE_BOOKING_SUCCESSFULLY,
} from "../constants/booking";

const useBooking = () => {
  const { control, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: initialValue,
    resolver: yupResolver(BookingSchema) as Resolver<IBookingForm>,
  });

  const { isValid, isSubmitting } = formState;

  const onSubmit = async (data: IBookingForm) => {
    try {
      await Fetcher.post(ENDPOINTS.Api.Booking, JSON.stringify(data));

      toast.success(MESSAGE_BOOKING_SUCCESSFULLY);
      reset();
    } catch (error: any) {
      toast.error(error?.response?.message || MESSAGE_BOOKING_FAILED);
    }
  };

  return {
    control,
    isValid,
    onSubmit,
    handleSubmit,
    isSubmitting,
  };
};

export default useBooking;
