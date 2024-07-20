import {
  BEAUTIFUL_DESCRIPTION,
  BEAUTIFUL_ID_HREF,
  BEAUTIFUL_TITLE,
} from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import BeautifulOption1 from "@assets/images/beautiful_1.jpg";
import BeautifulOption2 from "@assets/images/beautiful_2.jpg";
import BeautifulOption3 from "@assets/images/beautiful_3.jpg";
import Image from "next/image";
import clsx from "clsx";
import styles from "./index.module.css";

const BeautifulList = [
  { image: BeautifulOption1 },
  { image: BeautifulOption2 },
  { image: BeautifulOption3 },
  { image: BeautifulOption1 },
  { image: BeautifulOption2 },
  { image: BeautifulOption3 },
  { image: BeautifulOption1 },
  { image: BeautifulOption2 },
];

const BeautifulGallery = () => {
  return (
    <Box
      component={"section"}
      className={
        "w-full max-w-[1080px] flex flex-col items-center gap-3 xl:gap-6 px-5 xl:px-0"
      }
      id={BEAUTIFUL_ID_HREF}
    >
      <Typography
        className={
          "font-bold text-sm tracking-[1.5px] text-gray-primary font-catamaran"
        }
      >
        {BEAUTIFUL_TITLE}
      </Typography>
      <Typography
        className={
          "font-semibold text-3xl xl:text-[50px] tracking-[2px] text-gray-base font-lora mb-6 text-center"
        }
      >
        {BEAUTIFUL_DESCRIPTION}
      </Typography>

      <Stack
        className={
          "flex-col sm:flex-row justify-between items-center w-full flex-wrap mt-5 lg:mt-10 gap-5 sm:gap-0"
        }
      >
        {BeautifulList.map((item, index) => {
          return (
            <Fragment key={index}>
              <Box
                className={clsx(
                  "w-full sm:w-[50%] lg:w-[25%] flex flex-col items-center p-0 sm:p-2",
                  styles.item
                )}
              >
                <Box
                  className={
                    "w-full h-[300px] lg:h-[200px] relative overflow-hidden cursor-pointer"
                  }
                >
                  <Image
                    src={item.image}
                    fill
                    alt={"beautiful_option"}
                    className={clsx("object-cover", styles.animationImage)}
                  />
                </Box>
              </Box>
            </Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default BeautifulGallery;
