"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ABOUT_ID_HREF,
  BANNER_BUTTON,
  BANNER_DESCRIPTIONS,
  BANNER_ID_HREF,
  BANNER_TITLE,
  SKILL_NAIL_ART_ID_HREF,
} from "@constants/common";
import Link from "next/link";
import clsx from "clsx";
import useMobileScreen from "@/shared/hooks/useMobileScreen";
import { scrollToElementById } from "@/shared/utils/scroll";
import { BREAK_POINTS, DEVICE_TYPES } from "@/shared/constants/breakpoints";

interface PropsType {
  device: DEVICE_TYPES,
}

const Banner: React.FC<PropsType> = ({ device }) => {
  const isMobile = useMobileScreen(BREAK_POINTS.Small, device);

  return (
    <Box
      component={"section"}
      className={
        "bg-[#eeb4c7] w-dvw max-w-full min-h-screen relative pt-[70px] animation_start"
      }
      id={BANNER_ID_HREF}
    >
      <Stack
        direction={'row-reverse'}
        justifyContent={'center'}
        className={
          "w-full min-h-screen px-5 xl:px-0"
        }
      >
        <Stack
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems={'center'}
          className={
            "w-full max-w-[1080px] gap-5 xl:gap-0"
          }
        >
          <Box
            className={clsx(
              "w-full lg:w-[50%] flex flex-col gap-4 items-center md:items-start mt-20 lg:mt-0",
              "fade_in_left"
            )}
          >
            <Typography
              fontSize={isMobile ? 40 : 82}
              fontWeight={600}
              variant="h2"
              fontFamily={"var(--font-lora)"}
              className={
                "text-[40px] lg:text-[82px] text-white font-lora font-semibold text-center md:text-left"
              }
            >
              {BANNER_TITLE}
            </Typography>
            <Typography
              fontFamily={"var(--font-catamaran)"}
              fontSize={isMobile ? 18 : 24}
              className={
                "text-lg lg:text-2xl text-[#fdf2f6] font-catamaran mb-[14px] text-center md:text-left"
              }
            >
              {BANNER_DESCRIPTIONS}
            </Typography>
            <Button
              onClick={() => scrollToElementById(ABOUT_ID_HREF)}
              sx={{ background: "#da3b85", color: "white" }}
              className={
                "z-[100] w-[200px] h-12 text-white uppercase bg-pink-second border border-solid border-pink-second hover:border-white font-catamaran font-bold rounded-none tracking-[2px]"
              }
            >
              <Link href={`#${SKILL_NAIL_ART_ID_HREF}`} prefetch={false}>
                <Typography
                  fontFamily={"var(--font-catamaran)"}
                  fontSize={14}
                >
                  {BANNER_BUTTON}
                </Typography>
              </Link>
            </Button>
          </Box>
          <Box
            className={clsx(
              "relative w-full lg:w-[50%] h-[400px] lg:h-[60%]",
              "fade_in_right"
            )}
          >
            <Image
              src={'/assets/images/banner.png'}
              fill
              alt={"banner_image"}
              className={"object-contain fill-transparent"}
              fetchPriority="high"
              priority
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 540px"
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
