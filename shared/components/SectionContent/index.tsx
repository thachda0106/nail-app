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
        className={clsx("items-center w-full max-w-[1080px] gap-16", {
          ["flex-row-reverse"]: !!isReverse,
          ["flex-row"]: !isReverse,
        })}
      >
        <Box className={"relative w-[45%] h-[600px]"}>
          <Image
            src={imageSrc}
            fill
            alt={"image"}
            className={"object-contain"}
          />
        </Box>
        <Box className={"flex flex-1 flex-col gap-4"}>
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
                "text-[44px] font-lora font-semibold text-gray-base mb-[6px]"
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
                    { "mb-4": index !== listItem.length - 1 }
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
