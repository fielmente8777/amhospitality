"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { DiningProps } from "../pageData";
import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponants";
import { Autoplay, Navigation } from "swiper/modules";
import { LeftIcon } from "@/utils/icons";

import { useState } from "react";

interface Props {
  data: DiningProps;
}

export default function Dining({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Section>
      <div className="relative">
        <Container>
          <SectionHeading title={data.title} />
          <p className="text-[20px] text-secondary">{data.subtitle}</p>
        </Container>
        <div className="mt-8">
          <SwiperCarousel
            data={data.slides}
            slidesPerView={1}
            spaceBetween={24}
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
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-full overflow-hidden"
                    >
                      <Image
                        src={img.image}
                        alt={`Dining ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <div className="absolute top-2 right-0 flex items-center gap-4">
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
              {activeIndex}/{data.slides.length}
            </span>

            <button className="custom-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
              <span className="rotate-180">
                <LeftIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
