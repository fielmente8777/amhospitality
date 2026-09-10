"use client";
import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";
import LinkButton from "../buttons/LinkButton";
import { usePathname } from "next/navigation";

const LandingFooter = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }
  
  return (
    <footer className="max_screen_width">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr] gap-10">
          <div className=" flex flex-col gap-8">
            <div
              className={`relative 
                  w-full lg:max-w-52 aspect-4/1 md:aspect-[4/1.7] mx-auto`}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>
            <div className="flex max-md:flex-col md:gap-4 gap-2 items-center justify-center">
              {footerData.cta.map((item, index) => (
                <LinkButton
                  label={item.label}
                  href={item.href}
                  key={index}
                  target={index !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  callIcon={index === 0 && true}
                  whatsAppIcon={index === 1 && true}
                  calendarIcon={index === 2 && true}
                  className={`rounded-sm justify-center text-nowrap max-md:w-full border-none uppercase tracking-widest text-xs bg-primary text-white`}
                />
              ))}
            </div>
          </div>

          {footerData.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <h2 className="text-[1.375rem] lg:text-3xl font-medium font-primary">
                {list.title}
              </h2>

              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`grid grid-cols-[auto_1fr] md:gap-4 gap-2`}
                    key={suIndex}
                  >
                    <span
                      className={` ${
                        index === 1
                          ? " flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : " inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {/* {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? " font-aboreto text-2xl my-auto"
                            : "  inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )} */}
                    <span className="flex max-lg:flex-col gap-2">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className="flex gap-2 "
                      >
                        <span
                          className={`${
                            index === 1
                              ? " font-mont text-2xl my-auto"
                              : "  inline-block"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                      {item.label2 && <span className=" -ml-1 max-lg:hidden">|</span>}
                      {item.label2 && item.href2 && (
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href2}
                          className="flex gap-2 max-md:ml-0 break-all"
                        >
                          <span
                            className={`${
                              index === 1 ? " break-all text-2xl my-auto" : " "
                            }`}
                          >
                            {item.label2}
                          </span>
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full rounded-xl border border-primary overflow-hidden max-md:aspect-4/3 aspect-3/2">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="bg-[#3A3939]">
        <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
          <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white text-sm">
            <p className="">© 2026 Swan Suites | All rights reserved</p>
          </div>
          <p className="text-white!">
            Powered by{" "}
            <Link
              href="https://www.fielmente.com/"
              className="font-bold"
              target="_blank"
            >
              Fielmente
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default LandingFooter;
