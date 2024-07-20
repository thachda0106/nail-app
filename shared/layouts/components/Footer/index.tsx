"use client";

import Link from "next/link";
import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { STORE_INFORMATION } from "@/shared/constants/storeInformation";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { scrollToTopPage } from "@/shared/utils/scroll";
import { CONTACT_ID_HREF } from "@/shared/constants/common";

const Footer = () => {
  const { Contacts, Location, OpeningHours, Socials } = STORE_INFORMATION;

  return (
    <Box component={"footer"} className="pb-[40px]">
      <Stack
        component={"div"}
        justifyContent={"center"}
        alignItems={"center"}
        className="h-[100px] md:h-fit mt-0 md:my-[20px]"
      >
        <Fab
          aria-label="add"
          className="bg-gray-icon animate-bounce z-50"
          onClick={scrollToTopPage}
        >
          <KeyboardArrowUpIcon className="text-white font-bold" />
        </Fab>
      </Stack>
      <Container component={"div"} className="px-5">
        <Stack
          component={"ul"}
          direction={"row"}
          justifyContent={"space-between"}
          gap={3}
          flexWrap={"wrap"}
        >
          <Box
            component={"li"}
            className="flex flex-col gap-3 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-3*24px)/4)]"
          >
            <Typography component={"h5"} className="font-semibold text-[22px]">
              Location
            </Typography>
            <Typography component={"p"} className="flex flex-col">
              <Typography
                component={"span"}
                className="text-gray-medium font-semibold text-[18px]"
              >
                {Location.name}
              </Typography>
              <Typography
                component={"span"}
                className="text-gray-medium text-base"
              >
                {Location.address}
              </Typography>
            </Typography>
          </Box>

          <Box
            component={"li"}
            className="flex flex-col gap-3 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-3*24px)/4)]"
            id={CONTACT_ID_HREF}
          >
            <Typography component={"h5"} className="font-semibold text-[22px]">
              Contacts
            </Typography>
            <Typography component={"p"} className="flex flex-col">
              <Link href={`tel:${Contacts.phoneNumber}`}>
                <Typography
                  component={"span"}
                  className="text-gray-medium text-base underline min-h-[27px] block"
                >
                  {`ph: ${Contacts.phoneNumber}`}
                </Typography>
              </Link>
              <Link href={`mailto:${Contacts.email}`}>
                <Typography
                  component={"span"}
                  className="text-gray-medium text-base underline font-semibold min-h-[27px] block"
                >
                  {Contacts.email}
                </Typography>
              </Link>
            </Typography>
            <Stack component={"ul"} direction={"row"} gap={1}>
              <Link href={Socials.Instagram} target="_blank">
                <InstagramIcon className="text-gray-icon text-[30px]" />
              </Link>
              <Link href={Socials.Facebook} target="_blank">
                <FacebookIcon className="text-gray-icon text-[30px]" />
              </Link>
              <Link href={Socials.Twitter} target="_blank">
                <XIcon className="text-gray-icon text-[30px]" />
              </Link>
            </Stack>
          </Box>

          <Box
            component={"li"}
            className="flex flex-col gap-3 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-3*24px)/4)]"
          >
            <Typography component={"h5"} className="font-semibold text-[22px]">
              Opening Hours
            </Typography>
            <Typography component={"p"}>
              {OpeningHours.map((time, index) => (
                <Typography
                  key={index}
                  component={"span"}
                  className="min-h-[27px] block text-gray-medium text-base"
                >
                  {time}
                </Typography>
              ))}
            </Typography>
          </Box>

          <Box
            component={"li"}
            className="h-[300px] md:h-[150px] w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-3*24px)/4)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.888598219116!2d106.70799907480443!3d10.743068489403711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9d3b606717%3A0x6e4f8c8e76ddd3c5!2zMzYgxJDGsOG7nW5nIFPhu5EgMjcsIFTDom4gUXV5LCBRdeG6rW4gNywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1720863935810!5m2!1svi!2s"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Box>
        </Stack>
        <Box
          component={"div"}
          className="text-gray-medium flex mt-5 flex-col items-end md:flex-row md:justify-between"
        >
          <Typography component={"span"} className="w-fit">
            © 2024 Nail Store. All Rights Reserved.
          </Typography>
          <Typography component={"span"} className="w-fit">
            Privacy Policy Terms & Conditions{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
