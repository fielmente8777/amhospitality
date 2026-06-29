"use client";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WebsiteNavData } from "./navData";
import { FillDropDownIcon } from "@/utils/icons";

const MobileNav: React.FC = () => {
  const [openDropDown, setOpenDropDown] = useState<number | null>(null);
  const [openSubDropDown, setOpenSubDropDown] = useState<number | null>(null);
  const pathName = usePathname();
  const { setIsOpenNavBar, isOpenNavBar } = useWebContext();

  useEffect(() => {
    if (isOpenNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenNavBar]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen pointer-events-none z-[9999] bg-black/60 transition-all duration-300 ${isOpenNavBar ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="w-[80%] h-full relative pointer-events-auto">
        <div className="w-full h-full bg-background py-4 ps-4">
          <nav className="flex flex-col gap-2 h-full w-full  font-semibold text-primary">
            <div className="mb-4">
              <Link
                href={"/"}
                onClick={() => setIsOpenNavBar(false)}
                className="flex items-center relative w-40 aspect-4/1.5"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  priority={true}
                  quality={100}
                  fill
                />
              </Link>
            </div>
            <ul className="flex flex-col gap-4 h-[100vh] overflow-y-scroll pe-3">
              {WebsiteNavData.links.map((link, index) => {
                return (
                  <li key={index} className="flex flex-col ">
                    <span className="flex items-center justify-between">
                      {link.href ? (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpenNavBar(false)}
                          className="w-4/5 uppercase"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span
                          className="w-4/5 uppercase"
                          onClick={() =>
                            setOpenDropDown(
                              openDropDown === index ? null : index,
                            )
                          }
                        >
                          {link.label}
                        </span>
                      )}

                      {link.subLinks && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropDown(
                              openDropDown === index ? null : index,
                            )
                          }
                          className="flex items-center gap-2 w-1/5 justify-center"
                        >
                          <span
                            className={
                              openDropDown === index ? "rotate-180" : ""
                            }
                          >
                            <FillDropDownIcon />
                          </span>
                        </button>
                      )}
                    </span>

                    {link.subLinks && openDropDown === index && (
                      <span className="flex flex-col gap-2 mt-4">
                        {link.subLinks.map((subLink, subIndex) => (
                          <span key={subIndex} className="flex flex-col gap-2">
                            <span className="flex items-center justify-between">
                              <Link
                                href={subLink.href ? subLink.href : "/"}
                                onClick={() => {
                                  setIsOpenNavBar(false);
                                  setOpenSubDropDown(null);
                                }}
                                className={`w-4/5 uppercase ${pathName === subLink.href ? "text-secondary" : ""} capitalize text-sm`}
                              >
                                {subLink.label}
                              </Link>
                            </span>
                          </span>
                        ))}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
