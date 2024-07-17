"use client";

import { Box } from "@mui/material";
import React, { useRef } from "react";
import AvatarImage from "@assets/images/avatar.jpg";
import {
  ABOUT_DESCRIPTION,
  ABOUT_ID_HREF,
  ABOUT_ITEM_1,
  ABOUT_ITEM_2,
  ABOUT_LABEL,
  ABOUT_TITLE,
} from "@constants/common";
import SectionContent from "../SectionContent";
import { useViewPort } from "@/shared/hooks/useViewPort";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const handleInViewport = () => {
    aboutRef.current?.classList.add("animation_start");
  };

  useViewPort(aboutRef, handleInViewport);

  return (
    <Box
      component={"section"}
      className="w-full py-25"
      id={ABOUT_ID_HREF}
      ref={aboutRef}
    >
      <SectionContent
        imageSrc={AvatarImage}
        title={ABOUT_TITLE}
        label={ABOUT_LABEL}
        description={ABOUT_DESCRIPTION}
        listItem={[ABOUT_ITEM_1, ABOUT_ITEM_2]}
      />
    </Box>
  );
};

export default About;
