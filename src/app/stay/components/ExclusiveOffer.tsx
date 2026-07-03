"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton, { ArrowIcon } from "@/components/buttons/LinkButton";
import { OfferProps } from "../pageData";
import SectionHeading from "@/components/typography/SectionHeading";
import { FArrowIcon } from "@/utils/icons";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface Props {
  data: OfferProps;
}

export default function ExclusiveOffer({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max_width">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="relative hidden md:block aspect-4/3 lg:aspect-3/2">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-white  aspect-4/3 lg:aspect-3/2 px-6 md:px-12 py-5 md:py-10 ">
            <SectionHeading title={data.title} />

            <p className="mt-6  text-secondary">{data.description}</p>

            <div className="mt-10 flex items-center justify-between max-md:gap-2">
              <Link
                href={data.bookNowButton.href}
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 md:px-8 py-3 md:min-w-[170px] font-medium transition hover:opacity-90"
              >
                {data.bookNowButton.text}
              </Link>

              <Link
                href={data.contactButton.href}
                className="flex items-center gap-2 uppercase text-primary font-medium underline underline-offset-4"
              >
                {data.contactButton.text}
                <span>
                  <FArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
