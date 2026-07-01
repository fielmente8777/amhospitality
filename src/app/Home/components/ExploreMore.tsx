"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { ExploreMoreProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";

interface Props {
  data: ExploreMoreProps;
}

export default function ExploreMore({ data }: Props) {
  console.log(data);
  return (
    <section className="py-20">
      <div className="max_width">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-8">
          <SwiperCarousel
            data={data.places}
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
              <div className="grid grid-cols-4 gap-6">
                {images.map((img, index) => (
                  <div key={index} className="">
                    <div className="relative aspect-[2.5/3] ">
                      <Image
                        src={img.image}
                        alt={`Explore ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {img.title && (
                      <div className=" text-secondary py-2 text-lg">{img.title}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
