import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Banner"));
const About = dynamic(() => import("../components/About"));
const SkillNailArt = dynamic(() => import("../components/SkillNailArt"));
const TimeWorking = dynamic(() => import("../components/TimeWorking"));
const ShiningFeminine = dynamic(() => import("../components/About"));
const Price = dynamic(() => import("../components/Price"));
const BookingOffer = dynamic(() => import("../components/BookingOffer"));
const BeautifulGallery = dynamic(() => import("../components/BeautifulGallery"));
const RevealColourful = dynamic(() => import("../components/RevealColourful"));
const Feedback = dynamic(() => import("../components/Feedback"));
const Booking = dynamic(() => import("../components/Booking"));

import { IPageContext } from "@/shared/types/context";

const Home: React.FC<IPageContext> = ({ searchParams }) => {
  const { device } = searchParams;

  return (
    <Stack component={"div"} justifyItems={"center"} alignItems={"center"}>
      <Banner device={device} />
      <About />
      <SkillNailArt />
      <TimeWorking />
      <ShiningFeminine />
      <Price />
      <BookingOffer />
      <BeautifulGallery />
      <RevealColourful />
      <Feedback />
      <Booking />
    </Stack>
  );
};

export default Home;
