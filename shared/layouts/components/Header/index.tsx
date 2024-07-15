"use client";

import { BREAK_POINTS } from "@/shared/constants/breakpoints";
import useMobileScreen from "@/shared/hooks/useMobileScreen";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/SettingsPhoneOutlined";
import Link from "next/link";
import MenuDrawer from "../MenuDrawer";
import { MENUS } from "@constants/menus";
import { useRouter } from "next/navigation";
import { STORE_INFORMATION } from "@/shared/constants/storeInformation";
import { scrollToElementById } from "@/shared/utils/scroll";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const isMobile = useMobileScreen(BREAK_POINTS.Medium);
  const router = useRouter();
  const CurrentMenuIcon = isOpenMenu ? MenuOpenIcon : MenuIcon;
  const logoPath = "/assets/images/logo-black.png";

  return (
    <>
      <Box component={"header"} className="shadow-lg">
        <Container sx={{ height: 90 }} component={"div"} className="py-[10px]">
          <Stack
            component={"div"}
            direction={"row"}
            justifyContent={"space-between"}
            className="min-h-full transition-all ease-linear duration-300"
          >
            {isMobile && (
              <Link
                href={`tel:${STORE_INFORMATION.Contacts.phoneNumber}`}
                className="self-center"
              >
                <PhoneIcon className="text-gray-icon text-[30px]" />
              </Link>
            )}
            <Image
              width={129}
              height={45}
              src={logoPath}
              fetchPriority="high"
              alt="logo"
              className="h-fit self-center cursor-pointer"
              onClick={() => router.push("/")}
            />
            {isMobile ? (
              <Box
                component={"span"}
                className="self-center"
                onClick={() => setOpenMenu((preState) => !preState)}
              >
                <CurrentMenuIcon className="text-gray-icon text-[30px] cursor-pointer " />
              </Box>
            ) : (
              <Stack
                component={"ul"}
                direction={"row"}
                className="h-min gap-5 lg:gap-10"
              >
                {MENUS.map(({ name, id, isLastMenu }, index) => (
                  <Box
                    key={index}
                    component={"li"}
                    className={`group h-[70px] flex items-center font-bold`}
                    onClick={() => scrollToElementById(id)}
                  >
                    <Typography
                      component={"span"}
                      className={`hover:cursor-pointer text-black-thin text-sm font-semibold 
                        group-last:bg-pink-primary group-last:h-[40px] group-last:w-[135px] 
                        group-last:text-white group-last:text-center
                        group-last:border group-last:border-solid group-last:hover:border-solid 
                        group-last:leading-[40px] group-last:hover:bg-transparent 
                        group-last:hover:text-black-thin group-last:hover:border  
                        transition-all duration-300 ease-in-out delay-75
                        group-last:cursor-pointer
                        ${
                          isLastMenu ? "" : "menu-underline hover:menu-active"
                        }`}
                    >
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>
      <MenuDrawer
        isOpen={isMobile && isOpenMenu}
        handleClose={() => setOpenMenu(false)}
      />
    </>
  );
};

export default Header;
