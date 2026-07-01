"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { AboutUsProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";

interface Props {
  data: AboutUsProps;
}

export default function AboutUs({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max_width">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>
        <div className="mt-8">
          <SwiperCarousel
            data={data.images}
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
            renderSlide={(images) => (
              <div className="grid grid-cols-3 gap-6">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[2.5/3] overflow-hidden"
                  >
                    <Image
                      src={img}
                      // alt={`About ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          />
        </div>

        <p
          className="mt-8 text-[20px] leading-7 text-secondary"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </section>
  );
}
