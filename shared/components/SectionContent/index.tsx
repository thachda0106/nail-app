import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type SectionContentProps = {
  imageSrc: StaticImageData;
  label?: string;
  title?: string;
  description?: string;
  listTitle?: string;
  listItem?: string[];
  isReverse?: boolean;
};

const SectionContent: React.FC<SectionContentProps> = ({
  imageSrc,
  label,
  title,
  description,
  listTitle,
  listItem,
  isReverse = false,
}) => {
  return (
    <Stack className={"flex-row-reverse w-full justify-center"}>
      <Stack
        className={clsx(
          "flex-col-reverse items-center w-full max-w-[1080px] gap-8 xl:gap-16",
          {
            ["!flex-col md:!flex-row-reverse"]: !!isReverse,
            ["!flex-col-reverse md:!flex-row"]: !isReverse,
          }
        )}
      >
        <Box
          className={
            "relative w-full md:w-[45%] md:h-[600px] fade_in_left flex items-center"
          }
        >
          <Image
            src={imageSrc}
            alt={"image"}
            className={"object-contain h-auto"}
          />
        </Box>
        <Box className={"flex flex-1 flex-col gap-2 fade_in_right"}>
          {!!label && (
            <Typography
              className={
                "text-sm font-bold text-gray-primary mb-3 uppercase tracking-[2px]"
              }
            >
              {label}
            </Typography>
          )}
          {!!title && (
            <Typography
              variant="h3"
              className={
                "text-3xl xl:text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
              }
            >
              {title}
            </Typography>
          )}
          {!!description && (
            <Typography className={"text-lg text-gray-medium"}>
              {description}
            </Typography>
          )}

          {!!listTitle && (
            <Typography
              className={"text-xl text-gray-base font-semibold font-lora"}
            >
              {listTitle}
            </Typography>
          )}

          {!!listItem && !!listItem.length && (
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
              {listItem.map((item, index) => (
                <ListItem
                  className={clsx(
                    "text-lg text-gray-medium font-catamaran p-0",
                    { "mb-2 xl:mb-4": index !== listItem.length - 1 }
                  )}
                  key={index}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default SectionContent;
