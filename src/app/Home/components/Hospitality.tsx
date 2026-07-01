import React from "react";
import { HospitalityProps } from "../pageData";
import { SectionHeading } from "@/components/typography";

interface Props {
  data: HospitalityProps;
}

export default function Hospitality({ data }: Props) {
  console.log(data);
  return (
    <div className="bg-secondary text-white text-center py-15 max_screen_width">
      <SectionHeading title={data.title} />

      <div className="grid grid-cols-1 max-md:gap-5 md:grid-cols-4 mt-10">
        {data.card.map((card,index) =>
          ( 
            <div className="">
             <p className="text-xl font-semibold">{card.subtitle}</p>
             <p>{card.description}</p>
            </div>    
          )
         )}
        </div>
    </div>
  );
}
