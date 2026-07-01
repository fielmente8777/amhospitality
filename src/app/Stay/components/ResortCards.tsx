"use client";

import Image from "next/image";
import Link from "next/link";
import { ResortCard } from "../pageData";

interface Props {
  data: ResortCard[];
}

export default function ResortCards({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max_width">
        <div className="grid lg:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
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
      </div>
    </section>
  );
}
