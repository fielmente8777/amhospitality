

import Image from "next/image";
import Link from "next/link";
import { ResortCard } from "../pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

interface Props {
  data: ResortCard[];
}

export default function ResortCards({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="">

      <div className="grid lg:grid-cols-2 gap-5 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white py-8"
          >
            <div className="relative aspect-[4/2.5] md:aspect-[3/2]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 bg-white p-4 md:mx-5 md:-mt-12 md:p-6 box-shadow">
              <h2 className="text-2xl font-bold uppercase">{item.title}</h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <Link
                  href={item.bookhref}
                  className="rounded-full bg-primary px-6 py-3 text-sm text-white inline-flex items-center justify-center"
                >
                  {item.bookButton}
                </Link>

                <Link
                  href={item.morehref}
                  className="text-primary font-semibold uppercase"
                >
                  {item.moreButton} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </SectionWithContainer>
  );
}
