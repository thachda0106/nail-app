import {
  ABOUT_ID,
  BEAUTIFUL_DESCRIPTION,
  BEAUTIFUL_OPTIONS_1,
  BEAUTIFUL_OPTIONS_2,
  BEAUTIFUL_OPTIONS_3,
  BEAUTIFUL_TITLE,
} from "@/shared/constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import BeautifulOption1 from "@assets/images/beautiful_1.jpg";
import BeautifulOption2 from "@assets/images/beautiful_2.jpg";
import BeautifulOption3 from "@assets/images/beautiful_3.jpg";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import styles from "./index.module.css";

const BeautifulList = [
  { image: BeautifulOption1, label: BEAUTIFUL_OPTIONS_1 },
  { image: BeautifulOption2, label: BEAUTIFUL_OPTIONS_2 },
  { image: BeautifulOption3, label: BEAUTIFUL_OPTIONS_3 },
];

const Beautiful = () => {
  return (
    <Box
      component={"section"}
      className={"w-full max-w-[1080px] flex flex-col items-center gap-6"}
    >
      <Typography
        className={
          "font-bold text-sm tracking-[1.5px] text-[#8e8987] font-catamaran"
        }
      >
        {BEAUTIFUL_TITLE}
      </Typography>
      <Typography
        className={
          "font-semibold text-[50px] tracking-[2px] text-[#373b4d] font-lora mb-6"
        }
      >
        {BEAUTIFUL_DESCRIPTION}
      </Typography>
      <Stack
        className={"flex flex-row justify-between items-center w-full mb-20"}
      >
        {BeautifulList.map((item) => {
          return (
            <Fragment key={item.label}>
              <Box
                className={clsx(
                  "w-[32%] flex flex-col gap-7 items-center",
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
                  href={`#${ABOUT_ID}`}
                  scroll={true}
                  className={clsx(
                    "w-fit font-lora text-2xl font-semibold text-[#373b4d] tracking-widest",
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

export default Beautiful;
