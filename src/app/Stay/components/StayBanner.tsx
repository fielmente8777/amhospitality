import Form1 from "@/components/forms/Form1";
import Section from "@/components/sectionComponants/Section";
import Image from "next/image";
import { StayBannerProps } from "../pageData";

interface Props {
  data: StayBannerProps;
}

export default function StayBanner({ data }: Props) {
  return (
    <Section className="py-0!">
      
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end justify-center py-20 px-6">
          <div className="max_width space-y-10">
            <h1 className="text-center text-3xl md:text-5xl font-bold uppercase text-white ">
              {data.title}
            </h1>
            <div className="hidden md:block">
              <Form1 />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden mt-6">
        <Form1 />
      </div>
    </Section>
  );
}
