import React from "react";
import { HospitalityProps } from "../pageData";
import { SectionHeading } from "@/components/typography";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface Props {
  data: HospitalityProps;
}

export default function Hospitality({ data }: Props) {
  console.log(data);
  return (
    <SectionWithContainer sectionClassName="bg-secondary text-white text-center">
      <SectionHeading title={data.title} />

      <div className="grid grid-cols-1 max-md:gap-5 md:grid-cols-4 mt-10">
        {data.card.map((card, index) => (
          <div key={index} className="">
            <p className="text-xl font-semibold">{card.subtitle}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}
