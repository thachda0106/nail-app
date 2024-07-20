import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BookingImage from "@assets/images/booking-1.jpg";
import Image from "next/image";
import FormBooking from "../FormBooking";
import {
  BOOKING_DESCRIPTION,
  BOOKING_ID_HREF,
  BOOKING_TITLE,
} from "@/shared/constants/common";

const Booking = () => {
  return (
    <Box
      component={"section"}
      className={
        "relative w-full md:after:bg-smoke-primary after:absolute after:w-full after:left-0 after:top-0 after:h-full after:md:max-w-[75%] my-20 after:-z-10 px-5 xl:px-0"
      }
      id={BOOKING_ID_HREF}
    >
      <Stack className={"flex-row-reverse w-full justify-center"}>
        <Stack
          className={
            "md:flex-row-reverse items-center w-full max-w-[1080px] gap-8 xl:gap-16"
          }
        >
          <Box className={"relative w-full md:w-[45%] h-[300px] md:h-[600px]"}>
            <Image
              src={BookingImage}
              fill
              alt={"image"}
              className={"object-cover md:object-contain"}
            />
          </Box>
          <Box className={"flex flex-1 flex-col gap-2 xl:gap-4 w-full"}>
            <Typography
              className={
                "text-sm font-bold text-gray-primary mb-3 uppercase tracking-[2px]"
              }
            >
              {BOOKING_TITLE}
            </Typography>
            <Typography
              variant="h3"
              className={
                "text-2xl xl:text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
              }
            >
              {BOOKING_DESCRIPTION}
            </Typography>
            <FormBooking />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Booking;
