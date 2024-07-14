"use client";

import { PLACE_HOLDER_BOOKING } from "@/shared/constants/booking";
import useBooking from "@/shared/hooks/useBooking";
import { Box, TextField, Stack, Button } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormBooking = () => {
  const { control, handleSubmit, onSubmit, isValid } = useBooking();

  return (
    <Stack
      component={"form"}
      width={"100%"}
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2} width={"100%"}>
        <Controller
          name="first_name"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.FIRST_NAME}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.LAST_NAME}
            />
          )}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2} width={"100%"}>
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.EMAIL}
            />
          )}
        />
        <Controller
          name="phone_number"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.PHONE_NUMBER}
            />
          )}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2} width={"100%"}>
        <Controller
          name="services"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.SERVICES}
            />
          )}
        />
        <Controller
          name="staff_name"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[50%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.STAFF_NAME}
            />
          )}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2} width={"100%"}>
        <Controller
          name="time_booking"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              required
              value={value}
              onChange={onChange}
              error={!!error?.message}
              className={"w-[100%] bg-white"}
              placeholder={PLACE_HOLDER_BOOKING.TIME_BOOKING}
            />
          )}
        />
      </Stack>
      <Button
        disabled={!isValid}
        className="hover:cursor-pointer text-sm font-semibold !bg-pink-second border-pink-second disabled:!bg-slate-50 disabled:cursor-not-allowed h-14 text-white text-center border border-soli transition-all duration-300 ease-linear delay-75 hover:opacity-70"
      >
        Book now
      </Button>
    </Stack>
  );
};

export default FormBooking;
