"use client";

import { SectionHeading } from "@/components/typography";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { LeftIcon, StarIcon, StarIconOrange } from "@/utils/icons";
import { TestimonialProps } from "../pageData";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
interface Props {
  data: TestimonialProps;
}

export default function Testimonials({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-10">
          <SwiperCarousel
            data={data.testimonials}
            slidesPerView={1}
            spaceBetween={32}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            swiperSlideClassName="py-10"
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex + 1);
            }}
            renderSlide={(item) => (
              <div className="rounded-lg bg-white p-6 drop-shadow-xl">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <StarIconOrange key={index} />
                  ))}
                </div>

                <p className="text-sm leading-7 text-secondary">
                  {item.review}
                </p>

                <h4 className="mt-6 font-semibold">{item.name}</h4>
              </div>
            )}
          />
          <div className="hidden absolute top-2 right-0 md:flex items-center gap-4">
            <button
              className={`testimonial-prev flex h-10 w-10 items-center justify-center rounded-full transition-all
      ${
        activeIndex === 1
          ? "bg-[#E9E9E9] text-[#A3A3A3]"
          : "bg-white border border-black text-black"
      }`}
            >
              <LeftIcon />
            </button>

            <span className="text-[20px] font-medium">
              {activeIndex}/{data.testimonials.length}
            </span>

            <button className="testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black">
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
