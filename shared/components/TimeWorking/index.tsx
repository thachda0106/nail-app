import { TIME_WORKING } from "@constants/calendar";
import {
  TIME_DESCRIPTION,
  TIME_ID_HREF,
  TIME_LABEL,
  TIME_TITLE,
} from "@constants/common";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

type RowProps = {
  label: string;
  value: string;
};

const Row: React.FC<RowProps> = ({ label, value }) => {
  return (
    <Box className={"flex items-center justify-between"}>
      <Box className={"flex items-center"}>
        <Typography
          className={"w-40 text-lg text-black-medium tracking-widest"}
        >
          {label}
        </Typography>
        -
      </Box>
      <Typography
        className={"text-lg text-black-medium font-bold tracking-widest"}
      >
        {value}
      </Typography>
    </Box>
  );
};

const TimeWorking = () => {
  return (
    <Box
      component={"section"}
      className={"flex items-center gap-16 w-full max-w-[1080px]"}
      id={TIME_ID_HREF}
    >
      <Stack
        width={"50%"}
        divider={<Divider sx={{ borderStyle: "dashed" }} />}
        spacing={2}
      >
        {TIME_WORKING.map((item) => (
          <Row label={item.label} value={item.value} key={item.label} />
        ))}
      </Stack>
      <Box className={"w-[50%] flex flex-col gap-4"}>
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
            "text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
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
