import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BannerImage from "@assets/images/banner.png";
import {
  ABOUT_ID,
  BANNER_BUTTON,
  BANNER_DESCRIPTIONS,
  BANNER_TITLE,
} from "@/shared/constants/common";
import Link from "next/link";
import clsx from "clsx";

const Banner = () => {
  return (
    <Box
      component={"section"}
      className={"bg-[#eeb4c7] w-full min-h-screen relative"}
    >
      <Stack className={"flex-row-reverse w-full justify-center min-h-screen"}>
        <Stack className={"flex-row items-center w-full max-w-[1080px]"}>
          <Box className={clsx("w-[50%] flex flex-col gap-4", "fade_in_left")}>
            <Typography
              variant="h2"
              className={"text-[82px] text-white font-lora font-semibold"}
            >
              {BANNER_TITLE}
            </Typography>
            <Typography
              className={"text-2xl text-[#fdf2f6] font-catamaran mb-[14px]"}
            >
              {BANNER_DESCRIPTIONS}
            </Typography>
            <Button
              className={
                "w-[200px] h-12 text-white uppercase bg-[#da3b85] border border-solid border-[#da3b85] hover:border-white font-catamaran font-bold rounded-none tracking-[2px]"
              }
            >
              <Link href={`#${ABOUT_ID}`}>{BANNER_BUTTON}</Link>
            </Button>
          </Box>
          <Box className={clsx("relative w-[50%] h-[60%]", "fade_in_right")}>
            <Image
              src={BannerImage}
              fill
              alt={"banner_image"}
              className={"object-contain"}
              priority
            />
          </Box>
        </Stack>
      </Stack>
      <Box className={"absolute bottom-0 left-0 w-full z-50"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Banner;
