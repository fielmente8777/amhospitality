"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { AboutUsProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { LeftIcon } from "@/utils/icons";

import { useState } from "react";

interface Props {
  data: AboutUsProps;
}

export default function AboutUs({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>
        <div className="hidden md:block mt-8">
          <SwiperCarousel
            data={data.images}
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
                <div className="grid grid-cols-3 gap-6">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-[2.5/3] overflow-hidden"
                    >
                      <Image
                        src={img}
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

          <div className="absolute top-2 right-0 flex items-center gap-4">
            <button
              className={`custom-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
      ${activeIndex === 1
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
        </div>
      </div>

      <div className="md:hidden mt-8">
        <SwiperCarousel
          data={data.images.flat()}
          slidesPerView={1}
          spaceBetween={24}
          loop
          modules={[Autoplay, Navigation]}
          navigation
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
          renderSlide={(images) => {
            console.log(images);
            return (
              <div className="relative aspect-[2.5/3] overflow-hidden">
                <Image
                  src={images}
                  alt={`About`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          }}
        />
      </div>

      <p
        className="mt-8 text-md md:text-[20px] leading-7 text-secondary"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </SectionWithContainer>
  );
}
