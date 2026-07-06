"use client";

import {
  Container,
  SectionWithContainer,
} from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { LeftIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { AboutProps } from "../pageData";

import { useState } from "react";

interface Props {
  data: AboutProps;
}

export default function AboutResort({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <Container>
          <SectionHeading title={data.title} />
          <p className="py-3 md:py-0 text-[20px] text-secondary ">{data.subtitle}</p>
        </Container>

        <div className="mt-10">
          <SwiperCarousel
            data={data.images}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".resort-prev",
              nextEl: ".resort-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            renderSlide={(image) => {
              return (
                <div className="relative w-full aspect-[4/3] md:aspect-[4/2]">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }}
          />
          <div className="hidden absolute top-2 right-0 z-50 md:flex items-center gap-4">
            <button
              className={`resort-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
      ${
        activeIndex === 1
          ? "bg-[#E9E9E9] text-[#A3A3A3]"
          : "bg-white border border-black text-black"
      }`}
            >
              <LeftIcon />
            </button>

            <span className="text-[20px] font-medium">
              {activeIndex}/{data.images.length}
            </span>

            <button className="resort-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
              <span className="rotate-180">
                <LeftIcon />
              </span>
            </button>
          </div>
        </div>

        <p className="mt-5 md:mt-8 text-lg md:text-xl leading-8 text-secondary">
          {data.description}
        </p>
      </div>
    </SectionWithContainer>
  );
}
