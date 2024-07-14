import About from "@/shared/components/About";
import Banner from "@/shared/components/Banner";
import BeautifulGallery from "@/shared/components/BeaufitulGallery";
import Booking from "@/shared/components/Booking";
import Feedback from "@/shared/components/Feedback";
import Price from "@/shared/components/Price";
import RevealColourful from "@/shared/components/RevealColourful";
import ShiningFeminine from "@/shared/components/ShiningFeminine";
import SkillNailArt from "@/shared/components/SkillNailArt";
import TimeWorking from "@/shared/components/TimeWorking";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <About />
      <SkillNailArt />
      <TimeWorking />
      <ShiningFeminine />
      <Price />
      <BeautifulGallery />
      <RevealColourful />
      <Feedback />
      <Booking />
    </div>
  );
}
