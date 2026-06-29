import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};


interface websiteNavLink {
  logo: string;
  links: {
    label: string;
    href: string;
    subLinks?: {
      label: string;
      href: string;
    }[];
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export const WebsiteNavData: websiteNavLink = {
  logo: "/logo.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    {
      label: "Locations",
      href: "/locations/",
      subLinks: [
        {
          label: "Gachibowli Hotel",
          href: "/locations/gachibowli-hotel/",
        },
        {
          label: " Madhapur Apartment",
          href: "/locations/madhapur-apartment/",
        },
      ],
    },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact-us/" },
  ],
  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};
