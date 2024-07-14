import { PRICE_DESCRIPTION, PRICE_TITLE } from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Gel from "@assets/images/gel.png";
import Image from "next/image";
import { PRICE } from "@/shared/constants/price";

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
    <Stack spacing={"28px"}>
      <Typography className={"font-bold text-sm text-gray-primary"}>
        {type}
      </Typography>
      <Typography
        className={
          "font-semibold font-lora text-[28px] text-gray-base tracking-[2px] mb-3"
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
  return (
    <Box
      component={"section"}
      className={
        "flex flex-col items-center gap-20 w-full max-w-[1080px] my-20"
      }
    >
      <Stack direction={"row"} gap={8} width={"100%"} alignItems={"center"}>
        <Box width={"50%"} height={200} position={"relative"}>
          <Image src={Gel} alt="gel" fill />
        </Box>
        <Box className={"w-[50%] flex flex-col gap-4"}>
          <Typography
            className={
              "text-sm font font-semibold text-gray-primary mb-3 uppercase tracking-[2px]"
            }
          >
            {PRICE_TITLE}
          </Typography>
          <Typography
            variant="h3"
            className={"text-4xl font-lora font-semibold text-gray-base"}
          >
            {PRICE_DESCRIPTION}
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"} width={"100%"} gap={8}>
        <Box width={"50%"}>
          <ColumnPrice data={PRICE[0]} />
        </Box>
        <Box width={"50%"}>
          <ColumnPrice data={PRICE[1]} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Price;
