"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { OurDestinationsProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import {
  LeftIcon,
  GoaIcon,
  SambhajinagarIcon,
  JimCorbettIcon,
  MadhyaPradeshIcon,
} from "@/utils/icons";
import { useState } from "react";

interface Props {
  data: OurDestinationsProps;
}

export default function OurDestinations({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <SectionHeading title={data.title} />
        <p className="text-[18px] leading-[27px] md:text-[20px] md:leading-normal text-secondary">
          {data.subtitle}
        </p>

        {/* Carousel */}
        <div className="mt-10">
          <SwiperCarousel
            data={data.destinations}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".destinations-prev",
              nextEl: ".destinations-next",
            }}
            swiperSlideClassName="py-10"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            renderSlide={(item) => {
              return (
                <div className="group relative rounded-lg bg-white p-6 md:p-8 drop-shadow-xl flex flex-col items-center justify-center min-h-[250px] text-center transition-all duration-300">
                  {/* Top-Left Brand Logo */}
                  <div className="absolute top-3.5 left-4 md:top-4 md:left-5 w-20 h-10 md:w-24 md:h-12">
                    <Image
                      src="/images/logo.png"
                      alt="AM Hospitality"
                      fill
                      sizes="100px"
                      className="object-contain object-left-top"
                    />
                  </div>

                  {/* Logo or Icon */}
                  <div className="relative w-36 h-20 md:w-44 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {item.icon === "goa" ? (
                      <GoaIcon className="w-14 h-14 md:w-18 md:h-18" />
                    ) : item.icon === "sambhajinagar" ? (
                      <SambhajinagarIcon className="w-14 h-14 md:w-18 md:h-18" />
                    ) : item.icon === "jim-corbett" ? (
                      <JimCorbettIcon className="w-14 h-14 md:w-18 md:h-18" />
                    ) : item.icon === "madhya-pradesh" ? (
                      <MadhyaPradeshIcon className="w-14 h-14 md:w-18 md:h-18" />
                    ) : item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 150px, 200px"
                        className={`object-contain ${item.title.includes("WABI") ? "p-2 md:p-3 scale-95" : ""}`}
                      />
                    ) : null}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[16px] md:text-[18px] font-semibold tracking-[0.15em] text-secondary uppercase">
                    {item.title}
                  </h3>

                  {/* Status */}
                  <p className="mt-1 text-[12px] md:text-[13px] tracking-[0.2em] text-[#8C7A6B] font-medium uppercase">
                    {item.status}
                  </p>

                  {/* Decorative underline */}
                  <div className="mt-2.5 w-12 h-[1.5px] bg-[#C5B49F] transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </div>
              );
            }}
          />

          {/* Navigation Controls */}
          <div className="hidden absolute top-2 right-0 md:flex items-center gap-4">
            <button
              className={`destinations-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
              ${
                activeIndex === 1
                  ? "bg-[#E9E9E9] text-[#A3A3A3]"
                  : "bg-white border border-black text-black hover:bg-black hover:text-white"
              }`}
              aria-label="Previous destination"
            >
              <LeftIcon />
            </button>

            <span className="text-[20px] font-medium text-secondary">
              {activeIndex}/{data.destinations.length}
            </span>

            <button
              className="destinations-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-black hover:text-white"
              aria-label="Next destination"
            >
              <span className="rotate-180">
                <LeftIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
