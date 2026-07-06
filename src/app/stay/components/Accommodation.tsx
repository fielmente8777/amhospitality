"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import { SectionHeading } from "@/components/typography";
import { AccommodationProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { LeftIcon } from "@/utils/icons";
import { useState } from "react";

interface Props {
  data: AccommodationProps;
}

export default function Accommodation({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <SectionHeading title={data.title} />
        <p className="py-3 md:py-0 text-[20px] text-secondary">
          {data.subtitle}
        </p>

        <div className="mt-10">
          <SwiperCarousel
            data={data.cards}
            slidesPerView={1}
            spaceBetween={24}
            loop
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".accommodation-prev",
              nextEl: ".accommodation-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            swiperSlideClassName=""
            renderSlide={(card) => (
              // <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="overflow-hidden bg-white">
                {/* Image */}
                <div className="relative aspect-[4/2.5] lg:aspect-[3/2]">
                  <Image
                    src={card.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 bg-white mb-6 md:mx-5 md:-mt-12 md:p-6 box-shadow">
                  <h3 className="text-[24px] md:text-[32px] font-medium uppercase">
                    {card.title}
                  </h3>

                  {/* Amenities */}
                  <div className="mt-4 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-between">
                    {card.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {amenity.icon}
                        <span>{amenity.title}</span>
                      </div>
                    ))}

                    {/* <AmenityPopUpButton
                      title={item.popupButton.text}
                      images={item.popupImages}
                    /> */}
                  </div>

                  <p className="mt-6 text-base leading-7 text-secondary">
                    {card.description}
                  </p>
                </div>
              </div>
              // </div>
            )}
          />
          <div className="hidden absolute top-2 right-0 z-50 md:flex items-center gap-4">
            <button
              className={`accommodation-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
      ${
        activeIndex === 1
          ? "bg-[#E9E9E9] text-[#A3A3A3]"
          : "bg-white border border-black text-black"
      }`}
            >
              <LeftIcon />
            </button>

            <span className="text-[20px] font-medium">
              {activeIndex}/{data.cards.length}
            </span>

            <button className="accommodation-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
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
