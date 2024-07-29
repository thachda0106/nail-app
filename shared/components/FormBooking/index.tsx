"use client";

import { PLACE_HOLDER_BOOKING } from "@/shared/constants/booking";
import useBooking from "@/shared/hooks/useBooking";
import { TextField, Stack, Button, CircularProgress } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React from "react";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { priceGroupedOptions } from "@/shared/constants/services";

import SelectGroup from "../SelectGroup";

const FormBooking = () => {
  const { control, handleSubmit, onSubmit, isValid, isSubmitting } =
    useBooking();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        component={"form"}
        width={"100%"}
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 md:mb-5"
      >
        <Stack
          alignItems={"flex-start"}
          width={"100%"}
          className="md:flex-row gap-4"
        >
          <Controller
            name="first_name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                required
                value={value}
                onChange={onChange}
                error={!!error?.message}
                sx={{
                  width: "100%",
                  ".MuiInputBase-root": {
                    background: "white",
                  },
                  ".MuiFormHelperText-root": {
                    margin: "5px 0 0",
                  },
                }}
                placeholder={PLACE_HOLDER_BOOKING.FIRST_NAME}
                helperText={error?.message}
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
                sx={{
                  width: "100%",
                  ".MuiInputBase-root": {
                    background: "white",
                  },
                  ".MuiFormHelperText-root": {
                    margin: "5px 0 0",
                  },
                }}
                helperText={error?.message}
                placeholder={PLACE_HOLDER_BOOKING.LAST_NAME}
              />
            )}
          />
        </Stack>
        <Stack
          alignItems={"flex-start"}
          width={"100%"}
          className="md:flex-row gap-4"
        >
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                required
                value={value}
                onChange={onChange}
                error={!!error?.message}
                sx={{
                  width: "100%",
                  ".MuiInputBase-root": {
                    background: "white",
                  },
                  ".MuiFormHelperText-root": {
                    margin: "5px 0 0",
                  },
                }}
                helperText={error?.message}
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
                sx={{
                  width: "100%",
                  ".MuiInputBase-root": {
                    background: "white",
                  },
                  ".MuiFormHelperText-root": {
                    margin: "5px 0 0",
                  },
                }}
                helperText={error?.message}
                placeholder={PLACE_HOLDER_BOOKING.PHONE_NUMBER}
              />
            )}
          />
        </Stack>
        <Stack
          alignItems={"flex-start"}
          width={"100%"}
          className="md:flex-row gap-4"
        >
          <Controller
            name="services"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectGroup
                options={priceGroupedOptions}
                value={value}
                onChange={onChange}
                classBox={"w-full h-[56px]"}
                placeholder={PLACE_HOLDER_BOOKING.SERVICES}
                isClearable={true}
              />
            )}
          />
          {/* <Controller
            name="staff_name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Select
                displayEmpty
                value={value}
                onChange={onChange}
                error={!!error?.message}
                sx={{
                  width: "100%",
                  ".MuiInputBase-input": {
                    background: "white",
                  },
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <Typography color={"#a2a2a2"}>
                        {PLACE_HOLDER_BOOKING.STAFF_NAME}
                      </Typography>
                    );
                  }

                  return selected;
                }}
              >
                <MenuItem value={""} style={{ fontStyle: "italic" }}>
                  None
                </MenuItem>
                {STAFFS.map((staff) => (
                  <MenuItem key={staff} value={staff}>
                    {staff}
                  </MenuItem>
                ))}
              </Select>
            )}
          /> */}
        </Stack>
        <Stack direction={"row"} alignItems={"center"} width={"100%"}>
          <Controller
            name="time_booking"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <DateTimePicker
                sx={{
                  width: "100%",
                  ".MuiInputBase-root": {
                    background: "white",
                  },
                  ".MuiFormHelperText-root": {
                    margin: "5px 0 0",
                  },
                }}
                value={value}
                onChange={onChange}
                slotProps={{
                  textField: {
                    required: true,
                    error: !!error,
                    helperText: error?.message,
                    placeholder: PLACE_HOLDER_BOOKING.TIME_BOOKING,
                    value,
                  },
                }}
                disablePast
                defaultValue={null}
              />
            )}
          />
        </Stack>
        <Button
          type="submit"
          disabled={!isValid}
          className="hover:cursor-pointer text-sm font-semibold !bg-pink-second border-pink-second disabled:!bg-slate-50 disabled:cursor-not-allowed h-14 text-white text-center border border-soli transition-all duration-300 ease-linear delay-75 hover:opacity-70"
        >
          {isSubmitting ? (
            <CircularProgress color="inherit" size={22} />
          ) : (
            "Book now"
          )}
        </Button>
      </Stack>
    </LocalizationProvider>
  );
};

export default FormBooking;
