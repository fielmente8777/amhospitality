"use client";

import Image from "next/image";
import { StayBannerProps } from "../pageData";
import Form1 from "@/components/forms/Form1";

interface Props {
  data: StayBannerProps;
}

export default function StayBanner({ data }: Props) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max_width">
          <h1 className="text-center text-5xl font-bold uppercase text-white">
            {data.title}
          </h1>
          <div>
          <Form1/>
          </div>
          {/* Booking Form */}
          {/* <div className="mt-10 rounded-full bg-white p-2 shadow-lg">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 px-4 py-3 outline-none"
              />

              <input
                type="text"
                placeholder="+91 Phone Number"
                className="flex-1 border-l px-4 py-3 outline-none"
              />

              <select className="flex-1 border-l px-4 py-3 outline-none">
                <option>Select Hotel / Resort</option>
              </select>

              <input
                type="text"
                placeholder="Check-in & out"
                className="flex-1 border-l px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-primary px-8 py-3 text-white"
              >
                Book Now
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}