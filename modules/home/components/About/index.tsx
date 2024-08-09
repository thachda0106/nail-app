"use client";

import { Box } from "@mui/material";
import React from "react";
import {
  ABOUT_DESCRIPTION,
  ABOUT_ID_HREF,
  ABOUT_ITEM_1,
  ABOUT_ITEM_2,
  ABOUT_LABEL,
  ABOUT_TITLE,
} from "@constants/common";
import SectionContent from "../ClientComponents/SectionContent";

const About = () => {
  return (
    <Box
      component={"section"}
      className="w-full py-25 px-5 xl:px-0 my-10 xl:my-0 mx-auto animation_start"
      id={ABOUT_ID_HREF}
    >
      <SectionContent
        imageSrc={'/assets/images/avatar.jpg'}
        title={ABOUT_TITLE}
        label={ABOUT_LABEL}
        description={ABOUT_DESCRIPTION}
        listItem={[ABOUT_ITEM_1, ABOUT_ITEM_2]}
      />
    </Box>
  );
};

export default About;
