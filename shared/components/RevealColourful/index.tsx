"use client";

import { Box } from "@mui/material";
import React, { useRef } from "react";
import SectionContent from "../SectionContent";
import Smile from "@assets/images/smile2.jpg";
import {
  REVEAL_COLOURFUL_DESCRIPTION,
  REVEAL_COLOURFUL_ID_HREF,
  REVEAL_COLOURFUL_ITEM_1,
  REVEAL_COLOURFUL_ITEM_2,
  REVEAL_COLOURFUL_LABEL,
  REVEAL_COLOURFUL_LIST_TITLE,
  REVEAL_COLOURFUL_TITLE,
} from "@constants/common";
import { useViewPort } from "@/shared/hooks/useViewPort";

const RevealColourful = () => {
  const revealColourfulRef = useRef<HTMLElement>(null);

  const handleInViewport = () => {
    revealColourfulRef.current?.classList.add("animation_start");
  };

  useViewPort(revealColourfulRef, handleInViewport);

  return (
    <Box
      component={"section"}
      className={
        "relative w-full md:after:bg-smoke-primary after:absolute after:w-full after:right-0 after:top-0 after:h-full after:max-w-[1080px] my-20 after:-z-10 px-5 md:px-0"
      }
      id={REVEAL_COLOURFUL_ID_HREF}
      ref={revealColourfulRef}
    >
      <SectionContent
        title={REVEAL_COLOURFUL_TITLE}
        label={REVEAL_COLOURFUL_LABEL}
        description={REVEAL_COLOURFUL_DESCRIPTION}
        listTitle={REVEAL_COLOURFUL_LIST_TITLE}
        listItem={[REVEAL_COLOURFUL_ITEM_1, REVEAL_COLOURFUL_ITEM_2]}
        imageSrc={Smile}
      />
    </Box>
  );
};

export default RevealColourful;
