"use client";

import {
  Container,
  Section,
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
          <p className="text-[20px] text-secondary">{data.subtitle}</p>
        </Container>
        <div className="absolute top-2 right-0 z-50 flex items-center gap-4">
          <button
            className={`custom-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
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

          <button className="custom-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
            <span className="rotate-180">
              <LeftIcon />
            </span>
          </button>
        </div>
        <div className="mt-10">
          <SwiperCarousel
            data={[data.images]}
            slidesPerView={1}
            spaceBetween={14}
            loop
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            renderSlide={(images) => {
              return (
                <div className="grid grid-cols-[240px_minmax(0,1fr)_240px] gap-4 h-[420px]">
                  {/* <div className="grid grid-cols-[240px_minmax(0,1fr)_240px] gap-4 h-[420px]"> */}
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-full overflow-hidden"
                    >
                      <Image
                        src={img.image}
                        alt={`About ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              );
            }}
          />
        </div>

        <p className="mt-8 text-base leading-8 text-secondary">
          {data.description}
        </p>
      </div>
    </SectionWithContainer>
  );
}
