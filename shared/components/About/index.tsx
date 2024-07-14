import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import AvatarImage from "@assets/images/avatar.jpg";
import {
  ABOUT_DESCRIPTION,
  ABOUT_ID,
  ABOUT_ITEM_1,
  ABOUT_ITEM_2,
  ABOUT_LABEL,
  ABOUT_TITLE,
} from "@/shared/constants/common";

const About = () => {
  return (
    <Box component={"section"} className="w-full py-25" id={ABOUT_ID}>
      <Stack className={"flex-row-reverse w-full justify-center"}>
        <Stack className={"flex-row items-center w-full max-w-[1080px] gap-16"}>
          <Box className={"relative w-[45%] h-[600px]"}>
            <Image
              src={AvatarImage}
              fill
              alt={"banner_image"}
              className={"object-contain"}
            />
          </Box>
          <Box className={"flex flex-1 flex-col gap-4"}>
            <Typography
              className={
                "text-sm font-catamaran font-bold text-[#8e8987] mb-3 uppercase tracking-[2px]"
              }
            >
              {ABOUT_LABEL}
            </Typography>
            <Typography
              variant="h3"
              className={
                "text-[44px] font-lora font-semibold text-[#373b4d] mb-[6px]"
              }
            >
              {ABOUT_TITLE}
            </Typography>
            <Typography className={"text-lg text-[#6c757d] font-catamaran"}>
              {ABOUT_DESCRIPTION}
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                p: 0,
                pl: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem
                className={
                  "text-lg text-[#6c757d] font-catamaran mb-[16px] p-0"
                }
              >
                {ABOUT_ITEM_1}
              </ListItem>
              <ListItem className={"text-lg text-[#6c757d] font-catamaran p-0"}>
                {ABOUT_ITEM_2}
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
