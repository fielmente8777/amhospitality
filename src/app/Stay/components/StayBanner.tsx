

import Image from "next/image";
import { StayBannerProps } from "../pageData";
import Form1 from "@/components/forms/Form1";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface Props {
  data: StayBannerProps;
}

export default function StayBanner({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="relative aspect-[5/2] overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-end justify-center py-20">
        <div className="max_width space-y-10">
          <h1 className="text-center text-5xl font-bold uppercase text-white ">
            {data.title}
          </h1>
          <div>
            <Form1 />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
