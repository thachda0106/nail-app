"use client";

import React from "react";
import { Resolver, useForm } from "react-hook-form";
import {
  BookingForm,
  BookingSchema,
  initialValue,
} from "@/shared/schema/booking.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const useBooking = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: initialValue,
    resolver: yupResolver(BookingSchema) as Resolver<BookingForm>,
  });

  const { isValid } = formState;

  const onSubmit = (data: BookingForm) => {
    console.log("submit", data);
  };

  return {
    control,
    isValid,
    onSubmit,
    handleSubmit,
  };
};

export default useBooking;
