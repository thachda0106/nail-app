import About from "@/shared/components/About";
import Banner from "@/shared/components/Banner";
import BeautifulGallery from "@/shared/components/BeaufitulGallery";
import Booking from "@/shared/components/Booking";
import BookingOffer from "@/shared/components/BookingOffer";
import Feedback from "@/shared/components/Feedback";
import Price from "@/shared/components/Price";
import RevealColourful from "@/shared/components/RevealColourful";
import ShiningFeminine from "@/shared/components/ShiningFeminine";
import SkillNailArt from "@/shared/components/SkillNailArt";
import TimeWorking from "@/shared/components/TimeWorking";
import { IPageContext } from "@/shared/types/context";
import { Stack } from "@mui/material";

const Home: React.FC<IPageContext> = () => {
  return (
    <Stack component={"div"} justifyItems={"center"} alignItems={"center"}>
      <Banner />
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
