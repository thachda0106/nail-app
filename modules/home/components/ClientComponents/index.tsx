"use client";
import useClient from "@/shared/hooks/useClient";
import dynamic from "next/dynamic";
import React from "react";

const SectionLoading = dynamic(() =>
  import("@/shared/components/SectionLoading")
);

const SkillNailArt = dynamic(
  () => import("@/modules/home/components/ClientComponents/SkillNailArt"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const TimeWorking = dynamic(
  () => import("@/modules/home/components/ClientComponents/TimeWorking"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const ShiningFeminine = dynamic(
  () => import("@/modules/home/components/ClientComponents/ShiningFeminine"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const Price = dynamic(
  () => import("@/modules/home/components/ClientComponents/Price"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const BookingOffer = dynamic(
  () => import("@/modules/home/components/ClientComponents/BookingOffer"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const BeautifulGallery = dynamic(
  () => import("@/modules/home/components/ClientComponents/BeautifulGallery"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const RevealColourful = dynamic(
  () => import("@/modules/home/components/ClientComponents/RevealColourful"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const Feedback = dynamic(
  () => import("@/modules/home/components/ClientComponents/Feedback"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);
const Booking = dynamic(
  () => import("@/modules/home/components/ClientComponents/Booking"),
  {
    ssr: false,
    loading: () => <SectionLoading />,
  }
);

const HomeCSRComponents = () => {
  const { isClient } = useClient();

  return (
    <React.Fragment>
      {isClient && (
        <>
          <SkillNailArt />
          <TimeWorking />
          <ShiningFeminine />
          <Price />
          <BookingOffer />
          <BeautifulGallery />
          <RevealColourful />
          <Feedback />
          <Booking />
        </>
      )}
    </React.Fragment>
  );
};

export default HomeCSRComponents;
