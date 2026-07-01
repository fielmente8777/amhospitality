"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { ExploreMoreProps } from "../pageData";

interface Props {
  data: ExploreMoreProps;
}

export default function ExploreMore({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max_width">
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-8">
          <SwiperCarousel
            data={data.places}
            renderSlide={(item) => (
              <div>
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="mt-4 text-lg font-medium">{item.title}</h4>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
