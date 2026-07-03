"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { ExploreMoreProps } from "../pageData";
import { LeftIcon } from "@/utils/icons";

import { useState } from "react";

// interface ExploreMoreProps{
//   data: ExploreMoreProps;
// }

export default function ExploreMore({
  places,
  subtitle,
  title,
}: ExploreMoreProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <SectionHeading title={title} />
        <p className="text-[20px] text-secondary">{subtitle}</p>

        <div className=" mt-8">
          <SwiperCarousel
            data={places}
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
                slidesPerView: 4,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            renderSlide={(item) => (
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[2.5/3] ">
                  <Image
                    src={item.image}
                    alt={`Explore`}
                    fill
                    className="object-cover"
                  />
                </div>
                {item.title && (
                  <div className=" text-secondary py-2 text-lg">
                    {item.title}
                  </div>
                )}
              </div>
            )}
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
              {activeIndex}/{places.length}
            </span>

            <button className="custom-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
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
