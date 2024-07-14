import { Box } from "@mui/material";
import React from "react";
import SectionContent from "../SectionContent";
import Smile from "@assets/images/smile.jpg";
import {
  SHINING_FEMENINE_DESCRIPTION,
  SHINING_FEMENINE_ITEM_1,
  SHINING_FEMENINE_ITEM_2,
  SHINING_FEMENINE_LABEL,
  SHINING_FEMENINE_LIST_TITLE,
  SHINING_FEMENINE_TITLE,
} from "@constants/common";

const ShiningFeminine = () => {
  return (
    <Box
      component={"section"}
      className={
        "relative w-full after:bg-smoke-primary after:absolute after:w-full after:left-0 after:top-0 after:h-full after:max-w-[1080px] my-20 after:-z-10"
      }
    >
      <SectionContent
        title={SHINING_FEMENINE_TITLE}
        label={SHINING_FEMENINE_LABEL}
        description={SHINING_FEMENINE_DESCRIPTION}
        listTitle={SHINING_FEMENINE_LIST_TITLE}
        listItem={[SHINING_FEMENINE_ITEM_1, SHINING_FEMENINE_ITEM_2]}
        imageSrc={Smile}
        isReverse
      />
    </Box>
  );
};

export default ShiningFeminine;
