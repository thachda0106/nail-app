"use client";

import {
  PRICE_ID_HREF,
  SKILL_NAIL_ART_DESCRIPTION,
  SKILL_NAIL_ART_ID_HREF,
  SKILL_NAIL_ART_OPTIONS_1,
  SKILL_NAIL_ART_OPTIONS_2,
  SKILL_NAIL_ART_OPTIONS_3,
  SKILL_NAIL_ART_TITLE,
} from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment, useRef } from "react";
import BeautifulOption1 from "@assets/images/beautiful_1.jpg";
import BeautifulOption2 from "@assets/images/beautiful_2.jpg";
import BeautifulOption3 from "@assets/images/beautiful_3.jpg";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import styles from "./index.module.css";
import { useViewPort } from "@/shared/hooks/useViewPort";

const BeautifulList = [
  { image: BeautifulOption1, label: SKILL_NAIL_ART_OPTIONS_1 },
  { image: BeautifulOption2, label: SKILL_NAIL_ART_OPTIONS_2 },
  { image: BeautifulOption3, label: SKILL_NAIL_ART_OPTIONS_3 },
];

const SkillNailArt = () => {
  const skillNailRef = useRef<HTMLDivElement>(null);

  const handleInViewPort = () => {
    skillNailRef.current?.classList?.add(styles.fadeInUp);
  };

  useViewPort(skillNailRef, handleInViewPort);

  return (
    <Box
      component={"section"}
      className={
        "w-full max-w-[1080px] flex flex-col items-center gap-3 md:gap-6 px-5 md:px-0"
      }
      id={SKILL_NAIL_ART_ID_HREF}
    >
      <Typography
        className={
          "font-bold text-sm tracking-[1.5px] text-gray-primary font-catamaran text-center"
        }
      >
        {SKILL_NAIL_ART_TITLE}
      </Typography>
      <Typography
        className={
          "font-semibold text-[50px] tracking-[2px] text-gray-base font-lora mb-6 text-center"
        }
      >
        {SKILL_NAIL_ART_DESCRIPTION}
      </Typography>
      <Stack
        className={
          "flex flex-col md:flex-row justify-between items-center w-full mb-20 gap-6 md:gap-0"
        }
        ref={skillNailRef}
      >
        {BeautifulList.map((item) => {
          return (
            <Fragment key={item.label}>
              <Box
                className={clsx(
                  "w-full md:w-[32%] flex flex-col gap-7 items-center",
                  styles.item
                )}
              >
                <Box
                  className={
                    "w-full h-[380px] relative overflow-hidden cursor-pointer"
                  }
                >
                  <Image
                    src={item.image}
                    fill
                    alt={"beautiful_option"}
                    className={clsx("object-cover", styles.animationImage)}
                  />
                </Box>

                <Link
                  href={`#${PRICE_ID_HREF}`}
                  scroll={true}
                  className={clsx(
                    "w-fit font-lora text-2xl font-semibold text-gray-base tracking-widest",
                    styles["animationText"]
                  )}
                >
                  {item.label}
                </Link>
              </Box>
            </Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SkillNailArt;
