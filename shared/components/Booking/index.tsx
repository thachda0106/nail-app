import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BookingImage from "@assets/images/booking-1.jpg";
import Image from "next/image";
import FormBooking from "../FormBooking";

const Booking = () => {
  return (
    <Box
      component={"section"}
      className={
        "relative w-full after:bg-smoke-primary after:absolute after:w-full after:left-0 after:top-0 after:h-full after:max-w-[1080px] my-20 after:-z-10"
      }
    >
      <Stack className={"flex-row-reverse w-full justify-center"}>
        <Stack
          className={
            "flex-row-reverse items-center w-full max-w-[1080px] gap-16"
          }
        >
          <Box className={"relative w-[45%] h-[600px]"}>
            <Image
              src={BookingImage}
              fill
              alt={"image"}
              className={"object-contain"}
            />
          </Box>
          <Box className={"flex flex-1 flex-col gap-4"}>
            <Typography
              className={
                "text-sm font-bold text-gray-primary mb-3 uppercase tracking-[2px]"
              }
            >
              {"BOOKING NOW"}
            </Typography>
            <Typography
              variant="h3"
              className={
                "text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
              }
            >
              {"Make An Appointment"}
            </Typography>
            <FormBooking />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Booking;
