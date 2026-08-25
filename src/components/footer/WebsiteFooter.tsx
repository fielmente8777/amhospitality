import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { webSiteFooterData } from "./footerdata";
import { MailIcon, MapIcon, PIcon } from "@/utils/icons";

const WebsiteFooter = () => {
  return (
    <footer className="max_screen_width background-color-1 ">
      <Container>
        {/* Logo */}
        <div className="flex justify-center items-center  border-none py-10">
          <div className="h-px flex-1 border-t border-footer1" />
          <div className="relative w-52 aspect-[2/1]">
            <Image
              src={webSiteFooterData.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 border-t border-footer1" />
        </div>

        {/* Footer Links */}
        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-10 border-b border-footer1 py-10 md:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1.4fr]">
          {webSiteFooterData.lists.map((list, index) => {
            const isContactSection = list.title === "Contact Details";

            return (
              <div key={index}>
                <h3 className="mb-5 text-[24px] font-semibold">{list.title}</h3>

                <ul className="space-y-3 text-[18px]">
                  {list.links.map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        {/* CONTACT ICONS ONLY */}
                        {isContactSection && (
                          <span className="mt-1 shrink-0 text-primary">
                            {i === 0 && <MapIcon />}
                            {i === 1 && <PIcon />}
                            {i === 2 && <MailIcon />}
                          </span>
                        )}

                        <div className="flex flex-wrap items-center gap-1">
                          <Link
                            href={item.href}
                            className="text-secondary transition-colors hover:text-primary"
                          >
                            {item.label}
                          </Link>

                          {item.label2 && item.href2 && (
                            <>
                              <span className="text-secondary">, </span>

                              <Link
                                href={item.href2}
                                className="text-secondary hover:text-primary"
                              >
                                {item.label2}
                              </Link>
                            </>
                          )}

                          {item.label3 && item.href3 && (
                            <>
                              <span className="text-secondary">, </span>

                              <Link
                                href={item.href3}
                                className="text-secondary hover:text-primary"
                              >
                                {item.label3}
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="border-none bg-white">
        <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
          <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white text-sm">
            <p className="text-secondary">
              © 2026 AM Hospitality. All Rights Reserved.
            </p>
          </div>
          <p className="text-secondary!">
            Made by{" "}
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

export default WebsiteFooter;
