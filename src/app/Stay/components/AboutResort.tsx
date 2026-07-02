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

interface Props {
  data: AboutProps;
}

export default function AboutResort({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <Container>
          <SectionHeading title={data.title} />
          <p className="text-[20px] text-secondary">{data.subtitle}</p>
        </Container>
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

        <p className="mt-8 text-base leading-8 text-secondary">
          {data.description}
        </p>
      </div>
    </SectionWithContainer>
  );
}
