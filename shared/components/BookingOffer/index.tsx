import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import BackgroundImage from "@assets/images/background_booking.jpg";
import Link from "next/link";
import { BOOKING_ID_HREF } from "@/shared/constants/common";

const BookingOffer = () => {
  return (
    <Box component={"section"} className={"w-full h-[550px] relative mb-20"}>
      <Image
        src={BackgroundImage}
        fill
        alt={"booking_offer"}
        className={"object-cover z-5"}
      />
      <Stack
        className={
          "absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          className={
            "text-white font-lora text-center text-[28px] mb-8 tracking-[2px]"
          }
        >
          Book Your Visit Online
        </Typography>
        <Typography
          className={
            "text-white font-lora text-center text-[96px] leading-none"
          }
        >
          SAVE UP TO
        </Typography>
        <Typography
          className={
            "text-white font-lora text-center text-[132px] leading-none"
          }
        >
          30% OFF
        </Typography>
        <Button
          className={
            "w-[200px] h-12 text-white uppercase bg-pink-second border border-solid border-pink-second hover:border-white font-catamaran font-bold rounded-none tracking-[2px] mt-10"
          }
        >
          <Link href={`#${BOOKING_ID_HREF}`}>{"BOOKING NOW"}</Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingOffer;
