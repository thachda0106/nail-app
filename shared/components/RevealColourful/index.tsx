import { Box } from "@mui/material";
import React from "react";
import SectionContent from "../SectionContent";
import Smile from "@assets/images/smile2.jpg";
import {
  REVEAL_COLOURFUL_DESCRIPTION,
  REVEAL_COLOURFUL_ITEM_1,
  REVEAL_COLOURFUL_ITEM_2,
  REVEAL_COLOURFUL_LABEL,
  REVEAL_COLOURFUL_LIST_TITLE,
  REVEAL_COLOURFUL_TITLE,
} from "@constants/common";

const RevealColourful = () => {
  return (
    <Box
      component={"section"}
      className={
        "relative w-full after:bg-smoke-primary after:absolute after:w-full after:right-0 after:top-0 after:h-full after:max-w-[1080px] my-20 after:-z-10"
      }
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
