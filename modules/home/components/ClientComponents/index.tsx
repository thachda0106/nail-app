"use client";
import dynamic from "next/dynamic";
import React from "react";

const SectionLoading = dynamic(() =>
  import("@/shared/components/SectionLoading")
);

const SkillNailArt = dynamic(
  () => import("@/modules/home/components/ClientComponents/SkillNailArt"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const TimeWorking = dynamic(
  () => import("@/modules/home/components/ClientComponents/TimeWorking"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const ShiningFeminine = dynamic(
  () => import("@/modules/home/components/ClientComponents/ShiningFeminine"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const Price = dynamic(
  () => import("@/modules/home/components/ClientComponents/Price"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const BookingOffer = dynamic(
  () => import("@/modules/home/components/ClientComponents/BookingOffer"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const BeautifulGallery = dynamic(
  () => import("@/modules/home/components/ClientComponents/BeautifulGallery"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const RevealColourful = dynamic(
  () => import("@/modules/home/components/ClientComponents/RevealColourful"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const Feedback = dynamic(
  () => import("@/modules/home/components/ClientComponents/Feedback"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);
const Booking = dynamic(
  () => import("@/modules/home/components/ClientComponents/Booking"),
  {
    ssr: true,
    loading: () => <SectionLoading />,
  }
);

const HomeCSRComponents = () => {
  return (
    <React.Fragment>
      <SkillNailArt />
      <TimeWorking />
      <ShiningFeminine />
      <Price />
      <BookingOffer />
      <BeautifulGallery />
      <RevealColourful />
      <Feedback />
      <Booking />
    </React.Fragment>
  );
};

export default HomeCSRComponents;
