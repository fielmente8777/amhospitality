"use client";

import { SectionHeading } from "@/components/typography";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { StarIcon, StarIconOrange } from "@/utils/icons";
import { TestimonialProps } from "../pageData";

interface Props {
  data: TestimonialProps;
}

export default function Testimonials({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max_width">
        
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-10">
          <SwiperCarousel
            data={data.testimonials}
            slidesPerView={3}
            spaceBetween={32}
            navigation={true}
            swiperSlideClassName="!h-auto"
            renderSlide={(item) => (
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <StarIconOrange/>
                    
                  ))}
                </div>

                
                <p className="text-sm leading-7 text-secondary">
                  {item.review}
                </p>

                <h4 className="mt-6 font-semibold">{item.name}</h4>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
