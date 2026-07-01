"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { DiningProps } from "../pageData";

interface Props {
  data: DiningProps;
}

export default function Dining({ data }: Props) {
  return (
    <section className="">
      <div className="max_width">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-8">
          <SwiperCarousel
            data={data.images}
            renderSlide={(item) => (
              <div className="relative h-[420px] overflow-hidden rounded-lg">
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
      </div>
    </section>
  );
}
