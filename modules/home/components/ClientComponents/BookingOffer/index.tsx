import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_ID_HREF,
  BOOKING_OFFER_BUTTON,
  BOOKING_OFFER_DESCRIPTION,
  BOOKING_OFFER_SALES,
  BOOKING_OFFER_TITLE,
} from "@/shared/constants/common";

const BookingOffer = () => {
  return (
    <Box component={"section"} className={"w-full h-[550px] relative mb-20"}>
      <Image
        src={'/assets/images/background_booking.jpg'}
        fill
        alt={"booking_offer"}
        className={"object-cover z-5"}
        sizes="100vw"
      />
      <Stack
        className={
          "absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full"
        }
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          className={
            "text-white font-lora text-center text-2xl xl:text-[28px] mb-4 xl:mb-8 tracking-[2px]"
          }
        >
          {BOOKING_OFFER_TITLE}
        </Typography>
        <Typography
          className={
            "text-white font-lora text-center text-5xl xl:text-[96px] leading-none"
          }
        >
          {BOOKING_OFFER_DESCRIPTION}
        </Typography>
        <Typography
          className={
            "text-white font-lora text-center text-7xl xl:text-[132px] leading-none"
          }
        >
          {BOOKING_OFFER_SALES}
        </Typography>
        <Button
          className={
            "w-[200px] h-12 text-white uppercase bg-pink-second border border-solid border-pink-second hover:border-white font-catamaran font-bold rounded-none tracking-[2px] mt-10"
          }
        >
          <Link href={`#${BOOKING_ID_HREF}`}>{BOOKING_OFFER_BUTTON}</Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingOffer;
