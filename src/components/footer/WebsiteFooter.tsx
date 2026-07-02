import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { webSiteFooterData } from "./footerdata";
import AccordionLinks from "./AccordionLinks";

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1.4fr] gap-10 py-10 border-b border-footer1">
          {webSiteFooterData.lists.map((list, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[24px] mb-5">{list.title}</h3>

              <ul className="space-y-3 text-[18px]">
                {list.links.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
