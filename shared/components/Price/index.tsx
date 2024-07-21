"use client";

import {
  PRICE_DESCRIPTION,
  PRICE_ID_HREF,
  PRICE_TITLE,
} from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Gel from "@assets/images/nails_polish.png";
import Image from "next/image";
import { PRICES } from "@/shared/constants/services";
import { useViewPort } from "@/shared/hooks/useViewPort";

type RowPriceProps = {
  label: string;
  value: string;
  description?: string;
};

const RowPrice: React.FC<RowPriceProps> = ({ label, value }) => {
  return (
    <Stack width={"100%"}>
      <Stack direction={"row"} alignItems={"baseline"}>
        <Typography
          className={
            "text-xl text-gray-base font-semibold font-lora tracking-[0.25px]"
          }
        >
          {label}
        </Typography>
        <Typography className={"border-b border-dashed flex-1"}></Typography>
        <Typography
          className={"text-xl text-gray-base font-semibold font-lora"}
        >
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
};

type ColumnPriceProps = {
  data: {
    type: string;
    services: RowPriceProps[];
    href?: string;
  };
};

const ColumnPrice: React.FC<ColumnPriceProps> = ({ data }) => {
  const { type, services, href } = data;
  return (
    <Stack className="gap-3 xl:gap-5">
      <Typography
        className={"font-bold text-sm text-gray-primary tracking-[2px]"}
        id={href}
      >
        {type}
      </Typography>
      <Stack spacing={2}>
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
        "flex flex-col items-center gap-20 w-full max-w-[1080px] my-20 px-5 xl:px-0"
      }
      id={PRICE_ID_HREF}
      ref={priceRef}
    >
      <Stack className="flex-col-reverse lg:flex-row items-center gap-8 xl:gap-16 w-full">
        <Box className="w-full lg:w-[50%] h-[200px] relative fade_in_left">
          <Image src={Gel} alt="gel" fill className="h-auto object-fill" />
        </Box>
        <Box
          className={
            "w-full lg:w-[50%] flex flex-col gap-2 lg:gap-4 fade_in_right items-center"
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
              "text-3xl lg:text-4xl font-lora font-semibold text-gray-base text-center md:text-left"
            }
          >
            {PRICE_DESCRIPTION}
          </Typography>
        </Box>
      </Stack>

      <Stack className={"w-full flex-col gap-5"}>
        <Stack className="w-full gap-8 xl:gap-16 lg:flex-row">
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[0]} />
          </Box>
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[1]} />
          </Box>
        </Stack>

        <Stack className="w-full gap-8 xl:gap-16 lg:flex-row">
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[2]} />
          </Box>
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[3]} />
          </Box>
        </Stack>

        <Stack className="w-full gap-8 xl:gap-16 lg:flex-row">
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[4]} />
          </Box>
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[5]} />
          </Box>
        </Stack>

        <Stack className="w-full gap-8 xl:gap-16 lg:flex-row">
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[6]} />
          </Box>
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[7]} />
          </Box>
        </Stack>

        <Stack className="w-full gap-8 xl:gap-16 lg:flex-row">
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[8]} />
          </Box>
          <Box className={"w-full lg:w-[50%] fade_in_up"}>
            <ColumnPrice data={PRICES[9]} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Price;
