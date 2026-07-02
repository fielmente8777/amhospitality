"use client";
import { useWebContext } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import { BookingCalenderIcon, FillDropDownIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import MobileNav from "./MobileNav";
import { WebsiteNavData } from "./navData";

const WebsiteNav = () => {
  const pathName = usePathname();
  const { setIsOpenNavBar, isOpenNavBar } = useWebContext();
  return (
    <header className={`max_screen_width  background-color-1`}>
      <nav className="flex items-center justify-between py-4 max_width">
        <Link href="/" className="block relative md:w-40 w-30 aspect-3/2">
          <Image
            src={WebsiteNavData.logo}
            alt="logo"
            fill
            className="object-cover"
          />
        </Link>
        <ul className="relative xl:flex hidden items-center gap-4">
          {WebsiteNavData.links.map((item, index) => (
            <li className=" relative nav group" key={index}>
              <Link
                href={item.href}
                className={`text-secondary text-[20px] flex items-center gap-2 p-2 `}
              >
                {item.label}
                <span
                  className={`bg-primary ${pathName === item.href ? "w-full" : "span-border"}`}
                ></span>
                {item.subLinks && (
                  <span className="transition-transform duration-300 group-hover:rotate-180">
                    <FillDropDownIcon />
                  </span>
                )}
              </Link>
              {item.subLinks && (
                <span className="nav-1 ">
                  {item.subLinks.map((subLink, subIndex) => {
                    return (
                      <span
                        className="relative group nav-2"
                        key={subIndex + "sub"}
                      >
                        <Link
                          href={subLink.href ? subLink.href : "#"}
                          className={`w-full tracking-wider py-2 px-4 flex flex-col gap-1 group uppercase text-sm text-dark ${pathName === subLink.href ? "bg-background2 text-secondary" : "hover:bg-background2 hover:text-primary"}`}
                        >
                          <span className="uppercase"> {subLink.label}</span>
                        </Link>
                      </span>
                    );
                  })}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link
          href={contact.WhatsappCta}
          className="lg:flex items-center gap-2 rounded-4xl bg-white border px-4 md:px-6 py-2 md:py-3  text-primary font-semibold transition-all hover:scale-105  xl hidden "
        >
          <span>{/* <BookingCalenderIcon /> */}</span>
          Book A Stay
        </Link>
        <button className="lg: border" onClick={() => setIsOpenNavBar(true)}>
          <IoMdMenu className="text-3xl" />
          <span className="sr-only">menu</span>
        </button>
      </nav>
      <MobileNav />
    </header>
  );
};

export default WebsiteNav;
