"use client";

import { SectionHeading } from "@/components/typography";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { LeftIcon, StarIcon, StarIconOrange } from "@/utils/icons";
import { TestimonialProps } from "../pageData";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface Props {
  data: TestimonialProps;
}

export default function Testimonials({ data }: Props) {
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
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            swiperSlideClassName="py-10"
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            renderSlide={(item) => (
              <div className="rounded-lg bg-white p-6 drop-shadow-xl">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <StarIconOrange />
                  ))}
                </div>

                <p className="text-sm leading-7 text-secondary">
                  {item.review}
                </p>

                <h4 className="mt-6 font-semibold">{item.name}</h4>
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
