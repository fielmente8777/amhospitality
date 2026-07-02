"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { AboutUsProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { LeftIcon } from "@/utils/icons";

interface Props {
  data: AboutUsProps;
}

export default function AboutUs({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="">
      <div className="relative">

        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>
        <div className="hidden md:block mt-8">
          <SwiperCarousel
            data={data.images}
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
                <div className="grid grid-cols-3 gap-6">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-[2.5/3] overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`About ${index + 1}`}
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


      <div className="md:hidden mt-8">
        <SwiperCarousel
          data={data.images.flat()}
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
          renderSlide={(images) => {
            console.log(images);
            return (
              <div className="relative aspect-[2.5/3] overflow-hidden">
                <Image
                  src={images}
                  alt={`About`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          }}
        />
      </div>

      <p
        className="mt-8 text-md md:text-[20px] leading-7 text-secondary"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </SectionWithContainer>
  );
}
