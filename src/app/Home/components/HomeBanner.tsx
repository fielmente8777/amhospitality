"use client";

import Image from "next/image";
import { HomeBannerProps } from "../pageData";
import Form1 from "@/components/forms/Form1";

interface Props {
     data: HomeBannerProps;
}

export default function HomeBanner ({data}: Props) {
     return (
    <section className="relative h-[500px] max_screen_width overflow-hidden">
      {/* Banner Image */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max_width flex flex-col items-center">
          <h1 className="text-center text-5xl font-bold uppercase text-white">
            {data.title}
          </h1>

          <p className="mt-4 text-center text-[20px] text-white">
            {data.description}
          </p>
          <div className="mt-6">
          <Form1/>
          </div>
        </div>
      </div>
    </section>
  );
}