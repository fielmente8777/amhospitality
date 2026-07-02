"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { ExploreMoreProps } from "../pageData";

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
      <SectionHeading title={title} />
      <p className="text-[20px] text-secondary">{subtitle}</p>

      <div className=" mt-8">
        <SwiperCarousel
          data={places}
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
                <div className=" text-secondary py-2 text-lg">{item.title}</div>
              )}
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
}
