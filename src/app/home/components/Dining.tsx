"use client";

import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { LeftIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { DiningProps } from "../pageData";

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
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".dining-prev",
              nextEl: ".dining-next",
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
          <div className="hidden absolute top-2 right-0 md:flex items-center gap-4 px-25">
            <button
              className={`dining-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
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

            <button className="dining-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
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
