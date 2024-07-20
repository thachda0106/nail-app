"use client";

import { useViewPort } from "@/shared/hooks/useViewPort";
import { TIME_WORKING } from "@constants/calendar";
import {
  TIME_DESCRIPTION,
  TIME_ID_HREF,
  TIME_LABEL,
  TIME_TITLE,
} from "@constants/common";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";

type RowProps = {
  label: string;
  value: string;
};

const Row: React.FC<RowProps> = ({ label, value }) => {
  return (
    <Box className={"flex items-center justify-between"}>
      <Box className={"flex items-center"}>
        <Typography
          className={"w-28 md:w-40 text-lg text-black-medium tracking-widest"}
        >
          {label}
        </Typography>
        -
      </Box>
      <Typography
        className={
          "text-lg text-black-medium font-bold tracking-widest whitespace-nowrap"
        }
      >
        {value}
      </Typography>
    </Box>
  );
};

const TimeWorking = () => {
  const timeWorkingRef = useRef<HTMLElement>(null);

  const handleInViewport = () => {
    timeWorkingRef.current?.classList.add("animation_start");
  };

  useViewPort(timeWorkingRef, handleInViewport);

  return (
    <Box
      component={"section"}
      className={
        "flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 w-full max-w-[1080px] px-5 md:px-0"
      }
      id={TIME_ID_HREF}
      ref={timeWorkingRef}
    >
      <Stack
        divider={<Divider sx={{ borderStyle: "dashed" }} />}
        spacing={2}
        className="w-full md:w-[50%] fade_in_left"
      >
        {TIME_WORKING.map((item) => (
          <Row label={item.label} value={item.value} key={item.label} />
        ))}
      </Stack>
      <Box
        className={
          "w-full md:w-[50%] flex flex-col gap-2 md:gap-4 fade_in_right"
        }
      >
        <Typography
          className={
            "text-sm font-catamaran font-bold text-gray-primary mb-3 uppercase tracking-[2px]"
          }
        >
          {TIME_LABEL}
        </Typography>
        <Typography
          variant="h3"
          className={
            "text-3xl md:text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
          }
        >
          {TIME_TITLE}
        </Typography>
        <Typography className={"text-lg text-gray-medium font-catamaran"}>
          {TIME_DESCRIPTION}
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeWorking;
