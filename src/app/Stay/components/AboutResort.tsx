"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { AboutProps } from "../pageData";

interface Props {
  data: AboutProps;
}

export default function AboutResort({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max_width">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-10">
          <SwiperCarousel
            data={data.images}
            swiperSlideClassName="!w-auto"
            renderSlide={(item) => (
              <div className="relative aspect-[5/3] lg:aspect-[2/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          />
        </div>

        <p className="mt-8 text-base leading-8 text-secondary">
          {data.description}
        </p>
      </div>
    </section>
  );
}
