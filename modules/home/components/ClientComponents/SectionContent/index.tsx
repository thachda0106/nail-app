import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useViewPort } from "@/shared/hooks/useViewPort";

type SectionContentProps = {
  imageSrc: string;
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
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useViewPort(ref);

  return (
    <Stack
      component={"div"}
      ref={ref}
      className={"flex-row-reverse w-full justify-center"}
    >
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
          className={clsx(
            "relative w-full md:w-[45%] md:h-[600px] flex items-center",
            {
              fade_in_left: isVisible,
            }
          )}
        >
          <Image
            fill
            src={imageSrc}
            alt={"image"}
            className={"object-contain h-auto"}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 800px"
          />
        </Box>
        <Box
          className={clsx("flex flex-1 flex-col gap-2", {
            fade_in_right: isVisible,
          })}
        >
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
