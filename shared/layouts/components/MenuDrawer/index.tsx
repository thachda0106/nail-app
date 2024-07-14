import { Box, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import { MENUS } from "@constants/menus";
import CloseIcon from "@mui/icons-material/Close";

interface PropsType {
  isOpen: boolean;
  handleClose: () => void;
}

const MenuDrawer: React.FC<PropsType> = ({ isOpen, handleClose }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      transitionDuration={300}
    >
      <Box
        component={"span"}
        className="h-10 border-b-[0.8px] border-solid border-gray-thin 
          flex flex-row-reverse px-2 cursor-pointer sm:hidden hover:cursor-pointer"
        onClick={handleClose}
      >
        <CloseIcon className="text-gray-500 my-auto" />
      </Box>
      <Stack component={"ul"} className="w-dvw sm:w-[350px]">
        {MENUS.map(({ name }, index) => (
          <Box
            sx={{ height: 64 }}
            key={index}
            component={"li"}
            className="h-16 border-b-[0.8px] border-solid border-gray-thin py-2 px-5 
              flex hover:cursor-pointer"
          >
            <Typography
              fontFamily={"'Catamaran', sans-serif"}
              component={"span"}
              className="self-center font-semibold text-[15px]"
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Drawer>
  );
};

export default MenuDrawer;
