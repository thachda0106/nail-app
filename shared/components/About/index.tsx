import { Box } from "@mui/material";
import React from "react";
import AvatarImage from "@assets/images/avatar.jpg";
import {
  ABOUT_DESCRIPTION,
  ABOUT_ID,
  ABOUT_ITEM_1,
  ABOUT_ITEM_2,
  ABOUT_LABEL,
  ABOUT_TITLE,
} from "@constants/common";
import SectionContent from "../SectionContent";

const About = () => {
  return (
    <Box component={"section"} className="w-full py-25" id={ABOUT_ID}>
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
