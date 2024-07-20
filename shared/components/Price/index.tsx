"use client";

import {
  PRICE_DESCRIPTION,
  PRICE_ID_HREF,
  PRICE_TITLE,
} from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Gel from "@assets/images/gel.png";
import Image from "next/image";
import { PRICE } from "@/shared/constants/price";
import { useViewPort } from "@/shared/hooks/useViewPort";

type RowPriceProps = {
  label: string;
  value: string;
  description?: string;
};

const RowPrice: React.FC<RowPriceProps> = ({ label, value, description }) => {
  return (
    <Stack width={"100%"}>
      <Stack direction={"row"} alignItems={"baseline"}>
        <Typography
          className={"text-2xl text-gray-base font-semibold font-lora"}
        >
          {label}
        </Typography>
        <Typography className={"border-b border-dashed flex-1"}></Typography>
        <Typography
          className={"text-2xl text-gray-base font-semibold font-lora"}
        >
          {value}
        </Typography>
      </Stack>
      <Typography className={"text-lg text-gray-medium tracking-widest italic"}>
        {description}
      </Typography>
    </Stack>
  );
};

type ColumnPriceProps = {
  data: {
    type: string;
    description: string;
    services: RowPriceProps[];
  };
};

const ColumnPrice: React.FC<ColumnPriceProps> = ({ data }) => {
  const { type, description, services } = data;
  return (
    <Stack className="gap-3 md:gap-7">
      <Typography className={"font-bold text-sm text-gray-primary"}>
        {type}
      </Typography>
      <Typography
        className={
          "font-semibold font-lora text-[28px] text-gray-base tracking-[2px] mb-1 md:mb-3"
        }
      >
        {description}
      </Typography>
      <Stack>
        {services.map((item, index) => (
          <RowPrice
            label={item.label}
            value={item.value}
            description={item.description}
            key={index}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const Price = () => {
  const priceRef = useRef<HTMLElement>(null);

  const handleInViewport = () => {
    priceRef.current?.classList.add("animation_start");
  };

  useViewPort(priceRef, handleInViewport);

  return (
    <Box
      component={"section"}
      className={
        "flex flex-col items-center gap-20 w-full max-w-[1080px] my-20 px-5 md:px-0"
      }
      id={PRICE_ID_HREF}
      ref={priceRef}
    >
      <Stack className="flex-col-reverse md:flex-row items-center gap-8 md:gap-16 w-full">
        <Box className="w-full md:w-[50%] h-[200px] relative fade_in_left">
          <Image src={Gel} alt="gel" fill />
        </Box>
        <Box
          className={
            "w-full md:w-[50%] flex flex-col gap-2 md:gap-4 fade_in_right items-center"
          }
        >
          <Typography
            className={
              "text-sm font font-semibold text-gray-primary mb-3 uppercase tracking-[2px]"
            }
          >
            {PRICE_TITLE}
          </Typography>
          <Typography
            variant="h3"
            className={
              "text-3xl md:text-4xl font-lora font-semibold text-gray-base text-center md:text-left"
            }
          >
            {PRICE_DESCRIPTION}
          </Typography>
        </Box>
      </Stack>
      <Stack className="w-full gap-8 md:gap-16 md:flex-row">
        <Box className={"w-full md:w-[50%] fade_in_up"}>
          <ColumnPrice data={PRICE[0]} />
        </Box>
        <Box className={"w-full md:w-[50%] fade_in_up"}>
          <ColumnPrice data={PRICE[1]} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Price;
