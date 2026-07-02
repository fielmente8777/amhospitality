"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import { SectionHeading } from "@/components/typography";
import { AccommodationProps } from "../pageData";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface Props {
  data: AccommodationProps;
}

export default function Accommodation({ data }: Props) {
  console.log(data);
  return (
    <SectionWithContainer sectionClassName="">
      
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-10">
          <SwiperCarousel
            data={data.cards}
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
            swiperSlideClassName=""
            renderSlide={(card) => (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {card?.map((item, index) => (
                  <div
                    className="relative"
                    key={index}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mx-5 -mt-12 bg-white p-6 box-shadow">
                      <h3 className="text-[32px] font-medium uppercase">
                        {item.title}
                      </h3>

                      {/* Amenities */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        {item.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            {amenity.icon}
                            <span>{amenity.title}</span>
                          </div>
                        ))}

                        {/* <AmenityPopUpButton
                      title={item.popupButton.text}
                      images={item.popupImages}
                    /> */}
                      </div>

                      <p className="mt-6 text-base leading-7 text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
     
    </SectionWithContainer>
  );
}
