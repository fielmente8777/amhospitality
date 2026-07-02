"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { ExploreMoreProps } from "../pageData";
import { LeftIcon } from "@/utils/icons";

// interface ExploreMoreProps{
//   data: ExploreMoreProps;
// }

export default function ExploreMore({
  places,
  subtitle,
  title,
}: ExploreMoreProps) {
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
            renderSlide={(item) => (
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[2.5/3] ">
                  <Image
                    src={item.image}
                    // alt={`Explore ${index + 1}`}
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
          <div className=" absolute top-2 right-0 mt-6 flex justify-center items-center gap-2">
            <button className="custom-prev rounded-full bg-gray-400 h-10 w-10 p-2 flex justify-center items-center text-white">
              <LeftIcon />
            </button>

            <p>1/3</p>

            <button className="custom-next rotate-180 rounded-full bg-gray-400 h-10 w-10 p-2 flex justify-center items-center text-white">
              <LeftIcon />
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
