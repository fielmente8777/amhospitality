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

interface Props {
  data: DiningProps;
}

export default function Dining({ data }: Props) {
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
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              );
            }}
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
    </Section>
  );
}
