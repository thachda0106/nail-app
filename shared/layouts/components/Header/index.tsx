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
import { useWindowScrollPositions } from "@/shared/hooks/useWindowScrollPositions";
import LogoWhite from "@/public/assets/images/logo-white.png";
import LogoBlack from "@/public/assets/images/logo-black.png";
import clsx from "clsx";

const SCROLL_THRESHOLD = 70;

const Header = () => {
  const { scrollY } = useWindowScrollPositions();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const isMobile = useMobileScreen(BREAK_POINTS.Medium, false);
  const router = useRouter();
  const CurrentMenuIcon = isOpenMenu ? MenuOpenIcon : MenuIcon;
  const toggleClassNames = scrollY >= SCROLL_THRESHOLD;
  const logoPath = toggleClassNames ? LogoBlack : LogoWhite;

  return (
    <>
      <Box
        component={"header"}
        className={clsx(
          "fixed w-full z-[1000] transition-all duration-[450ms] ease-in-out",
          {
            ["bg-white shadow-lg"]: toggleClassNames,
          }
        )}
      >
        <Container
          sx={{ height: toggleClassNames ? 70 : 90 }}
          component={"div"}
          className={clsx(
            "transition-all duration-300 ease-in-out delay-75 px-5",
            {
              ["py-[10px]"]: !toggleClassNames,
            }
          )}
        >
          <Stack
            component={"div"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
                      className={clsx(
                        `hover:cursor-pointer text-sm font-semibold text-white
                        group-last:bg-pink-second group-last:h-[40px] group-last:w-[135px] 
                        group-last:text-center group-last:!text-white
                        group-last:border group-last:border-solid group-last:hover:border-solid 
                        group-last:leading-[40px] group-last:hover:bg-transparent 
                        group-last:hover:text-white group-last:hover:border`,
                        {
                          ["menu-underline hover:menu-active"]: !isLastMenu,
                          ["!text-black-thin"]: !!toggleClassNames,
                          ["bg-image-white"]: !isLastMenu && !toggleClassNames,
                          ["group-last:hover:!text-black-thin group-last:hover:!border-black-thin"]:
                            !!toggleClassNames,
                        }
                      )}
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
