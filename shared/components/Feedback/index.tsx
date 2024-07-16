"use client";

import {
  FEEDBACK_DESCRIPTION,
  FEEDBACK_ID_HREF,
  FEEDBACK_TITLE,
} from "@constants/common";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { SETTINGS } from "@/shared/constants/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FEEDBACKS } from "@/shared/constants/feedback";

type SlideItemProps = {
  item: {
    name: string;
    feedback: string;
  };
};

const SlideItem: React.FC<SlideItemProps> = ({ item: { feedback, name } }) => {
  return (
    <Stack alignItems={"center"} spacing={2} px={2}>
      <Typography className={"text-center text-lg text-gray-medium"}>
        {`″${feedback}″`}
      </Typography>
      <Typography className={"text-gray-base font-bold"}>
        {`- ${name}`}
      </Typography>
    </Stack>
  );
};

const Feedback = () => {
  return (
    <Box
      component={"section"}
      className={"w-full max-w-[1080px] flex flex-col items-center gap-6"}
      id={FEEDBACK_ID_HREF}
    >
      <Typography
        className={
          "font-bold text-sm tracking-[1.5px] text-gray-primary font-catamaran"
        }
      >
        {FEEDBACK_TITLE}
      </Typography>
      <Typography
        className={
          "font-semibold text-[50px] tracking-[2px] text-gray-base font-lora mb-6"
        }
      >
        {FEEDBACK_DESCRIPTION}
      </Typography>

      <Box width={"100%"}>
        <Slider {...SETTINGS}>
          {FEEDBACKS.map((item) => (
            <SlideItem item={item} key={item.name} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Feedback;
