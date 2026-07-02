"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { AboutProps } from "../pageData";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { Autoplay, Navigation } from "swiper/modules";

interface Props {
  data: AboutProps;
}

export default function AboutResort({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="">
     
        <SectionHeading title={data.title} />
        <p className="text-[20px] text-secondary">{data.subtitle}</p>

        <div className="mt-10">
          <SwiperCarousel
              data={[data.images]}
            slidesPerView={1}
            spaceBetween={14}
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
              return (
                <div className="grid grid-cols-[240px_minmax(0,1fr)_240px] gap-4 h-[420px]">
                {/* <div className="grid grid-cols-[240px_minmax(0,1fr)_240px] gap-4 h-[420px]"> */}
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-full overflow-hidden"
                    >
                      <Image
                        src={img.image}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              );
            }}
          />
        </div>

        <p className="mt-8 text-base leading-8 text-secondary">
          {data.description}
        </p>
    
    </SectionWithContainer>
  );
}
//       <SectionWithContainer>
     
//         <SectionHeading title={data.title} />
//         <p className="text-[20px] text-secondary">{data.subtitle}</p>

//         <div className="mt-8">
//           <SwiperCarousel
//             data={data.slides}
//             slidesPerView={1}
//             spaceBetween={24}
//             loop
//             modules={[Autoplay, Navigation]}
//             navigation
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               768: {
//                 slidesPerView: 1,
//               },
//             }}
//             renderSlide={(images) => {
//               return (
//                 <div className="grid grid-cols-[240px_minmax(0,1fr)_240px] gap-4 h-[420px]">
//                   {images.map((img, index) => (
//                     <div
//                       key={index}
//                       className="relative h-full overflow-hidden"
//                     >
//                       <Image
//                         src={img.image}
//                         alt={img.alt}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               );
//             }}
//           />
//         </div>
     
//     </SectionWithContainer>
//   );
// }
